import { useGLTF, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Lights from "./LightQueEs";
import Recipient from "./RecipientQueEs"; // Importa el componente Recipient
import Text3Dinfo from "./Text3Dinfo";
import ManejoCamara from "./ManejoCamara"; // Importa el componente ManejoCamara
import TextMark from "./TextClick"; // Importa el componente Text

//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
    const { nodes, materials } = useGLTF("/models-3d/tbc-que-es.glb");
    return (
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bodyperson2.geometry}
            material={materials.Material_bp1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bodyperson1.geometry}
            material={materials.Material_bp1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Virus.geometry}
            material={materials.Materialvirus}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Virus2.geometry}
            material={materials.Materialvirus}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Virus1.geometry}
            material={materials.Materialvirus}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Virus3.geometry}
            material={materials.Materialvirus}
          />
        </group>
    )
}
useGLTF.preload("/models-3d/tbc-que-es.glb");

function useKeyPressP(callback) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'p' || event.key === 'P') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}
const PiantModel = (props) => {
  const [showMessage, setShowMessage] = useState(true)
  const [mensajeinformativo, setMensajeinformativo] = useState(``)
  const handleQuestionClick = () => {
    //alert("¡Has hecho clic en el signo de pregunta!");
    setShowMessage(prev => !prev);
    cambiarMensaje();
  };
  const cambiarMensaje = () => {
    //console.log("showMessage", showMessage);
    if (showMessage) {
      setMensajeinformativo("El contagio más probable de la tuberculosis ocurre por vía aérea, cuando una persona con tuberculosis pulmonar activa tose, estornuda, habla o escupe, liberando al aire pequeñas gotas que contienen el bacilo Mycobacterium tuberculosis. Las personas que están cerca pueden inhalar estas gotas y, si la exposición es prolongada o frecuente, existe un alto riesgo de contagio. El riesgo aumenta en lugares cerrados, con poca ventilación y donde hay aglomeración de personas, como hogares, cárceles o albergues. Es importante destacar que la tuberculosis no se transmite por contacto físico, alimentos o compartir objetos.");
    }
    if (!showMessage) {
      setMensajeinformativo(``);
    }
  }
  
  useKeyPressP(() => {
    setShowMessage(prev => !prev);
    cambiarMensaje();
  });
  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [0, 10, 20] }} shadows={true}>
        {/* <Perf /> */}
        <OrbitControls target={[0, 10, 10]} />
        <Lights />
        {/* <Staging /> */}
        <Model scale={5} />
        <Recipient />
        {/* <BakeShadows /> 
          <ContactShadows
            frames={16}
            opacity={1}
            scale={20}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          /> 
          <SoftShadows size={20} samples={4} focus={2} />*/}
        <ManejoCamara sm={showMessage}/>
        <TextMark onClick={handleQuestionClick} texto={mensajeinformativo} />
        <Text3Dinfo
          position={[2, 20, 0]} // Posición del texto
          onClick={handleQuestionClick}
        />
      </Canvas>
    </Suspense>
  );
};

export default PiantModel
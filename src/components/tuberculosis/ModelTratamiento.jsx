/* eslint-disable react/no-unknown-property */
import { useGLTF, OrbitControls, Image } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState, use } from "react";
import { Perf } from "r3f-perf";
import Lights from "./LightTratamiento";
import Recipient from "./RecipientTratamiento"; // Importa el componente Recipient
import Staging from "./StagingQueEs";
import TextMark from "./TextClick"; // Importa el componente Text
import Text3Dinfo from "./Text3Dinfo"; // Importa el componente Text3Dinfo
import Loader3D from '../../components/Loader';
import ManejoCamara from "./ManejoCamara"; // Importa el componente ManejoCamara
import HtmlQuestion from "./HtmlQuestion";
import HtmlInfo from "./HtmlInfo"; // Importa el componente HtmlInfo

//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/tbc-tratamiento.glb");
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Material_obj}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.Material_obj}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Material_obj6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.Material_obj7}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/tbc-tratamiento.glb");
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
  const [showHtmlinfo, setHtmlinfo] = useState(false)
  const [mensajeinformativo, setMensajeinformativo] = useState(``)
  const handleQuestionClick = () => {
    //alert("¡Has hecho clic en el signo de pregunta!");
    setShowMessage(prev => !prev);
    cambiarMensaje();
  };
  const cambiarMensaje = () => {
    //console.log("showMessage", showMessage);
    if (showMessage) {
      setMensajeinformativo("La vacuna BCG estimula el sistema inmunológico para que produzca una respuesta defensiva en el cuerpo, especialmente en los pulmones, al reconocer y atacar las bacterias de la tuberculosis. Aunque no cura directamente la infección activa, la vacuna induce la producción de células inmunitarias, como los macrófagos y linfocitos T, que son capaces de identificar y destruir las bacterias de Mycobacterium tuberculosis en caso de exposición futura. Esto ayuda a prevenir la propagación de la enfermedad y la aparición de formas graves, como la tuberculosis miliar o meningitis, protegiendo el pulmón y otros órganos de una infección más severa.");
    }
    if (!showMessage) {
      setMensajeinformativo(``);
    }
  }
  
  useKeyPressP(() => {
    setShowMessage(prev => !prev);
    cambiarMensaje();
  });

  const handleHtmlClick = () => {
    setHtmlinfo(prev => !prev);
  }

  const info = `Al presionar la tecla 'P' o darle clic en el mismo letrero 3D "presiona P", puedes encontrar más información sobre la Tubercules, además de interactuar con el modelo 3D.`;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Suspense fallback={<Loader3D message="Cargando tratamiento de tuberculosis..." />}>
        <Canvas camera={{ position: [0, 10, 20] }} shadows={true}>
        {/* <Perf /> */}
        <OrbitControls target={[0, 10, 10]} />
        <ManejoCamara sm={showMessage}/>
        <Lights />
        {/* <Staging /> */}
        <Model scale={5} />
        <Recipient />
        
        <TextMark onClick={handleQuestionClick} texto={mensajeinformativo} />
        <Text3Dinfo position={[0, 15, 0]} // Posición del texto
          onClick={handleQuestionClick}
        />
        {showHtmlinfo ? (
          <HtmlInfo onRestore={handleHtmlClick} mensaje={info} />
        ) : (
          <HtmlQuestion position={[-20, 0, 0]} onClick={handleHtmlClick} />
        )}
      </Canvas>
    </Suspense>
    </div>
  );
};

export default PiantModel

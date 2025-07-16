/* eslint-disable react/no-unknown-property */
import { useGLTF, Loader, OrbitControls, useAnimations  } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState, use } from "react";
import { Perf } from "r3f-perf";
import Lights from "./LightSintomas";
import Recipient from "./RecipientSintomas"; // Importa el componente Recipient
import Staging from "./StagingQueEs";
import TextMark from "./TextClick"; // Importa el componente Text
import Text3Dinfo from "./Text3Dinfo"; // Importa el componente Text3Dinfo
import ManejoCamara from "./ManejoCamara"; // Importa el componente ManejoCamara
//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/models-3d/tbc-sintomas-2.glb");
    const { actions } = useAnimations(animations, group)
    // console.log("animations", actions);
     console.log("nodes", nodes);
    useEffect(() => {
      const action = actions.Beating;
      if (action) {
        //console.log("action", action);
        action.play();
        return () => action.stop();
      }
    }, [actions.Beating]);
    
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Aorta"
            castShadow
            receiveShadow
            geometry={nodes.Aorta.geometry}
            material={materials.Material_Aorta}
          />
          <mesh
            name="Heart"
            castShadow
            receiveShadow
            geometry={nodes.Heart.geometry}
            material={materials.Material_Heart}
            morphTargetDictionary={nodes.Heart.morphTargetDictionary}
            morphTargetInfluences={nodes.Heart.morphTargetInfluences}
          />
          <mesh
            name="Paorta"
            castShadow
            receiveShadow
            geometry={nodes.Paorta.geometry}
            material={materials.Material_Paorta}
            morphTargetDictionary={nodes.Paorta.morphTargetDictionary}
            morphTargetInfluences={nodes.Paorta.morphTargetInfluences}
          />
          <mesh
            name="Airways"
            castShadow
            receiveShadow
            geometry={nodes.Airways.geometry}
            material={materials.Material_Airways}
          />
          <mesh
            name="left_long3"
            castShadow
            receiveShadow
            geometry={nodes.left_long3.geometry}
            material={materials.Material_left_long3}
          />
          <mesh
            name="left_long"
            castShadow
            receiveShadow
            geometry={nodes.left_long.geometry}
            material={materials.Material_left_long}
          />
          <mesh
            name="left_long2"
            castShadow
            receiveShadow
            geometry={nodes.left_long2.geometry}
            material={materials.Material_left_long2}
          />
          <mesh
            name="right_long2"
            castShadow
            receiveShadow
            geometry={nodes.right_long2.geometry}
            material={materials['Material_right_long.001']}
          />
          <mesh
            name="right_long"
            castShadow
            receiveShadow
            geometry={nodes.right_long.geometry}
            material={materials.Material_right_long}
          />
          <mesh
            name="Hyoid"
            castShadow
            receiveShadow
            geometry={nodes.Hyoid.geometry}
            material={materials.Material_Hyoid}
          />
          <mesh
            name="larynx"
            castShadow
            receiveShadow
            geometry={nodes.larynx.geometry}
            material={materials.Material_larynx}
          />
          <mesh
            name="Bronchi"
            castShadow
            receiveShadow
            geometry={nodes.Bronchi.geometry}
            material={materials.Material_Bronchi}
          />
          <mesh
            name="Thyriod"
            castShadow
            receiveShadow
            geometry={nodes.Thyriod.geometry}
            material={materials.Material_Thyriod}
          />
          <mesh
            name="Virus"
            castShadow
            receiveShadow
            geometry={nodes.Virus.geometry}
            material={materials.DefaultMaterial}
            position={[-2.048, 0, 0]}
            scale={0.15}
          />
          <mesh
            name="Virus1"
            castShadow
            receiveShadow
            geometry={nodes.Virus1.geometry}
            material={materials.DefaultMaterial}
            position={[-1.222, 0.82, -0.346]}
            scale={0.15}
          />
          <mesh
            name="Virus2"
            castShadow
            receiveShadow
            geometry={nodes.Virus2.geometry}
            material={materials.DefaultMaterial}
            position={[-1.663, -0.869, -0.624]}
            scale={0.15}
          />
          <mesh
            name="Virus3"
            castShadow
            receiveShadow
            geometry={nodes.Virus3.geometry}
            material={materials.DefaultMaterial}
            position={[-1.663, -0.869, -0.624]}
            scale={0.15}
          />
          <mesh
            name="Virus4"
            castShadow
            receiveShadow
            geometry={nodes.Virus4.geometry}
            material={materials.DefaultMaterial}
            position={[-1.663, -0.869, -0.624]}
            scale={0.15}
          />
          <mesh
            name="Virus5"
            castShadow
            receiveShadow
            geometry={nodes.Virus5.geometry}
            material={materials.DefaultMaterial}
            position={[1.08, -0.36, -1.024]}
            scale={0.15}
          />
          <mesh
            name="Virus6"
            castShadow
            receiveShadow
            geometry={nodes.Virus6.geometry}
            material={materials.DefaultMaterial}
            position={[1.967, 0.606, -0.367]}
            scale={0.15}
          />
        </group>
      </group>
    )
}
useGLTF.preload("/models-3d/tbc-sintomas.glb");
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
const PiantModelSintomas = (props) => {
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
      setMensajeinformativo("Cuando el bacilo de la tuberculosis (Mycobacterium tuberculosis) entra al pulmón, generalmente lo hace a través del aire al inhalar gotículas contaminadas. Una vez en los pulmones, la bacteria es captada por unas células del sistema inmunológico llamadas macrófagos. Aunque estos intentan destruirla, el bacilo puede sobrevivir dentro de ellos y comenzar a multiplicarse. Esto provoca una respuesta inmunitaria que forma estructuras llamadas granulomas, donde las bacterias quedan encerradas. En muchos casos, la infección queda controlada en esta fase, pero si el sistema inmunológico no logra contenerla, la bacteria puede seguir propagándose y dañar el tejido pulmonar.");
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
        <ManejoCamara sm={showMessage}/>
        <Lights />
        {/* <Staging /> */}
        <Model scale={5} 
          position={[0, 8, 0]}
          // onClick={() => actions["Take Off"].play()}
        />
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
          <TextMark onClick={handleQuestionClick} texto={mensajeinformativo} />
          <Text3Dinfo
            onClick={handleQuestionClick}
          />
      </Canvas>
    </Suspense>
  );
};

export default PiantModelSintomas
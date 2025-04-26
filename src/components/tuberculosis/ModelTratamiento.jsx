import { useGLTF, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import Lights from "./LightTratamiento";
import Recipient from "./RecipientTratamiento"; // Importa el componente Recipient
import Staging from "./StagingQueEs";
//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/tbc-tratamiento.glb");
  return (
    <group {...props} dispose={null}>
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

const PiantModel = (props) => {
  console.log("PiantModel Tratamieno montado");
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
      </Canvas>
    </Suspense>
  );
};

export default PiantModel

import { useGLTF, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lights from "./LightQueEs";
import Recipient from "./RecipientQueEs"; // Importa el componente Recipient

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
const PiantModel = (props) => {
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
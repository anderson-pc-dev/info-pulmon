import { useGLTF, Loader, OrbitControls, useAnimations  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Perf } from "r3f-perf";
import Lights from "./LightSintomas";
import Recipient from "./RecipientSintomas"; // Importa el componente Recipient
import Staging from "./StagingQueEs";
//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/models-3d/tbc-sintomas.glb");
    const { actions } = useAnimations(animations, group)
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
          />
          <mesh
            name="Paorta"
            castShadow
            receiveShadow
            geometry={nodes.Paorta.geometry}
            material={materials.Material_Paorta}
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
const PiantModelSintomas = (props) => {
  console.log("PiantModel montado sintomas");
  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [0, 10, 20] }} shadows={true}>
        <Perf />
        <OrbitControls target={[0, 10, 10]} />
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
      </Canvas>
    </Suspense>
  );
};

export default PiantModelSintomas
import { useGLTF, Loader, OrbitControls, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Perf } from "r3f-perf";
import Lights from "./LightPrevencion";
import Recipient from "./RecipientPrevencion"; // Importa el componente Recipient
import Staging from "./StagingQueEs";
//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models-3d/tbc-prevencion.glb");
  const { actions } = useAnimations(animations, group)
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="person">
            <group name="g_person">
              <group name="Object_2">
                <group name="RootNode001">
                  <group
                    name="Object_4"
                    position={[1.396, 0.983, 0.463]}
                    rotation={[-3.122, 0, 0]}
                    scale={0}>
                    <group
                      name="CC_Base_Body"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <group
                      name="Hair"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <group
                      name="Jeans"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <group
                      name="Object_10"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials['Sneakers.001']}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <group
                      name="Object_12"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials['Jeans.001']}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <group
                      name="Object_14"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials['Std_Skin_Arm.001']}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials['Std_Skin_Head.001']}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials['Std_Nails.001']}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <group
                      name="Object_6"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials['embed_hair_male.001']}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <group
                      name="Object_8"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials['T-shirt.001']}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group
                      name="Sneakers"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <group
                      name="T_shirt"
                      position={[-46540.691, 33062.609, 14792.244]}
                      rotation={[3.122, 0, 0]}
                      scale={[33333.32, 33333.316, 33333.316]}
                    />
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <mesh
            name="Ventana"
            castShadow
            receiveShadow
            geometry={nodes.Ventana.geometry}
            material={materials.Material_ventana}
          />
          <group name="medicamento">
            <group name="g_medicamento">
              <group name="RootNode">
                <group name="Boole">
                  <mesh
                    name="Boole_tapa"
                    castShadow
                    receiveShadow
                    geometry={nodes.Boole_tapa.geometry}
                    material={materials.Material_tapa}
                  />
                </group>
                <group name="Boole2">
                  <mesh
                    name="Boole_tapa2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Boole_tapa2.geometry}
                    material={materials.Material_tapa_azul}
                  />
                </group>
                <group name="Subdivision_Surface_1">
                  <mesh
                    name="Subdivision_Surface_1__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Subdivision_Surface_1__0.geometry}
                    material={materials['Subdivision_Surface_1__0.001']}
                  />
                  <mesh
                    name="Subdivision_Surface_1__0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Subdivision_Surface_1__0001.geometry}
                    material={materials['Subdivision_Surface_1__0.001']}
                  />
                  <mesh
                    name="Subdivision_Surface_1__0002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Subdivision_Surface_1__0002.geometry}
                    material={materials['Subdivision_Surface_1__0.001']}
                  />
                  <mesh
                    name="Subdivision_Surface_1_papel_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Subdivision_Surface_1_papel_0.geometry}
                    material={materials['papel.001']}
                  />
                </group>
              </group>
            </group>
          </group>
          <group name="inyeccion">
            <group name="root">
              <group name="RootNode_inyeccion">
                <group name="Cylinder001_0">
                  <mesh
                    name="Object_4002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4002.geometry}
                    material={materials['Basic_Glass.001']}
                  />
                </group>
                <group name="D7014BO1_1">
                  <mesh
                    name="Object_6001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6001.geometry}
                    material={materials['D7014BLA.002']}
                  />
                </group>
                <group name="D7014BO2_2">
                  <mesh
                    name="Object_8001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8001.geometry}
                    material={materials['D7014WHI.002']}
                  />
                </group>
                <group name="D7014BOT001_3">
                  <mesh
                    name="Object_10001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10001.geometry}
                    material={materials['D7014WHI.003']}
                  />
                </group>
                <group name="D7014NE2001_5">
                  <mesh
                    name="Object_14001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14001.geometry}
                    material={materials['D7014GRE.002']}
                  />
                </group>
                <group name="D7014NE2002_6">
                  <mesh
                    name="Object_16001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16001.geometry}
                    material={materials['D7014GRE.002']}
                  />
                </group>
                <group name="D7014NE2003_7">
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials['D7014GRE.002']}
                  />
                </group>
                <group name="D7014NE2004_8">
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials['D7014GRE.002']}
                  />
                </group>
                <group name="D7014NE2_4">
                  <mesh
                    name="Object_12001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12001.geometry}
                    material={materials['D7014GRE.002']}
                  />
                </group>
                <group name="D7014NEE_9">
                  <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials['Galvanized_Steel.001']}
                  />
                </group>
              </group>
            </group>
          </group>
          <mesh
            name="Texto"
            castShadow
            receiveShadow
            geometry={nodes.Texto.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Texto001"
            castShadow
            receiveShadow
            geometry={nodes.Texto001.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Texto002"
            castShadow
            receiveShadow
            geometry={nodes.Texto002.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    )
}

useGLTF.preload("/models-3d/tbc-prevencion.glb");

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
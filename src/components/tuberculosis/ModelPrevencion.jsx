/* eslint-disable react/no-unknown-property */
import { useGLTF, Loader, OrbitControls, useAnimations, Image } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState, use } from "react";
import { Perf } from "r3f-perf";
import Lights from "./LightPrevencion";
import Recipient from "./RecipientPrevencion"; // Importa el componente Recipient
import Staging from "./StagingQueEs";
import ManejoCamara from "./ManejoCamaraPrevencion"; // Importa el componente ManejoCamara
//Modelo 3d "QUE ES LA TUBERCULOSIS"
const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models-3d/tbc-prevencion.glb");
  const { actions } = useAnimations(animations, group)
   //console.log("animations", actions);
       //console.log("nodes", nodes);
      useEffect(() => {
        const action = actions["mixamo.com"];
        if (action) {
          //console.log("action", action);
          action.play();
          return () => action.stop();
        }
      }, [actions["mixamo.com"]]);
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
          name="person"
          position={[5.273, 0.741, 0.577]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.014}>
          <group name="personfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2001">
              <group name="RootNode002">
                <group name="Object_4001">
                  <group name="CC_Base_Body001" position={[0.003, 145.767, -3.211]} />
                  <group name="Hair001" position={[-0.538, 168.987, -0.654]} />
                  <group name="Jeans001" />
                  <group name="Object_10002" />
                  <skinnedMesh
                    name="Object_11001"
                    geometry={nodes.Object_11001.geometry}
                    material={materials.Sneakers}
                    skeleton={nodes.Object_11001.skeleton}
                  />
                  <group name="Object_12002" />
                  <skinnedMesh
                    name="Object_13001"
                    geometry={nodes.Object_13001.geometry}
                    material={materials.Jeans}
                    skeleton={nodes.Object_13001.skeleton}
                  />
                  <group name="Object_14002" position={[0.003, 145.767, -3.211]} />
                  <skinnedMesh
                    name="Object_15001"
                    geometry={nodes.Object_15001.geometry}
                    material={materials.Std_Skin_Arm}
                    skeleton={nodes.Object_15001.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16002"
                    geometry={nodes.Object_16002.geometry}
                    material={materials.Std_Skin_Head}
                    skeleton={nodes.Object_16002.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17001"
                    geometry={nodes.Object_17001.geometry}
                    material={materials.Std_Nails}
                    skeleton={nodes.Object_17001.skeleton}
                  />
                  <group name="Object_6002" position={[-0.538, 168.987, -0.654]} />
                  <skinnedMesh
                    name="Object_7001"
                    geometry={nodes.Object_7001.geometry}
                    material={materials.embed_hair_male}
                    skeleton={nodes.Object_7001.skeleton}
                  />
                  <group name="Object_8002" />
                  <skinnedMesh
                    name="Object_9001"
                    geometry={nodes.Object_9001.geometry}
                    material={materials['T-shirt']}
                    skeleton={nodes.Object_9001.skeleton}
                  />
                  <group name="Sneakers001" />
                  <group name="T_shirt001" />
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
    const [mensajeinformativo, setMensajeinformativo] = useState()
    const handleQuestionClick = () => {
      //alert("¡Has hecho clic en el signo de pregunta!");
      setShowMessage(prev => !prev);
      cambiarMensaje();
    };
    const cambiarMensaje = (val) => {
      //console.log("showMessage", showMessage);
      if (showMessage) {
        if(val === 1) {
          setMensajeinformativo(1);
        } else if(val === 2) {
          setMensajeinformativo(2);
        }else if(val === 3) {
          setMensajeinformativo(3);
        }
      }
      if (!showMessage) {
        setMensajeinformativo(0);
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
        <Image
          url="/img/teclav11.png" // Ruta relativa o absoluta a la imagen
          scale={[5, 5, 2]}           // Tamaño del plano (ancho, alto, profundidad)
          position={[-33, 20, 3]}        // Posición en la escena
          transparent // Esta propiedad es opcional, pero puedes agregarla
          opacity={1} // Cambia el valor entre 0 (totalmente transparente) y 1 (opaco)
        />
        <Image
          url="/img/teclav21.png" // Ruta relativa o absoluta a la imagen
          scale={[5, 5, 2]}           // Tamaño del plano (ancho, alto, profundidad)
          position={[-3, 20, 3]}        // Posición en la escena
          transparent // Esta propiedad es opcional, pero puedes agregarla
          opacity={1} // Cambia el valor entre 0 (totalmente transparente) y 1 (opaco)
        />
        <Image
          url="/img/teclav31.png" // Ruta relativa o absoluta a la imagen
          scale={[5, 5, 2]}           // Tamaño del plano (ancho, alto, profundidad)
          position={[25, 20, 3]}        // Posición en la escena
          transparent // Esta propiedad es opcional, pero puedes agregarla
          opacity={1} // Cambia el valor entre 0 (totalmente transparente) y 1 (opaco)
        />
      </Canvas>
    </Suspense>
  );
};

export default PiantModel
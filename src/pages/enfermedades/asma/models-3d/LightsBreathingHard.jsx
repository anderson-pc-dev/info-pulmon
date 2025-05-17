/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  const spotLightRef2 = useRef();
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      {/* Luz hemisférica: simula luz ambiente desde el cielo y el suelo */}
      <hemisphereLight
        skyColor="#e0f7fa"    // Azul cielo
        groundColor="#ffe0b2" // Suelo cálido
        intensity={1.2}
      />

      {/* Luz ambiental para rellenar sombras suaves */}
      <ambientLight intensity={0.3} color="#FFFFFF" />

      {/* Luz puntual 1 */}
      <spotLight
        ref={spotLightRef}
        position={[3, 3, 3]}
        intensity={25}
        distance={10}
        angle={Math.PI / 4}
        penumbra={0.5}
        decay={1}
        color="#a0c4ff"
        castShadow
        shadow-mapSize={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={10}
        shadow-bias={-0.0001}
      />

      {/* Luz puntual 2 */}
      <spotLight
        ref={spotLightRef2}
        position={[-3, 2, -3]}
        intensity={20}
        distance={8}
        angle={Math.PI / 3}
        penumbra={0.75}
        decay={1}
        color="#ffd6a5"
        castShadow
        shadow-mapSize={512}
      />

      {/* Luz direccional con sombras */}
      <directionalLight
        ref={directionalLightRef}
        position={[0, 15, 10]}
        intensity={6}
        color={"#FFFFFF"}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
    </>
  );
};

export default Lights;

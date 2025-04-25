import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  const spotLightRef2 = useRef();
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);
  return (
    <>
      {/* Luz ambiental suave para rellenar sombras */}
      <ambientLight intensity={2} color="#FFFFFF" />
      
      {/* Luz principal (fría) 
      <spotLight
        ref={spotLightRef}
        position={[3, 3, 3]}
        intensity={25}
        distance={10}
        angle={Math.PI / 4}
        penumbra={0.5}
        decay={1}
        color="#a0c4ff" // azul claro
        castShadow
        shadow-mapSize={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={10}
        shadow-bias={-0.0001}
      />*/}
      
      {/* Luz secundaria (cálida) 
      <spotLight
        ref={spotLightRef2}
        position={[-3, 2, -3]}
        intensity={20}
        distance={8}
        angle={Math.PI / 3}
        penumbra={0.75}
        decay={1}
        color="#ffd6a5" // amarillo claro
        castShadow={true}
        shadow-mapSize={512}
      />*/}
      
      {/* Luz de relleno desde abajo */}

      <directionalLight
        position={[0, 15, 10]}
        intensity={8}
        color={"#FFFFFF"} 
        //ref={directionalLightRef}
        castShadow={true}
        shadow-mapSize-width={2048} // Mejor calidad de sombra (opcional)
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1} // Límite cercano de la cámara de sombras
        shadow-camera-far={100} // Límite lejano (aumenta si las sombras desaparecen)
        shadow-camera-left={-20} // Área rectangular de la sombra (aumenta para cubrir más)
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
    </>
  );
};

export default Lights;

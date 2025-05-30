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

      <directionalLight
        position={[0, 8, 10]}
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
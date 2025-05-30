import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const LightsVaccine = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);
  return (
    <>
      {/* Luz ambiental suave para rellenar sombras */}
      <ambientLight intensity={1} color="#FFFFFF" />
    

      <directionalLight
        position={[22, 24, -8]} 
        intensity={7}
        //ref={directionalLightRef}
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

export default LightsVaccine;
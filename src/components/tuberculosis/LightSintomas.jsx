import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  //DirectionalLightHelper,
  MathUtils,
} from "three";

const LightSintomas = () => {
  const directionalLightRef = useRef();
  //useHelper(directionalLightRef, DirectionalLightHelper);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    directionalLightRef.current.position.x = MathUtils.lerp(
      -1,
      1,
      Math.cos(elapsedTime)
    );
  });

  return (
    <>
      {/**/}
      <ambientLight color={"#F5F5DC"} intensity={2} />
      <directionalLight
        ref={directionalLightRef}
        color={"white"}
        position={[0, 25, 15]}
        intensity={2}
        castShadow={true}
      />
    </>
  );
};

export default LightSintomas;

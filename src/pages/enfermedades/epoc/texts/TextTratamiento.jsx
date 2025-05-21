import { Text3D, Center } from "@react-three/drei";
import aliceFont from "../../../../assets/fonts/alice.json";
const TextTratamiento = ({ text="Presiona la tecla C", position=[-1, 12, -3], rotation=[0,0.23,0]}) => {
  return (
    <Center position={position}>
      <Text3D
        font={aliceFont}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.2}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={3}
        rotation={rotation}
      >
      {text}
      <meshNormalMaterial />
      </Text3D>
    </Center>
  );
}

export default TextTratamiento;
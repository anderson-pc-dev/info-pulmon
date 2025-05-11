import { Text3D, Center } from "@react-three/drei";
import aliceFont from "../../assets/fonts/alice.json";
console.log("aliceFont", aliceFont);
const Text3Dinfo = ({ text="click me or press 'P'" , onClick}) => {
  return (
    <Center position={[-12, 15, 0]}>
      <Text3D
        font={aliceFont}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.2}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={2}
        onClick={onClick}
      >
      {text}
      <meshNormalMaterial />
      </Text3D>
    </Center>
  );
}

export default Text3Dinfo;
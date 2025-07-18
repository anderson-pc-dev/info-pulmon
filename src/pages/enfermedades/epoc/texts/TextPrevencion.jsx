import { Text3D, Center } from "@react-three/drei";
import aliceFont from "../../../../assets/fonts/Brunson_Regular.json";

const TextPrevencion = ({ 
  text = "Presiona la tecla C", 
  position = [0, 12, -3], 
  rotation = [0, 0, 0],
  color = "#005089",
  depth = 0.5, 
  onClick, 
}) => {
  return (
    <Center position={position}>
      <Text3D
        font={aliceFont}
        bevelEnabled
        bevelSize={0.05}    
        bevelThickness={0.3} 
        height={0.1}        
        depth={depth}       
        lineHeight={0.8}
        letterSpacing={0.02}
        size={2.5}
        rotation={rotation}
        onClick={onClick}
      >
        {text}
        <meshPhongMaterial 
          color={color} 
          specular="#ffffff" 
          shininess={100}  
        />
      </Text3D>
    </Center>
  );
}

export default TextPrevencion;
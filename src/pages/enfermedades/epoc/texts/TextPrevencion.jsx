import { Text3D, Center } from "@react-three/drei";
import aliceFont from "../../../../assets/fonts/BRUNSON_Regular.json";

const TextPrevencion = ({ 
  text = "Presiona la tecla C", 
  position = [0, 10, -3], 
  rotation = [0, 0, 0],
  color = "#005089",
  depth = 0.5,  // Aumenta este valor para más grosor
}) => {
  return (
    <Center position={position}>
      <Text3D
        font={aliceFont}
        bevelEnabled
        bevelSize={0.05}    // Aumenta para un bisel más ancho
        bevelThickness={0.3} // Aumenta para un bisel más grueso
        height={0.1}        // Pequeña altura base
        depth={depth}       // Grosor principal del texto
        lineHeight={0.8}
        letterSpacing={0.02}
        size={2.5}
        rotation={rotation}
      >
        {text}
        <meshPhongMaterial 
          color={color} 
          specular="#ffffff" 
          shininess={100}  // Ajusta para más/menos brillo
        />
      </Text3D>
    </Center>
  );
}

export default TextPrevencion;
import { Text } from '@react-three/drei'
import letra from "../../../../assets/fonts/Brunson.ttf"

const TextSintoma = ({ textSintoma }) => {
    return (
        <Text
            position={[0, 1.6, 0]}
            color="#ffffff" 
            anchorX="center"
            anchorY="middle"
            fontSize={0.4}
            font={letra}
            outlineWidth={0.02} 
            outlineColor="#000000" 
            outlineOpacity={0.8} 
            strokeWidth={0.005} 
            strokeColor="#000000" 
            fillOpacity={0.9}
        >
            {textSintoma}
        </Text>
    );
};

export default TextSintoma;
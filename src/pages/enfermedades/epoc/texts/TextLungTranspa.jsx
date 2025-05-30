import { Text } from '@react-three/drei'
import "./TextSintoma.scss"
import letra from "../../../../assets/fonts/Brunson.ttf"

const TextLungTranspa = ({textSintoma}) => {
    return (
        <Text
       position={[0, 0, -5]}
       color={"black"}
       anchorX={"center"}
       anchorY={"middle"}
       fontSize={2.5}
       font= {letra}
     >
       {textSintoma}
     </Text>
        
    );
};

export default TextLungTranspa;
import { Text } from '@react-three/drei'
import "./TextSintoma.scss"
import letra from "../../../../assets/fonts/Brunson.ttf"

const TextSintoma = ({textSintoma}) => {
    return (
        <Text
       position={[0, 2, 0]}
       color={"orange"}
       anchorX={"center"}
       anchorY={"middle"}
       fontSize={0.5}
       font= {letra}
     >
       {textSintoma}
     </Text>
        
    );
};

export default TextSintoma;
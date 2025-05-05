import {Html} from '@react-three/drei'
import "./TextSintoma.scss"

const TextSintoma = ({text}) => {
    return (
        <Html
        center
        zIndexRange={[100, 0]}
        position={[0, 5, -21]}
        transform
        distanceFactor={10}
        wrapperClass='text-sintoma'
        >
            <h1>{text}</h1>
        </Html>
    );
};

export default TextSintoma;
import { Html } from '@react-three/drei'
import "./TextSintoma.scss"

const TextSintoma = () => {
    return (
        <Html
            position={[-5, 6.5, -21]}
            transform
            zIndexRange={[100, 0]}
            distanceFactor={5}
            wrapperClass='text-instructions'
        >
            <div className="instruction-text">Presiona [C] para  mostrar un mensaje y haz click para cambiar la escena</div>
        </Html>
        
    );
};

export default TextSintoma;
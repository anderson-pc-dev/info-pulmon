import { Text, Html } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const InteractiveQuestionMark = ({ onClick , texto = `? - press 'P'`}) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (textRef.current) {
      // Calcula la distancia entre la cámara y el texto
      const distance = camera.position.distanceTo(textRef.current.position);
      // Ajusta el tamaño del texto en función de la distancia
      textRef.current.fontSize = Math.max(1, 5 / distance); // Escala inversa
    }
  });
  return (
    <group>
        {/* Fondo detrás del texto */}
        
          <Text
          ref={textRef}
          position={[-14, 5, 20]} // Posición del texto
          rotation={[0, Math.PI / 2, 0]} // Rotación hacia la izquierda (90 grados)
          fontSize={64} // Tamaño inicial del texto
          color={hovered ? "yellow" : "white"} // Cambia de color al pasar el mouse
          onPointerOver={() => setHovered(true)} // Evento al pasar el mouse
          onPointerOut={() => setHovered(false)} // Evento al salir del mouse
          onClick={onClick} // Evento al hacer clic
          maxWidth={30} // Ancho máximo del texto
        >
          {//hovered && texto === '?' ? "? (press 'P')" : texto
          texto}
        </Text>

      {/* Signo de pregunta 
      <Text
        position={[20, 20, 0]} // Posición del signo de pregunta
        fontSize={2} // Tamaño del texto
        color={hovered ? "yellow" : "red"} // Cambia de color al pasar el mouse
        backgroundColor="black" // Fondo oscuro
        backgroundOpacity={0.1} // Fondo semitransparente
        padding={0.2} // Espaciado entre el texto y el fondo
        onPointerOver={() => setHovered(true)} // Evento al pasar el mouse
        onPointerOut={() => setHovered(false)} // Evento al salir del mouse
        onClick={onClick} // Evento al hacer clic

      >
        ?
      </Text>*/}
    </group>
  );
};

export default InteractiveQuestionMark;
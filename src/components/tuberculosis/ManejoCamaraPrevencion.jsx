import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
const ManejoCamara = ({val}) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  //console.log("sm", val);
  useEffect(() => {
    let target = [0, 8, 0]; // Valor por defecto
    if (val == 1) {
      camera.position.set(-30, 10, 18); // Cambia la posición de la cámara
      target = [-31, 10, 0]; // Apunta hacia un punto específico
    } else if (val == 2) {
      camera.position.set(-3, 10, 18); // Cambia la posición de la cámara
      target = [-3, 10, 0];// Apunta hacia un punto específico
    } else if (val == 3) {
      camera.position.set(25, 10, 18); // Cambia la posición de la cámara
      target = [25, 10, 0]; // Apunta hacia un punto específico
    } else {
      camera.position.set(0, 10, 40); // Cambia la posición de la cámara
      target = [0, 8, 0]; // Apunta hacia el modelo
    }
    camera.lookAt(...target);
    camera.updateProjectionMatrix(); // Actualiza la proyección de la cámara

    // Actualiza el target de OrbitControls si existe
    if (controlsRef.current) {
      controlsRef.current.target.set(...target);
      controlsRef.current.update();
    }
  }, [val, camera]);
  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

export default ManejoCamara;
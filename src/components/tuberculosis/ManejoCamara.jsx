import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
const ManejoCamara = ({sm}) => {
  const { camera } = useThree();
  //console.log("sm", sm);
  useEffect(() => {
    if (!sm) {
      camera.position.set(10, 10, 10); // Cambia la posición de la cámara
      camera.lookAt(25, 0, 100); // Apunta hacia un punto específico
    } else {
      camera.position.set(0, 10, 20); // Cambia la posición de la cámara
      camera.lookAt(0, 8, 0); // Apunta hacia el modelo
    }
    camera.updateProjectionMatrix(); // Actualiza la proyección de la cámara
  }, [sm, camera]);
  return null;
}

export default ManejoCamara;
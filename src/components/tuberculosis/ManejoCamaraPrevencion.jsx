import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
const ManejoCamara = ({val}) => {
  const { camera } = useThree();
  //console.log("sm", sm);
  useEffect(() => {
    if (val == 1) {
      camera.position.set(-33, 10, 10); // Cambia la posición de la cámara
      camera.lookAt(-33, 0, 100); // Apunta hacia un punto específico
    } else if (val == 2) {
      camera.position.set(-3, 10, 10); // Cambia la posición de la cámara
      camera.lookAt(-3, 0, 100); // Apunta hacia un punto específico
    } else if (val == 3) {
      camera.position.set(25, 10, 10); // Cambia la posición de la cámara
      camera.lookAt(25, 0, 100); // Apunta hacia un punto específico
    } else {
      camera.position.set(0, 10, 20); // Cambia la posición de la cámara
      camera.lookAt(0, 8, 0); // Apunta hacia el modelo
    }
    camera.updateProjectionMatrix(); // Actualiza la proyección de la cámara
  }, [val, camera]);
  return null;
}

export default ManejoCamara;
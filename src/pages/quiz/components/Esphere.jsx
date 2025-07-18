/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RigidBody } from "@react-three/rapier";
import { useRef, useCallback, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { Line } from "@react-three/drei";

const Esphere = ({ onCollision, ...props }) => {
  const sphereRef = useRef();
  const { camera, raycaster, gl } = useThree();
  // Eliminado: línea de dirección
  const [isAiming, setIsAiming] = useState(false);


  // Al presionar el mouse, solo activar aiming
  const handlePointerDown = useCallback((e) => {
    e.stopPropagation();
    setIsAiming(true);
  }, []);

  // Al mover el mouse mientras se mantiene presionado
  // No hace falta handlePointerMove

  // Al soltar el mouse, disparar la esfera
  const handlePointerUp = useCallback(() => {
    if (!isAiming) return;
    setIsAiming(false);
    // Calcular dirección cámara→esfera
    const origin = sphereRef.current.translation();
    const spherePos = new Vector3(origin.x, origin.y, origin.z);
    const camPos = camera.position;
    const dir = new Vector3().subVectors(spherePos, camPos).normalize();
    const force = 800;
    sphereRef.current.wakeUp();
    sphereRef.current.applyImpulse(
      {
        x: dir.x * force,
        y: dir.y * force,
        z: dir.z * force,
      },
      true
    );
    setTimeout(() => {
      sphereRef.current.setTranslation({ x: 0, y: 10, z: 15 }, true);
      sphereRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
      sphereRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
      sphereRef.current.wakeUp();
    }, 2000);
  }, [isAiming, camera]);

  // Eliminado: actualización de línea de dirección

  // Detectar colision
  const handleCollisionEnter = (payload) => {
    if (onCollision) {
      const targetName = payload.other.rigidBodyObject?.name;
      if (targetName) onCollision(targetName);
    }
  };

  return (
    <RigidBody
      ccd
      mass={5}
      ref={sphereRef}
      name="esphereRB"
      type="dynamic"
      colliders="ball"
      friction={0}
      canSleep={false}
      onCollisionEnter={handleCollisionEnter}
      {...props}
    >
      {/* Línea de dirección eliminada */}
      <mesh
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <sphereGeometry args={[1, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
};

export default Esphere;


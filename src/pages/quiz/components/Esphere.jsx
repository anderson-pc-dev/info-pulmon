import { RigidBody } from "@react-three/rapier";
import { useRef, useCallback } from "react";
import { useThree } from "@react-three/fiber";
import { Vector2 } from "three";

const Esphere = ({ onCollision, ...props }) => {
  const sphereRef = useRef();
  const { camera, raycaster } = useThree();

  const handleEsphere = useCallback((e) => {
    e.stopPropagation();

    const mouse = new Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );

    raycaster.setFromCamera(mouse, camera);
    const shootDirection = raycaster.ray.direction.clone();
    const force = 800;

    sphereRef.current.wakeUp();
    sphereRef.current.applyImpulse(
      {
        x: shootDirection.x * force,
        y: shootDirection.y * force,
        z: shootDirection.z * force,
      },
      true
    );

    setTimeout(() => {
      sphereRef.current.setTranslation({ x: 0, y: 10, z: 15 }, true);
      sphereRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
      sphereRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
      sphereRef.current.wakeUp();
    }, 2000);
  }, [camera, raycaster]);

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
      <mesh onClick={handleEsphere}>
        <sphereGeometry args={[1, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
};

export default Esphere;


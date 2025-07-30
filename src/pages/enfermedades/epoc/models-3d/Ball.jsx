/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function Ball({ position, onCollide, isActive }) {
  const ballRef = useRef();
  
  useFrame(() => {
    if (ballRef.current && isActive) {
      if (ballRef.current.translation().x > -5) {
        ballRef.current.applyImpulse({ x: -55, y: 0, z: 0 }, true);
      }
    }
  });

  return (
    <RigidBody
      name="ballRB"
      onCollisionEnter={({ manifold, target, other }) => {
        console.log(
          "Collision at world position ",
          manifold.solverContactPoint(0)
        );

        if (other.rigidBodyObject) {
          console.log(
            target.rigidBodyObject.name,
            " collided with ",
            other.rigidBodyObject.name
          );
        }

        if (onCollide) onCollide(); 
      }}
      onCollisionExit={() => console.log("Collision exit")}
      mass={75}
      gravityScale={0.1}
      friction={0}
      restitution={0}
      ref={ballRef}
      colliders="ball"
      position={position}
    >
      <mesh castShadow>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </RigidBody>
  );
}
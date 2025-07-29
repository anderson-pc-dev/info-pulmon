/* eslint-disable react/no-unknown-property */
import { RigidBody } from "@react-three/rapier";
import { useRef, useCallback, useState, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3, Raycaster } from "three";
import { Line, useGLTF } from "@react-three/drei";

const BallWithAim = ({ onCollision, ...props }) => {
  const sphereRef = useRef();
  const { camera, mouse, gl } = useThree();
  const [isAiming, setIsAiming] = useState(false);
  const [linePoints, setLinePoints] = useState([]);
  const raycaster = new Raycaster();

  const { nodes, materials } = useGLTF("/models-3d/soccer_ball.glb");

  useFrame(() => {
    if (isAiming && sphereRef.current) {
      const origin = sphereRef.current.translation();
      const spherePos = new Vector3(origin.x, origin.y, origin.z);
      raycaster.setFromCamera(mouse, camera);
      const dir = raycaster.ray.direction.clone().normalize();
      const endPoint = spherePos.clone().add(dir.multiplyScalar(20)); 
      setLinePoints([spherePos, endPoint]);
    }
  });

  const shootBall = useCallback(() => {
    if (!isAiming || !sphereRef.current) return;
    setIsAiming(false);
    setLinePoints([]);

    const origin = sphereRef.current.translation();
    const spherePos = new Vector3(origin.x, origin.y, origin.z);
    raycaster.setFromCamera(mouse, camera);
    const direction = raycaster.ray.direction.clone().normalize();
    const force = 150; 

    sphereRef.current.wakeUp();
    sphereRef.current.applyImpulse(
      {
        x: direction.x * force,
        y: direction.y * force,
        z: direction.z * force,
      },
      true
    );

    setTimeout(() => {
      sphereRef.current.setTranslation({ x: 0, y: 10, z: 27 }, true);
      sphereRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
      sphereRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
      sphereRef.current.wakeUp();
    }, 2000);
  }, [isAiming, camera, mouse]);

  useEffect(() => {
    const handlePointerUp = () => shootBall();
    const canvas = gl.domElement;
    canvas.addEventListener("pointerup", handlePointerUp);
    return () => canvas.removeEventListener("pointerup", handlePointerUp);
  }, [shootBall, gl.domElement]);

  const handlePointerDown = useCallback((e) => {
    e.stopPropagation();
    setIsAiming(true);
  }, []);

  const handleCollisionEnter = (payload) => {
    if (onCollision) {
      const targetName = payload.other.rigidBodyObject?.name;
      if (targetName) onCollision(targetName);
    }
  };

  return (
    <>
      <RigidBody
        ccd
        mass={5}
        ref={sphereRef}
        name="soccerBallRB"
        type="dynamic"
        colliders="ball"
        friction={0.3}
        restitution={0.7}
        linearDamping={0.1}
        canSleep={false}
        gravityScale={1}
        onCollisionEnter={handleCollisionEnter}
        {...props}
      >
        <group 
          onPointerDown={handlePointerDown} 
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.6, 0.6, 0.6]} 
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Black_s}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.White_s}
          />
        </group>
      </RigidBody>

      {isAiming && linePoints.length === 2 && (
        <Line
          points={linePoints}
          color="cyan"
          lineWidth={3}
          dashed
          dashScale={1}
        />
      )}
    </>
  );
};

useGLTF.preload("/models-3d/soccer_ball.glb");

export default BallWithAim;





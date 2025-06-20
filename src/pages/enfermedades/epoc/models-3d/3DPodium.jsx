import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";
import Lights from '../lights/LightsBronchi';  
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';

function PodiumModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/winner_podium.glb');
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <group position={[-105.852, 67.794, 183.155]} rotation={[0, -Math.PI / 2, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Text002_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Text002_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Text002_Material002_0.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Text002_Material004_0.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Text002_Material006_0.geometry}
              material={materials['Material.006']}
            />
          </group>
        </group>
      </group>
    </RigidBody>
  );
}

function Ball({ position }) {
  return (
    <RigidBody
      position={position}
      colliders="ball"
      restitution={0.7}
      friction={0.5}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="gold" />
      </mesh>
    </RigidBody>
  );
}

useGLTF.preload('/models-3d/winner_podium.glb');

export default function Scene() {
  const [balls, setBalls] = useState([]);
  const initialBallsDropped = useRef(false);
  const ballInterval = useRef(null);

  useEffect(() => {
    // Primera caída: 200 pelotas simultáneamente
    if (!initialBallsDropped.current) {
      const initialBalls = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        position: [
          Math.random() * 6 - 3, 
          10 + Math.random() * 5, 
          Math.random() * 6 - 3   
        ]
      }));
      setBalls(initialBalls);
      initialBallsDropped.current = true;

      setTimeout(() => {
        ballInterval.current = setInterval(() => {
          setBalls(prev => [
            ...prev,
            {
              id: Date.now(),
              position: [
                Math.random() * 4 - 2, 
                10,                   
                Math.random() * 4 - 2 
              ]
            }
          ]);
        }, 500); // Cada 0.5 segundos
      }, 2000); // Esperar 3 segundos despues de la primera caída
    }

    return () => {
      if (ballInterval.current) {
        clearInterval(ballInterval.current);
      }
    };
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        shadows={true}
      >
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
        <Lights />
        <Physics gravity={[0, -9.81, 0]}>
          <RigidBody type="fixed" name="ground">
            <CuboidCollider args={[10, 0.1, 10]} position={[0, -2.5, 0]} />
          </RigidBody>

          <PodiumModel
            scale={1}
            position={[0, -2.1, 0]}
            rotation={[0, 1.58, 0]}
          />

          {balls.map((ball) => (
            <Ball key={ball.id} position={ball.position} />
          ))}
        </Physics>
      </Canvas>
    </Suspense>
  );
}
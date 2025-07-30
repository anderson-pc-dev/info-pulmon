/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";
import Lights from '../lights/LightsBronchi';  
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import Loader3D from '../../../../components/Loader';

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

function ConfettiPiece({ position }) {
  const shape = Math.random() > 0.5 ? 'square' : 'rectangle';
  
  const width = 0.03 + Math.random() * 0.04; 
  const height = 0.02 + Math.random() * 0.03; 
  const depth = 0.005 + Math.random() * 0.01;
  
  const colors = [
    '#ff0000', '#00ff00', '#0000ff', '#ffff00', 
    '#ff00ff', '#00ffff', '#ff8800', '#ff0088'
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  const rotation = [
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  ];
  
  return (
    <RigidBody
      position={position}
      rotation={rotation}
      colliders="cuboid"
      restitution={0.1} 
      friction={0.02}   
      linearDamping={0.5}
      angularDamping={0.7} 
      density={0.3} 
    >
      <mesh castShadow>
        <boxGeometry args={[
          shape === 'square' ? width : width * 1.5, 
          shape === 'square' ? width : height, 
          depth
        ]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3} 
        />
      </mesh>
    </RigidBody>
  );
}

useGLTF.preload('/models-3d/winner_podium.glb');

export default function Scene() {
  const [confettiPieces, setConfettiPieces] = useState([]);
  const initialConfettiDropped = useRef(false);
  const confettiInterval = useRef(null);

  useEffect(() => {
    if (!initialConfettiDropped.current) {
      const initialConfetti = Array.from({ length: 2000 }, (_, i) => ({
        id: i,
        position: [
          Math.random() * 8 - 4, 
          3 + Math.random() * 3,  
          Math.random() * 8 - 4  
        ]
      }));
      setConfettiPieces(initialConfetti);
      initialConfettiDropped.current = true;
    }

    return () => {
      if (confettiInterval.current) {
        clearInterval(confettiInterval.current);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Suspense fallback={<Loader3D message="Cargando podium..." />}>
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
        <Physics gravity={[0, -0.45, 0]}> 
          <RigidBody type="fixed" name="ground">
            <CuboidCollider args={[10, 0.1, 10]} position={[0, -2.5, 0]} />
          </RigidBody>

          <PodiumModel
            scale={1}
            position={[0, -2.1, 0]}
            rotation={[0, 1.58, 0]}
          />

          {confettiPieces.map((piece) => (
            <ConfettiPiece key={piece.id} position={piece.position} />
          ))}
        </Physics>
      </Canvas>
    </Suspense>
    </div>
  );
}
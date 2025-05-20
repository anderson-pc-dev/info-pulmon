import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Loader,
  OrbitControls
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import Lights from '../lights/LightsBronchi';  
import Soporte from '../models-3d/SoporteBronchi'; 

function LungBronchi(props) {
  const { nodes, materials } = useGLTF('/models-3d/Lung-Bronchi.glb')
  const groupRef = useRef()
  
  // Animación de rotación
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5 // Rotación a 0.5 radianes por segundo
    }
  })
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bronchi.geometry}
        material={materials.BronchiMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftLung.geometry}
        material={materials.LeftLungMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ThyroidCartliage.geometry}
        material={materials.ThyroidCartliageMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ThyroidMembrane.geometry}
        material={materials.ThyroidMenbraneMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trachea.geometry}
        material={materials.TracheaMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Lung-Bronchi.glb')

export default function Scene() {
    return (
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 70 }}  // Cámara más cercana y centrada
          shadows={true}
        >
          <OrbitControls
            enableRotate={true}
            enableZoom={true}       
            enablePan={false}      
            target={[0, 0, -15]}    // El objetivo de la cámara está en el centro
            maxPolarAngle={Math.PI} // Permite rotación completa
            minPolarAngle={0}    
          />
          <Lights />
          <Soporte/>
          <LungBronchi
            scale={0.5}            // Escala reducida para que quede bien en vista
            position={[0, -3, -10]}  // Posición centrada
            rotation={[0, 0, 0]}  
          />
        </Canvas>
      </Suspense>
    );
  }
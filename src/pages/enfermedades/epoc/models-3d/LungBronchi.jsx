import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Loader,
  OrbitControls
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import Lights from '../lights/LightsBronchi';  
import Soporte from '../models-3d/SoporteBronchi'; 
import Staging from '../staging/StagingBronchi';
import Text from '../texts/TextPrevencion';

function LungBronchi(props) {
  const { nodes, materials } = useGLTF('/models-3d/Lung-Bronchi.glb')
  const groupRef = useRef()
  
  // Animación de rotación
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5 
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
          camera={{ position: [0, 0, 10], fov: 90 }}  
          shadows={true}
        >
          <OrbitControls
            enableRotate={true}
            enableZoom={true}       
            enablePan={false}      
            target={[0, 0, -15]}    
            maxPolarAngle={Math.PI} 
            minPolarAngle={0}    
          />
          <Lights />
          <Staging />
          <Text/>
          <Soporte/>
          <LungBronchi
            scale={0.6}            
            position={[0, -4.5, -10]}  
            rotation={[0, 0, 0]}  
          />
        </Canvas>
      </Suspense>
    );
  }
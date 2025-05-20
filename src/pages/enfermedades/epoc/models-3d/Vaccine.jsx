import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Loader,
  OrbitControls
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import Lights from '../lights/LightsVaccine';  
import Soporte from '../models-3d/SoporteVaccine'; 
import Staging from '../staging/StagingVaccine'


function Vaccine(props){
  const { nodes, materials } = useGLTF('/models-3d/Vaccine.glb')
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
        geometry={nodes.Plunger.geometry}
        material={materials.PlungerMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={materials.GlassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RubberStopper.geometry}
        material={materials.RubberStopperMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Support.geometry}
        material={materials.SupportMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hub.geometry}
        material={materials.HubMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Needle.geometry}
        material={materials.NeedleMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Vaccine.glb')

export default function Scene() {
    return (
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [10, 20, 28], fov: 40 }}  
          shadows={true}
        >
          <OrbitControls
            enableRotate={false}
            enableZoom={false}       
            enablePan={false}      
            target={[0, 1, 0]}   
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={0}    

          />
          <Lights />
          <Soporte/>
          <Staging/>
          <Vaccine
            scale={1.0}            
            position={[0, -6, -5]}   
            rotation={[0, 0, 5.9]}  
          />
        </Canvas>
      </Suspense>
    );
  }
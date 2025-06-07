
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import {
  Loader,
  OrbitControls
} from "@react-three/drei";
import { Suspense } from "react";
import Lights from '../lights/LightsBronchi';  

function PodiumModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/winner_podium.glb')
  return (
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
  )
}

useGLTF.preload('/models-3d/winner_podium.glb')

export default function Scene() {
    return (
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0,5], fov: 60 }}  
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
          <Lights/>
          <PodiumModel
            scale={1}            
            position={[0, -2.1, 0]}   
            rotation={[0, 1.58, 0]}  
          />
        </Canvas>
      </Suspense>
    );
  }
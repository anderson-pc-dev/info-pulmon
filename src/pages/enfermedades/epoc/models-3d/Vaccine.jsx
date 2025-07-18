import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';
import { Loader, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { Physics } from '@react-three/rapier';
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import {Html} from "@react-three/drei";
import Lights from '../lights/LightsVaccine';  
import Soporte from '../models-3d/SoporteVaccine'; 
import Staging from '../staging/StagingVaccine';
import Text from '../texts/TextTratamiento';

function Vaccine(props) {
  const { nodes, materials } = useGLTF('/models-3d/Vaccine.glb')
  
  const groupRef = useRef()
  const { isAnimating, reset } = props
  const rigidBodyRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current && isAnimating) {
      groupRef.current.rotation.y += delta * 0.7
    }
  })

  useEffect(() => {
    if (rigidBodyRef.current) {
      rigidBodyRef.current.setTranslation({ x: 0, y: -5, z: -5 });
      rigidBodyRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 });
      rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 });
      rigidBodyRef.current.setAngvel({ x: 0, y: 0, z: 0 });
    }
  }, [reset]);

  return (
    <RigidBody ref={rigidBodyRef} type='dynamic' colliders={false}>
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
    <CuboidCollider
      args={[1.3, 10, 1]} 
      position={[-1, 5, 0]} 
    />
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/Vaccine.glb')

function WelcomeMessage({ onRestore }) {
  return (
    <Html center position={[0, 2, 0]}>
      <div style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          padding: '20px',
          borderRadius: '15px',
          color: '#2c3e50',
          width: '320px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.3)'
      }}>
        <h2 style={{
            margin: '0 0 15px 0',
            color: '#3498db',
            fontSize: '1.5em',
            fontWeight: '600'
          }}>¡Bienvenido!</h2>
        <p style={{
            marginBottom: '15px',
            lineHeight: '1.5'
          }}>A continuación encontrarás los tratamientos más efectivos para el manejo de la EPOC, 
    organizados en tres pilares fundamentales: las modificaciones en tu estilo de vida 
    que marcarán la diferencia, los medicamentos esenciales que te ayudarán a controlar 
    los síntomas, y las señales de alerta que nunca debes ignorar.
    Explora cada sección para descubrir cómo puedes tomar el control de tu EPOC y mejorar 
    significativamente tu calidad de vida.</p>
        <button 
          onClick={onRestore}
          style={{
            marginTop: '15px',
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Restaurar Escena
        </button>
      </div>
    </Html>
  );
}

export default function Scene() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)
  const [resetKey, setResetKey] = useState(0); 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'c') {
        setShowWelcome(prev => !prev);
        setIsAnimating(prev => !prev); 
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleTextClick = () => {
    setShowWelcome(prev => !prev);
    setIsAnimating(prev => !prev);
  }

  const handleRestore = () => {
    setShowWelcome(false)
    setIsAnimating(true)
    setResetKey(prev => prev + 1); 
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [10, 10, 38], fov: 40 }}  
          shadows={true}
        >
          <OrbitControls
            enableRotate={true}
            enableZoom={true}       
            enablePan={false}      
            target={[0, 1, 0]}   
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={0}    
          />
          <Lights />
          <Physics>
            <Vaccine
              key={resetKey} 
              isAnimating={isAnimating}
              scale={1.4}            
              reset={resetKey} 
              position={[-1, -5, 0]}   
              rotation={[0, 0, 0]}  
            />
            <Soporte/>
          </Physics>
          <Text onClick={handleTextClick} />
          <Staging/>
          {showWelcome && <WelcomeMessage onRestore={handleRestore} />}
        </Canvas>
      </Suspense>
    </>
  );
}
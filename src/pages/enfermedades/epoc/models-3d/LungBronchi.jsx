import {useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {Loader,OrbitControls, Html} from "@react-three/drei";
import { Suspense, useRef } from "react";
import Lights from '../lights/LightsBronchi';  
import Soporte from '../models-3d/SoporteBronchi'; 
import Staging from '../staging/StagingBronchi';
import Text from '../texts/TextPrevencion';

function LungBronchi(props) {
  const { nodes, materials } = useGLTF('/models-3d/Lung-Bronchi.glb')
  const groupRef = useRef()
  const [setShowMessage] = useState(false)
  const [animationActive, setAnimationActive] = useState(true) 
  
  useFrame((state, delta) => {
    if (groupRef.current && animationActive) { 
      groupRef.current.rotation.y += delta * 0.5 
    }
  })

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase()
      if (key === 'c') {
        setShowMessage(prev => !prev)
      } else if (key === 'a') {
        setAnimationActive(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <group {...props} dispose={null}>
      <group ref={groupRef}>
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
    </group>
  )
}

export default function Scene() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'c') {
        setShowMessage(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleTextClick = () => {
    setShowMessage(prev => !prev);
    setIsAnimating(prev => !prev);
  }

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 90 }}  
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
        <Text onClick={handleTextClick} />
        <Soporte/>
        <LungBronchi
          scale={0.7}            
          position={[0, -5.5, -10]}  
          rotation={[0, 0, 0]}  
        />
        {showMessage && (
          <Html
            position={[-6.8, 7, -1.5]}
            zIndexRange={[100, 0]}
            transform={false} 
          >
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
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#3498db',
                fontSize: '1.5em',
                fontWeight: '600'
              }}>¡Bienvenido/a!</h3>
              
              <p style={{
                marginBottom: '15px',
                lineHeight: '1.5'
              }}>
                Gracias por continuar navegando. A continuación, encontrarás información clave sobre la prevención y los cuidados esenciales de la EPOC.
                Te invitamos a conocer cómo puedes reducir los factores de riesgo y mejorar tu calidad de vida si ya has sido diagnosticado con esta enfermedad.
                <br/>
                <strong>Puedes presionar la tecla "A" para detener la animación del modelo.</strong>
              </p>
              <button 
                onClick={() => setShowMessage(false)}
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
                Cerrar Mensaje
              </button>
            </div>
          </Html>
        )}
      </Canvas>
    </Suspense>
  );
}
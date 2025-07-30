/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, Suspense, useState, useEffect } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Center, OrbitControls, Text3D, Html } from '@react-three/drei'
import { Inhaler } from './Inhaler'
import Soporte from './Base'
import StagingInhaler from '../staging/StagingInhaler'
import Lights from './LightsBreathingHard'
import font from "../../../../assets/fonts/Brunson_Regular.json";
import Loader3D from '../../../../components/Loader';

import './RotateInhaler.scss'

// Componente rotatorio que acepta props
function RotatingInhaler({ isRotating, onClick, ...props }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current && isRotating) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef} onClick={onClick}>
      <Inhaler {...props} />
    </group>
  )
}

export default function Scene() {
  const [isRotating, setIsRotating] = useState(true)
  const [showHint, setShowHint] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const toggleRotation = () => {
    setIsRotating((prev) => !prev)
    setShowHint(false)
  }

  // Event listener para la tecla 'S'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 's') {
        setShowModal((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Suspense fallback={<Loader3D message="Cargando inhalador..." />}>
        <Canvas
          camera={{ position: [0, -9.5, 4], fov: 50 }}
          shadows
        >
          <OrbitControls
            enableRotate
            enableZoom
            enablePan={false}
            target={[0, -10.5, 0.6]}
            minDistance={2}
            maxDistance={8}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />

          <StagingInhaler />
          <Lights />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Soporte />

          {/* 👉 Al hacer clic en el modelo, se pausa/reanuda la rotación */}
          <RotatingInhaler
            scale={2.0}
            position={[0, -11.95, 0]}
            rotation={[0, 0, 0]}
            isRotating={isRotating}
            onClick={toggleRotation}
          />

          <Center position={[0, -9.7, -2]}>
            <Text3D
              font={font}
              bevelEnabled
              bevelSize={0.05}
              bevelThickness={0.3}
              height={0.1}
              depth={0.5}
              lineHeight={0.8}
              letterSpacing={0.02}
              size={0.8}
            >
              Inhalador
              <meshPhongMaterial
                color="#2AABEC"
                specular="#ffffff"
                shininess={100}
              />
            </Text3D>
          </Center>

          {/* Modal 2D dentro del Canvas */}
          {showModal && (
            <Html
              position={[0, -10, 0]}
              transform={false}
              center
              style={{
                pointerEvents: 'none',
              }}
            >
              <div className="modal-inhaler">
                <div className="modal-content">
                  <h3>Inhaladores Médicos</h3>
                  <p>
                    Los inhaladores son dispositivos médicos que administran medicamentos 
                    directamente a los pulmones para el alivio rápido de síntomas, control 
                    de la inflamación y prevención de ataques respiratorios.
                  </p>
                  <p className="modal-footer">
                    Presiona <strong>S</strong>  para cerrar
                  </p>
                </div>
              </div>
            </Html>
          )}
        </Canvas>
      </Suspense>
      {showHint && (
        <div className="hint">
          💡 Haz clic en el modelo para pausar/reanudar la rotación
        </div>
      )}
      <div className="info-hint">
        Presiona <strong>S</strong> para ver información sobre los inhaladores
      </div>
    </div>
  )
}

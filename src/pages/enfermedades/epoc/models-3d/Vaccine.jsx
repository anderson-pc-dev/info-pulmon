import { useGLTF, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Loader, OrbitControls } from "@react-three/drei"
import { Suspense, useRef, useState, useEffect } from "react"
import Lights from '../lights/LightsVaccine'
import Soporte from '../models-3d/SoporteVaccine'
import Staging from '../staging/StagingVaccine'
import Text from '../texts/TextTratamiento'
import { Physics } from '@react-three/cannon'

// Modelo de la Cara
function FaceModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/face1.glb')
  const groupRef = useRef()
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face.geometry}
        material={materials.faceMarial}
        rotation={[-1.7, -0.01, 0.8]}
        position={[-10, -2.5, 10]}
      />
    </group>
  )
}

// Modelo del Inhalador con animación
function InhalerModel({ animate, reset, ...props }) {
  const { nodes, materials } = useGLTF('/models-3d/Inhaler1.glb')
  const tapaRef = useRef()
  const inhalerBodyRef = useRef()
  const inhalerMeshRef = useRef()
  const [animationPhase, setAnimationPhase] = useState('idle')

  // Resetear animación
  useEffect(() => {
    if (reset) {
      setAnimationPhase('idle')
      if (inhalerBodyRef.current) {
        inhalerBodyRef.current.position.set(8, -5, 0)
      }
      if (inhalerMeshRef.current) {
        inhalerMeshRef.current.position.set(-5, 0, 0)
      }
    }
  }, [reset])

  useFrame((state, delta) => {
    if (!animate) return

    // Fase 1: Abrir tapa (solo si existe la referencia)
    if (animationPhase === 'idle' && tapaRef.current) {
      if (tapaRef.current.position.y < 5) {
        tapaRef.current.position.y += 0.1
      } else {
        setAnimationPhase('moving')
      }
    }
    
    // Fase 2: Mover inhalador (verificando referencia)
    if (animationPhase === 'moving' && inhalerBodyRef.current) {
      if (inhalerBodyRef.current.position.x > 2) {
        inhalerBodyRef.current.position.x -= 0.1
        inhalerBodyRef.current.position.y += 0.07
        inhalerBodyRef.current.position.z += 0.1
      } else {
        setAnimationPhase('breathing')
      }
    }
    
    // Fase 3: Animación de respiración (verificando referencia)
    if (animationPhase === 'breathing' && inhalerMeshRef.current) {
      const time = state.clock.getElapsedTime()
      inhalerMeshRef.current.position.y = Math.sin(time * 3) * 0.3
    }
  })

  return (
    <group ref={inhalerBodyRef} {...props} dispose={null}>
      <mesh
        ref={inhalerMeshRef}
        castShadow
        receiveShadow
        geometry={nodes.Inhaler.geometry}
        material={materials.InhalerMaterial}
        rotation={[-1.422, 0.138, 0.743]}
        position={[-5, 0, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubierta.geometry}
        material={materials.CubiertaMaterial}
        rotation={[-1.422, 0.138, 0.743]}
        position={[-5, 0, 0]}
      />
      
      {animationPhase === 'idle' && (
        <mesh
          ref={tapaRef}
          castShadow
          receiveShadow
          geometry={nodes.Tapa.geometry}
          material={materials.CubiertaMaterial}
          rotation={[-1.422, 0.138, 0.743]}
          position={[-5, 0, 0]}
        />
      )}
    </group>
  )
}

useGLTF.preload('/models-3d/face1.glb')
useGLTF.preload('/models-3d/Inhaler1.glb')

export default function Scene() {
  const [animate, setAnimate] = useState(false)
  const [reset, setReset] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  // Manejar teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'c') {
        setShowInstructions(prev => !prev)
      }
      if (e.key.toLowerCase() === 'q') {
        resetScene()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const resetScene = () => {
    setAnimate(false)
    setReset(prev => !prev) // Cambiamos el estado para forzar el reset
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
            <FaceModel
              scale={0.5}
              position={[-5.5, -6, -2]}
              rotation={[0, 0.6, 0]}
            />
            <InhalerModel
              animate={animate}
              scale={0.8}
              reset={reset}
              position={[8, -4.5, 0]}
              rotation={[0, -0.3, 0]}
            />
            <Soporte />
          </Physics>

          <Text onClick={() => setAnimate(true)} />
          <Staging />

          {showInstructions && (
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
                }}>
                  A continuación encontrarás los tratamientos más efectivos para el manejo de la EPOC, 
                  organizados en tres pilares fundamentales: las modificaciones en tu estilo de vida 
                  que marcarán la diferencia, los medicamentos esenciales que te ayudarán a controlar 
                  los síntomas, y las señales de alerta que nunca debes ignorar.
                  Explora cada sección para descubrir cómo puedes tomar el control de tu EPOC y mejorar 
                  significativamente tu calidad de vida.
                </p>
                <button 
                  onClick={resetScene}
                  style={{
                    marginTop: '15px',
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                  Restaurar Escena
                </button>
              </div>
            </Html>
          )}
        </Canvas>
        <div
        style={{
          position: "absolute",
          bottom: "18px",
          right: "19px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "0.4rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          zIndex: 10,
        }}
      >
        💡 Presiona la tecla "C" <br />
      </div>

      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "19px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "0.4rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          zIndex: 10,
        }}
      >  
      Broncodilatadores
      </div>
      </Suspense>
    </>
  )
}


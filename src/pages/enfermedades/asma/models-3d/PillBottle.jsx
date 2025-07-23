/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Bounds, Loader, OrbitControls, useGLTF, PositionalAudio, Text3D, Center, Html } from '@react-three/drei'
import Soporte from './Base'
import Lights from './LightsBreathingHard'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Staging from '../staging/StagingPillBottle'
import font from "../../../../assets/fonts/Brunson_Regular.json";

// Componente para píldoras individuales movibles
function MovablePill({ nodes, materials, pillNumber, initialPosition, onDrag }) {
  const pillRef = useRef()
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState(initialPosition)

  // Limpiar cursor al desmontar
  useEffect(() => {
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  const handlePointerDown = (event) => {
    event.stopPropagation()
    setIsDragging(true)
  }

  const handlePointerUp = (event) => {
    event.stopPropagation()
    setIsDragging(false)
    document.body.style.cursor = isHovered ? 'grab' : 'auto'
  }

  const handlePointerEnter = (event) => {
    event.stopPropagation()
    setIsHovered(true)
    if (!isDragging) {
      document.body.style.cursor = 'grab'
    }
  }

  const handlePointerLeave = (event) => {
    event.stopPropagation()
    setIsHovered(false)
    if (!isDragging) {
      document.body.style.cursor = 'auto'
    }
  }

  const handlePointerMove = (event) => {
    if (isDragging && event.intersections.length > 0) {
      event.stopPropagation()
      document.body.style.cursor = 'grabbing'
      
      // Usar la posición de intersección directamente
      const intersection = event.intersections[0]
      const newPosition = [
        intersection.point.x,
        intersection.point.y,
        intersection.point.z
      ]
      
      setPosition(newPosition)
      if (onDrag) onDrag(pillNumber, newPosition)
    }
  }

  // Escala ligeramente la píldora cuando está siendo arrastrada o hover
  const scale = isDragging ? 1.1 : isHovered ? 1.05 : 1

  return (
    <group 
      ref={pillRef}
      position={position} 
      rotation={[0.057, 0, 0]}
      scale={[scale, scale, scale]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`Sphere${pillNumber}PillBottom`]?.geometry}
        material={materials.SpherePillBottomMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`Sphere${pillNumber}PillTop`]?.geometry}
        material={materials.SpherePillTopMaterial}
      />
    </group>
  )
}


export function PillBottle(props) {
  const { nodes, materials } = useGLTF('/models-3d/pill-bottle.glb')
  const audioRef = useRef()
  const [pillPositions, setPillPositions] = useState({})

  // Lista de números de píldoras disponibles en el modelo
  const pillNumbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const handlePillDrag = (pillNumber, newPosition) => {
    setPillPositions(prev => ({
      ...prev,
      [pillNumber]: newPosition
    }))
  }

  // Función para generar posiciones iniciales aleatorias dentro del frasco
  const generateInitialPositions = () => {
    const positions = {}
    const basePosition = [-0.645, 0.645, 13.23]
    
    pillNumbers.forEach((pillNumber, index) => {
      // Crear una distribución semi-aleatoria dentro del frasco
      const angle = (index / pillNumbers.length) * Math.PI * 2
      const radius = Math.random() * 0.3 // Radio pequeño para mantenerlas en el frasco
      const height = Math.random() * 0.5 - 0.25 // Variación vertical pequeña
      
      positions[pillNumber] = [
        basePosition[0] + Math.cos(angle) * radius,
        basePosition[1] + height,
        basePosition[2] + Math.sin(angle) * radius
      ]
    })
    
    return positions
  }

  // Posiciones iniciales de las píldoras (distribuidas aleatoriamente)
  const basePosition = [-0.645, 0.645, 13.23]

  // Generar posiciones iniciales solo una vez
  const [initialPositions] = useState(() => generateInitialPositions())

  return (
    <group {...props} dispose={null} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <PositionalAudio
        ref={audioRef}
        url="/sounds/shaking_pills.wav"
        distance={10}
        loop={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle.geometry}
        material={materials.BottleMaterial}
        position={[-0.645, 0.645, 13.23]}
        rotation={[0.057, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials.CapMaterial}
        position={[-0.645, 0.645, 13.23]}
        rotation={[0.057, 0, 0]}
      />
      
      {/* Renderizar píldoras movibles */}
      {pillNumbers.map((pillNumber) => (
        <MovablePill
          key={pillNumber}
          nodes={nodes}
          materials={materials}
          pillNumber={pillNumber}
          initialPosition={pillPositions[pillNumber] || initialPositions[pillNumber] || basePosition}
          onDrag={handlePillDrag}
        />
      ))}
    </group>
  )
}

useGLTF.preload('/models-3d/pill-bottle.glb')

export default function Scene() {
  const [showTreatmentInfo, setShowTreatmentInfo] = useState(false)

  // Event listener para la tecla T
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === 't') {
        setShowTreatmentInfo(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <Canvas shadows camera={{ position:[0, -5, 50],  fov: 80 }}>
        <OrbitControls
          makeDefault
          target={[0, -8, 0]}  
          enableDamping
          // Deshabilitar zoom
          enableZoom={false}
          // Límites de ángulo polar (vertical)
          minPolarAngle={Math.PI * 0.2} // 36 grados desde arriba
          maxPolarAngle={Math.PI * 0.8} // 144 grados (no puede ir debajo del horizonte)
          // Límites de ángulo azimutal (horizontal)
          minAzimuthAngle={-Math.PI * 0.5} // -90 grados
          maxAzimuthAngle={Math.PI * 0.5}  // +90 grados
          // Desactivar pan para mantener el foco
          enablePan={false}
        />
        <Staging />
        <Lights />
        <Soporte />
        
        {/* Texto 3D "TRATAMIENTOS" */}
        <Center position={[0, -5, 0]}>
          <Text3D
            font={font}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            TRATAMIENTOS
            <meshStandardMaterial color="#ffd43b" />
          </Text3D>
        </Center>

        {/* HTML Overlay con información del tratamiento */}
        {showTreatmentInfo && (
          <Html
            position={[0, -9, 2]}
            center
            transform
            occlude
            style={{
              pointerEvents: 'auto',
              userSelect: 'text',
            }}
          >
            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: scale(0.9); }
                  to { opacity: 1; transform: scale(1); }
                }
                @keyframes pulse {
                  0%, 100% { opacity: 0.8; }
                  50% { opacity: 1; }
                }
              `}
            </style>
            <div style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(15px)',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              maxWidth: '250px',
              fontFamily: 'Arial, sans-serif',
              fontSize: '10px',
              lineHeight: '1.6',
              color: '#333',
              position: 'relative',
              animation: 'fadeIn 0.3s ease-out'
            }}>
              {/* Botón de cerrar */}
              <button
                onClick={() => setShowTreatmentInfo(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#666',
                  fontWeight: 'bold'
                }}
              >
                ×
              </button>
              
              <h3 style={{
                margin: '0 0 20px 0',
                color: '#2563eb',
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Tratamiento
              </h3>
              <p style={{
                margin: '0 0 15px 0'
              }}>
                El tratamiento del asma se basa en la <strong>prevención y control a largo plazo</strong> para evitar los ataques antes de que comiencen. Incluye <strong>medicamentos de control</strong> (corticosteroides, broncodilatadores), <strong>medicamentos de rescate</strong> para emergencias, y tratamientos especializados como <strong>termoplastia bronquial</strong> e <strong>inmunoterapia</strong> para casos graves.
              </p>
              <p style={{
                margin: '0',
                fontSize: '12px',
                color: '#666',
                textAlign: 'center',
                borderTop: '1px solid #eee',
                paddingTop: '10px'
              }}>
                Presiona <kbd style={{
                  background: '#3b82f6',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}>T</kbd> para cerrar
              </p>
            </div>
          </Html>
        )}

        {/* Hint para mostrar la funcionalidad */}
        {!showTreatmentInfo && (
          <Html
            position={[0, -14, 0]}
            center
            transform
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '25px',
              fontSize: '14px',
              fontFamily: 'Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              animation: 'pulse 2s infinite'
            }}>
              <kbd style={{
                background: '#3b82f6',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                T
              </kbd>
              <span>Ver información del tratamiento</span>
            </div>
          </Html>
        )}
        
        <Bounds fit clip margin={1.2}>
          <PillBottle rotation={[0, 0, 0]} scale={0.035} position={[0, -11.95, 0]} />
        </Bounds>
      </Canvas>
    </Suspense>
  )
}

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, OrbitControls, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Base from '../../asma/models-3d/Base'
import Lights from './LightsBreathingHard'
import Staging from '../staging/Staging'
import Loader3D from '../../../../components/Loader'
import './BreathingHard.scss'

export function BreathingHard({ isAnimating, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/BreathingHard.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions["Armature|mixamo.com|Layer0"]
    if (action) {
      action.fadeIn(0.5).play()
      action.paused = !isAnimating
    }
    
    return () => {
      if (action) {
        action.fadeOut(0.5).stop()
      }
    }
  }, [actions, isAnimating])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <Html
          position={[0, 8, -15]}
          distanceFactor={12}
          transform
          className="breathing-label"
        >
          <div className="asma-message">
            <h2>Dificultad para respirar</h2>
            <p>
              Uno de los síntomas comunes del asma es la sensación de no poder tomar suficiente aire.
              Esto puede causar ansiedad y malestar.
            </p>
          </div>
        </Html>
        <group name="Avatar" rotation={[Math.PI / 2, 0, 0]} scale={0.73}>
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.EyeLeftMaterial}
            skeleton={nodes.EyeLeft.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.EyeRightMaterial}
            skeleton={nodes.EyeRight.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Glasses"
            geometry={nodes.Glasses.geometry}
            material={materials.GlassesMaterial}
            skeleton={nodes.Glasses.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Head"
            geometry={nodes.Head.geometry}
            material={materials.HeadMaterial}
            skeleton={nodes.Head.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Pants"
            geometry={nodes.Pants.geometry}
            material={materials.PantsMaterial}
            skeleton={nodes.Pants.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={nodes.Shoes.material}
            skeleton={nodes.Shoes.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Teeth"
            geometry={nodes.Teeth.geometry}
            material={materials.TheetMaterial}
            skeleton={nodes.Teeth.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.TopMaterial}
            skeleton={nodes.Top.skeleton}
            castShadow={true}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/BreathingHard.glb')

export default function Scene() {
  const controlsRef = useRef()
  const [isAnimating, setIsAnimating] = useState(true)

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev)
  }

  // Event listener para la tecla 'P'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'p') {
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* <button className="asma-toggle-btn" onClick={resetCamera}>
        Restablecer cámara
      </button> */}
      <Suspense fallback={<Loader3D message="Cargando dificultad respiratoria..." />}>
        <Canvas frameloop="always" camera={{ position: [0, -13, 11], fov: 65 }} shadows={true}>
          <OrbitControls
            ref={controlsRef}
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            target={[0, -10, -20]}

            // Límites verticales: evita que se vea desde abajo
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}

            // Límites horizontales: restringe el giro lateral
            minAzimuthAngle={-Math.PI / 35}
            maxAzimuthAngle={Math.PI / 35}

            // Guarda el estado inicial solo una vez
            onChange={() => {
              if (!controlsRef.current.__hasSavedState) {
                controlsRef.current.saveState()
                controlsRef.current.__hasSavedState = true
              }
            }}
          />
          <Lights />
          <Staging />
          <Base />
          <BreathingHard
            scale={2.5}
            position={[0, -12, 5]}
            rotation={[0, 0, 0]}
            isAnimating={isAnimating}
          />
        </Canvas>
      </Suspense>
      <div className="animation-control-hint">
        Presiona <strong>P</strong> para {isAnimating ? 'pausar' : 'reanudar'} la animación
      </div>
    </div>
  );
}

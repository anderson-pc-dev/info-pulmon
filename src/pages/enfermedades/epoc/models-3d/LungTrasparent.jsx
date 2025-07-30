/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Physics, vec3 } from '@react-three/rapier';
import { Suspense } from "react";
import Lights from '../lights/Lights';  
import Soporte from '../models-3d/Soporte'; 
import Text from '../texts/TextLungTranspa'; 
import Staging from '../staging/Staging1'; 
import Loader3D from '../../../../components/Loader'; 

function LungModel(props) {
  const group = useRef()
  const rigidBodyRef = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Lung-Transparent.glb')
  const { actions } = useAnimations(animations, group)
  const movementForce = 250
  const maxVelocity = 100
  const keysPressed = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    t: false,
  })

  const [showInstructions, setShowInstructions] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      actions.Beating.stop()
    } else {
      actions.Beating.play()
    }
    return () => actions.Beating.stop()
  }, [actions.Beating, isPaused]) 

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      if (['w', 'a', 's', 'd','t'].includes(key)) {
        keysPressed.current[key] = true
      }
      if (key === 'c') {
        setShowInstructions(prev => !prev)
      }
      if (key === 'q') {
        resetScene()
      }
    }

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase()
      if (['w', 'a', 's', 'd','t'].includes(key)) {
        keysPressed.current[key] = false
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const resetScene = () => {
    if (rigidBodyRef.current) {
      rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
      rigidBodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true)
      rigidBodyRef.current.setTranslation({ x: 0, y: -10.7, z: -6 }, true)
      rigidBodyRef.current.setRotation({ x: 0, y: -0.1, z: 0 }, true)
    }
  }

  useFrame(() => {
    if (!rigidBodyRef.current) return

    const linvel = rigidBodyRef.current.linvel()
    const velocity = vec3(linvel)
    let impulse = { x: 0, y: 0, z: 0 }

    if (keysPressed.current.t && velocity.y < maxVelocity) {
      impulse.y += movementForce
    }
    if (keysPressed.current.w && velocity.z < maxVelocity) {
      impulse.z -= movementForce
    }
    if (keysPressed.current.s && velocity.z > -maxVelocity) {
      impulse.z += movementForce
    }
    if (keysPressed.current.a && velocity.x > -maxVelocity) {
      impulse.x -= movementForce
    }
    if (keysPressed.current.d && velocity.x < maxVelocity) {
      impulse.x += movementForce
    }

    if (!keysPressed.current.t && !keysPressed.current.s && Math.abs(velocity.y) > 0.1) {
      impulse.y = -velocity.y * 0.5
    }
    if (!keysPressed.current.a && !keysPressed.current.d && Math.abs(velocity.x) > 0.1) {
      impulse.x = -velocity.x * 0.5
    }

    rigidBodyRef.current.applyImpulse(impulse, true)
  })

  return (
    <>
      <RigidBody 
        ref={rigidBodyRef}
        type="dynamic"
        colliders={false}
        position={[0, -10.7, -6]}
        rotation={[0, -0.1, 0]}
        linearDamping={0.5}
        restitution={0.7} 
        enabledRotations={[true, true, true]}
      >
        <group ref={group} {...props} dispose={null}onClick={(e) => {
            e.stopPropagation()
            setIsPaused(!isPaused)
          }}
        >
          <group name="Scene">
            <mesh
              name="RightLung"
              castShadow
              receiveShadow
              geometry={nodes.RightLung.geometry}
              material={materials.RightLungMaterial}
              morphTargetDictionary={nodes.RightLung.morphTargetDictionary}
              morphTargetInfluences={nodes.RightLung.morphTargetInfluences}
            />
            <mesh
              name="PulmonaryArteries"
              castShadow
              receiveShadow
              geometry={nodes.PulmonaryArteries.geometry}
              material={materials.PulmonaryArteriesMaterial}
            />
            <mesh
              name="PulmonaryVeins"
              castShadow
              receiveShadow
              geometry={nodes.PulmonaryVeins.geometry}
              material={materials.PulmonaryVeinsMaterial}
            />
            <mesh
              name="LeftLung"
              castShadow
              receiveShadow
              geometry={nodes.LeftLung.geometry}
              material={materials.LeftLungMaterial}
              morphTargetDictionary={nodes.LeftLung.morphTargetDictionary}
              morphTargetInfluences={nodes.LeftLung.morphTargetInfluences}
            >
              <meshStandardMaterial 
                attach="material"
                color="#333333"  
                opacity={0.5}    
                transparent={true}
                roughness={0.7}
                metalness={0.1}
              />
            </mesh>
            <mesh
              name="ThyrocricoidLigament"
              castShadow
              receiveShadow
              geometry={nodes.ThyrocricoidLigament.geometry}
              material={materials.ThyrocricoidLigamentMaterial}
            />
            <mesh
              name="ThyroidCartilage"
              castShadow
              receiveShadow
              geometry={nodes.ThyroidCartilage.geometry}
              material={materials.ThyroidCartilageMaterial}
            />
            <mesh
              name="Trachea"
              castShadow
              receiveShadow
              geometry={nodes.Trachea.geometry}
              material={materials.TracheaMaterial}
            />
          </group>
        </group>
        <CuboidCollider
          args={[5, 6, 4]} 
          position={[0, 0, -2]} 
          restitution={0.5} 
        />
      </RigidBody>

      {showInstructions && (
        <Html center position={[0, -5, 0]}>
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
            <h3>Instrucciones de control</h3>
            <p>W: Mover hacia adelante</p>
            <p>S: Mover hacia atrás</p>
            <p>A: Mover hacia la izquierda</p>
            <p>Q: Restaurar  escena</p>
            <p>D: Mover hacia la derecha</p>
            <p>T: Mover hacia arriba</p>
            <p>C: Mostrar/ocultar estas instrucciones</p>
            
            <button 
              onClick={() => {
                resetScene();
                setShowInstructions(false);
              }}
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
      )}
    </>
  )
}

useGLTF.preload('/models-3d/Lung-Transparent.glb');

export default function Scene() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Suspense fallback={<Loader3D message="Cargando pulmón..." />}>
        <Canvas
          camera={{ position: [0, -5, 5], fov: 80 }}
          shadows={true}>
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={false}
          target={[0, -6.5, -8]}
        />
        <Text textSintoma={"Pulmon Enfermo"}/>
        <Lights />
        <Staging />
        <Physics gravity={[0, -9.81, 0]}>
          <Soporte />
          <LungModel 
            scale={1.0}
            position={[0, -5.7, 0]}
            rotation={[0, 0, 0]}
          />
        </Physics>
      </Canvas>
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          right: "5px",
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
          top: "3px",
          left: "3px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "0.4rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          zIndex: 10,
        }}
      >
        🖱️ Haz click en el modelo
      </div>
    </Suspense>
    </div>
  )
}
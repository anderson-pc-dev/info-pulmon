/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, OrbitControls, Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Lights from '../../epoc/lights/Lights'
import Soporte from '../../epoc/models-3d/Soporte'

export function BreathingHard(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/BreathingHard.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
      actions["Armature|mixamo.com|Layer0"].play()
      return() => actions["Armature|mixamo.com|Layer0"].stop();
    }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Avatar" rotation={[Math.PI / 2, 0, 0]} scale={0.73}>
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.EyeLeftMaterial}
            skeleton={nodes.EyeLeft.skeleton}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.EyeRightMaterial}
            skeleton={nodes.EyeRight.skeleton}
          />
          <skinnedMesh
            name="Glasses"
            geometry={nodes.Glasses.geometry}
            material={materials.GlassesMaterial}
            skeleton={nodes.Glasses.skeleton}
          />
          <skinnedMesh
            name="Head"
            geometry={nodes.Head.geometry}
            material={materials.HeadMaterial}
            skeleton={nodes.Head.skeleton}
          />
          <skinnedMesh
            name="Pants"
            geometry={nodes.Pants.geometry}
            material={materials.PantsMaterial}
            skeleton={nodes.Pants.skeleton}
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={nodes.Shoes.material}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name="Teeth"
            geometry={nodes.Teeth.geometry}
            material={materials.TheetMaterial}
            skeleton={nodes.Teeth.skeleton}
          />
          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.TopMaterial}
            skeleton={nodes.Top.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/BreathingHard.glb')

export default function Scene() {
    return (
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 2, 10], fov: 40 }} // Alejar un poco y subir la cámara
          shadows={true}>
          <OrbitControls
            enableRotate={true}
            // enableZoom={true}
            enablePan={false}
            target={[0, -1, 0]} // Apuntar al centro del modelo
          />
          <Lights />
          <Soporte />
          <BreathingHard
            scale={1}
            position={[0, -3, 0]} // Ajustado para que quede bien alineado
            rotation={[0, 0, 0]} // Mirando de frente
          />
        </Canvas>
      </Suspense>
    );
  }
  
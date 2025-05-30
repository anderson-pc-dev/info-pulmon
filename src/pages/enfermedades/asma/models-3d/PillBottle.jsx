/* eslint-disable react/no-unknown-property */
import { Bounds, Loader, OrbitControls, useGLTF } from '@react-three/drei'
import Soporte from './Base'
import Lights from './LightsBreathingHard'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Staging from '../staging/StagingPillBottle'


export function PillBottle(props) {
  const { nodes, materials } = useGLTF('/models-3d/pill-bottle.glb')
  return (
    <group {...props} dispose={null}>
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
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere14PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere14PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere15PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere15PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere16PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere16PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere17PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere17PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere18PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere18PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere19PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere19PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere20PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere20PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere21PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere21PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere22PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere22PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere6PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere6PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere7PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere7PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere9PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere9PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere10PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere10PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere11PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere11PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere12PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere12PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere13PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere13PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere1PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere1PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere3PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere3PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere4PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere4PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
      <group position={[-0.645, 0.645, 13.23]} rotation={[0.057, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere5PillBottom.geometry}
          material={materials.SpherePillBottomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere5PillTop.geometry}
          material={materials.SpherePillTopMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/pill-bottle.glb')

export default function Scene() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas shadows camera={{ position:[0, -8, 10],  fov: 20 }}>
        <OrbitControls
          makeDefault
          target={[7, -8, -6]}  
          enableDamping
        />
        <Staging />
        <Lights />
        <Soporte />
        <Bounds fit clip margin={1.2}>
          <PillBottle rotation={[0, -4, 0]} scale={0.05} position={[0, -11.95, 0]} />
        </Bounds>
      </Canvas>
    </Suspense>
  )
}

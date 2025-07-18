/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Loader, OrbitControls, Text } from '@react-three/drei'
import { Inhaler } from './Inhaler'
import Soporte from './Base'
import StagingInhaler from '../staging/StagingInhaler'
import Lights from './LightsBreathingHard'

function RotatingInhaler(props) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <Inhaler {...props} />
    </group>
  )
}

export default function Scene() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{ position: [0, -9.5, 3], fov: 50 }}
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
        <RotatingInhaler scale={2.0} position={[0, -11.95, 0]} rotation={[0, 0, 0]} />

        <Text
          position={[0, -9.7, 0.5]}
          fontSize={0.6}
          color="#2AABEC"
          anchorX="center"
          anchorY="middle"
        >
          Inhalador
        </Text>
      </Canvas>
    </Suspense>
  )
}

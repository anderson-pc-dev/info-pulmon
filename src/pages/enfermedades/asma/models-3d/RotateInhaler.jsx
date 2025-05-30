/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Inhaler } from './Inhaler'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Loader, OrbitControls } from '@react-three/drei'
import Soporte from './Base'
import StagingInhaler from '../staging/StagingInhaler'
import Lights from './LightsBreathingHard'

function RotatingInhaler(props) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5 // Ajusta la velocidad aquí
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
            <Canvas camera={{ position: [0, -9.5, 3], fov: 50 }} shadows={true}>
                <OrbitControls enableRotate enableZoom={false} enablePan={false} target={[0, -10.5, 0.6]} />
                <StagingInhaler />
                <Lights />
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    castShadow={true}
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
            </Canvas>
        </Suspense>
    )
}

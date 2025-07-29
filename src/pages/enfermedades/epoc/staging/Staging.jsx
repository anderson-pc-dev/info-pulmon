import { useState, useEffect } from 'react'
import { Sky, Stars, Environment, Plane } from "@react-three/drei"
import { useThree } from '@react-three/fiber'

const Staging = () => {
  const [skyType, setSkyType] = useState(0)
  const skyPresets = [
    {
      name: "Hotel",
      background: null,
      skyProps: null,
      starsProps: null,
      environment: {
        files: "../../../hdris/campo/hotel.hdr",
        background: true,
        resolution: 1024
      }
    },
    {
      name: "Noche estrellada",
      background: '#000000',
      skyProps: {
        sunPosition: [0, -1, 0],
        inclination: 0.6,
        azimuth: 180,
        rayleigh: 1.5,
        turbidity: 2,
        mieCoefficient: 0.01,
        mieDirectionalG: 0.1,
      },
      starsProps: {
        radius: 150,
        depth: 50,
        count: 10000,
        factor: 2,
        fade: true,
      },
      environment: null
    },
    {
      name: "Atardecer",
      background: '#8f2e08ff', 
      skyProps: {
        sunPosition: [0, 0.10, -5], 
        inclination: 4.8,
        azimuth: 0.95,
        rayleigh: 5,             
        turbidity: 6,              
        mieCoefficient: 0.01,     
        mieDirectionalG: 0.4,     
      },
      starsProps: null,
      environment: null
    },
    {
      name: "Cielo tormentoso",
      background: '#4A5568', 
      skyProps: {
        sunPosition: [0, 0.1, 1],
        inclination: 0.65,
        azimuth: 0.25,
        rayleigh: 0.4,
        turbidity: 35,
        mieCoefficient: 0.2,
        mieDirectionalG: 0.95,
      },
      starsProps: {
        radius: 180,
        depth: 40,
        count: 8000,
        factor: 1.5,
        fade: true,
      },
      environment: null
    },
  ]

  const currentSky = skyPresets[skyType]

  const handleClick = () => {
    setSkyType((prev) => (prev + 1) % skyPresets.length)
  }

  return (
    <group>
      <mesh onClick={handleClick}>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <group>
        {currentSky.skyProps && <Sky {...currentSky.skyProps} />}
        {currentSky.starsProps && <Stars {...currentSky.starsProps} />}
        {currentSky.environment && <Environment {...currentSky.environment} />}
      </group>
    </group>
  )
}

export default Staging

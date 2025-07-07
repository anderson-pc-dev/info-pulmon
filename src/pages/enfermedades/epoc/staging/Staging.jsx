import { useState, useEffect } from 'react'
import { Sky, Stars } from "@react-three/drei"
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

const Staging = () => {
  const [skyType, setSkyType] = useState(0)
  const { scene } = useThree()

  const skyPresets = [
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
      }
    },
    {
  name: "Atardecer",
  background: '#802906', 
  skyProps: {
    sunPosition: [0, 0.15, -2], 
    inclination: 0.6,
    azimuth: 0.95,
    rayleigh: 5,             
    turbidity: 2,              
    mieCoefficient: 0.01,     
    mieDirectionalG: 0.4,     
  },
  starsProps: null,
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
      }
    }
  ]

  const currentSky = skyPresets[skyType]

  useEffect(() => {
    scene.background = new THREE.Color(currentSky.background)
  }, [skyType, scene])

  const handleClick = () => {
    setSkyType((prev) => (prev + 1) % skyPresets.length)
  }

  return (
    <group onClick={handleClick}>
      <Sky {...currentSky.skyProps} />
      {currentSky.starsProps && <Stars {...currentSky.starsProps} />}
    </group>
  )
}

export default Staging

import { useState } from 'react'
import { Sky, Stars} from "@react-three/drei"
import { useThree } from '@react-three/fiber'

const Staging = () => {
  const [skyType, setSkyType] = useState(0)
  const { scene } = useThree()


  const skyPresets = [

    {
      skyProps: {
        sunPosition: [0, -1, 0],
        inclination: 0.6,
        azimuth: 180,
        rayleigh: 1.5,
        turbidity: 2,
        mieCoefficient: 0.01,
        mieDirectionalG: 0.1
      },
      starsProps: {
        radius: 150,
        depth: 50,
        count: 10000,
        factor: 2,
        fade: true
      },
      name: "Noche estrellada"
    },

    {
      skyProps: {
        sunPosition: [0.5, 0.1, 1],
        inclination: 0.3,
        azimuth: 0.25,
        rayleigh: 2,
        turbidity: 10,
        mieCoefficient: 0.005,
        mieDirectionalG: 0.8
      },
      starsProps: null,
      name: "Amanecer"
    },

    {
      skyProps: {
        sunPosition: [1, 1, 1],
        inclination: 0,
        azimuth: 0.25,
        rayleigh: 0.5,
        turbidity: 5,
        mieCoefficient: 0.005,
        mieDirectionalG: 0.8
      },
      starsProps: null,
      name: "Día soleado"
    },

    {
      skyProps: {
        sunPosition: [0, 0.5, -1],
        inclination: 0.5,
        azimuth: 0.25,
        rayleigh: 3,
        turbidity: 20,
        mieCoefficient: 0.1,
        mieDirectionalG: 0.9
      },
      starsProps: null,
      name: "Atardecer"
    },

    {
      skyProps: {
        sunPosition: [0, 0.1, 1],
        inclination: 0.6,
        azimuth: 0.25,
        rayleigh: 1,
        turbidity: 40,
        mieCoefficient: 0.1,
        mieDirectionalG: 0.8
      },
      starsProps: {
        radius: 150,
        depth: 50,
        count: 10000,
        factor: 2,
        fade: true
      },
      name: "Cielo tormentoso"
    }
  ]

  const handleClick = () => {
    setSkyType((prev) => (prev + 1) % skyPresets.length)
    scene.background = new THREE.Color(
      skyType === 0 ? '#000000' : 
      skyType === 1 ? '#87CEEB' : 
      skyType === 2 ? '#87CEEB' : 
      skyType === 3 ? '#FFA07A' : '#708090'
    )
  }

  const currentSky = skyPresets[skyType]

  return (
    <group onClick={handleClick}>
      <Sky {...currentSky.skyProps} />
      {currentSky.starsProps && <Stars {...currentSky.starsProps} />}
    </group>
  )
}

export default Staging
import {
  Cloud,
  // Environment,
  Sky,
  Sparkles,
  Stars,
} from "@react-three/drei";
  import { Color } from "three";

const Recipient = () => {
    return (
      <>
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        position-y={-2}
        position-x={1}
      >
        <circleGeometry args={[12, 32]} />
        <meshStandardMaterial roughness={0.8} metalness={1} />
      </mesh>
      <group >
        <Stars
          radius={100} // Radius of the sphere in which stars are placed
          depth={50} // Depth of the star field, creating a layered effect
          count={1000} // Total number of stars in the scene
          factor={4} // Star size factor, affecting how large they appear
          saturation={0} // Color saturation of the stars, 0 means grayscale
          fade // Enables fading effect for a more realistic sky
          speed={1} // Speed at which the stars move (if animated)
        />
      </group>  
      <Sparkles
          count={256} // Number of particles (default: 100)
          speed={1.5} // Speed of particles (default: 1)
          opacity={1} // Opacity of particles (default: 1)
          color={"yellow"} // Color of particles (default: 100)
          size={4} // Size of particles (default: randomized between 0 and 1)
          scale={[40, 40, 40]} // The space the particles occupy (default: 1)
          noise={1} // Movement factor (default: 1)
        />
      <Sky
        sunPosition={[0, 0, -1]} // Places the sun below the horizon
        inclination={0.6} // Adjusts the inclination to simulate the sunset
        azimuth={180} // Adjusts the azimuth angle to change the light direction
        mieCoefficient={0.1} // Adjusts the atmospheric dispersion
        mieDirectionalG={0.8} // Adjusts the sun's brightness
        rayleigh={0.5} // Adjusts Rayleigh scattering
        turbidity={10} // Adjusts the sky clarity
      />
      </>
    );
  };
  
  export default Recipient;
  
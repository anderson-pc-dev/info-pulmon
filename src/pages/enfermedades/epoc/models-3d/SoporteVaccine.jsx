import { RigidBody } from "@react-three/rapier";

const SoporteVaccine = () => {
    return (
      <RigidBody>
      <mesh
        rotation-x={-Math.PI / 2}  
        receiveShadow={true}      
        position={[0, -11, -2]}      
      >
        <circleGeometry args={[72, 62]} />
        <shadowMaterial
          roughness={0.8}
          metalness={1}
          transparent={true}
          opacity={0.8}  
        />
      </mesh>
      </RigidBody>
    );
  };
  
  export default SoporteVaccine;
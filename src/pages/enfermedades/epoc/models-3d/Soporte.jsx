import { RigidBody } from "@react-three/rapier";

const Soporte = () => {
    return (
      <RigidBody>
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        position-y={-14}
        position-x={0}
        position-z={-11}
      >
        <circleGeometry args={[66, 32]} /> 
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
  
  export default Soporte;
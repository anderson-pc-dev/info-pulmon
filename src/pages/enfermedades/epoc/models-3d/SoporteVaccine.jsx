const SoporteVaccine = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}  
        receiveShadow={true}      
        position={[0, -13, -2]}      
      >
        <circleGeometry args={[72, 62]} />
        <shadowMaterial
          roughness={0.8}
          metalness={1}
          transparent={true}
          opacity={0.8}  
        />
      </mesh>
    );
  };
  
  export default SoporteVaccine;
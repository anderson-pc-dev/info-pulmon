const SoporteBronchi = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}  
        receiveShadow={true}      
        position={[0, -9, -18]}      
      >
        <circleGeometry args={[20, 32]} />
        <shadowMaterial
          roughness={0.8}
          metalness={1}
          transparent={true}
          opacity={0.8}  
        />
      </mesh>
    );
  };
  
  export default SoporteBronchi;
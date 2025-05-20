const SoporteBody = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}  
        receiveShadow={true}      
        position={[0, -1.5, 0]}      
      >
        <circleGeometry args={[15, 32]} />  
        <shadowMaterial
          roughness={0.8}
          metalness={1}
          transparent={true}
          opacity={0.8}  
        />
      </mesh>
    );
  };
  
  export default SoporteBody;
const Soporte = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        position-y={-7.5}
        position-x={0}
        position-z={-9}
      >
        <circleGeometry args={[12, 32]} /> 
        <meshStandardMaterial 
          color="#FF5733" 
          roughness={0.8} 
          metalness={1} 
        />
      </mesh>
    );
  };
  
  export default Soporte;
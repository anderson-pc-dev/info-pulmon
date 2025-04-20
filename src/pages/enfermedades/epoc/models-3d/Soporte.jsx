const Soporte = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        position-y={-5}
        position-x={0}
        position-z={-9}
      >
        {/* Aumentar el primer valor en args para hacerlo más grande (radio) */}
        <circleGeometry args={[12, 32]} /> {/* Cambiado de 4 a 8 para duplicar el tamaño */}
        <meshStandardMaterial 
          color="#FF5733" 
          roughness={0.8} 
          metalness={1} 
        />
      </mesh>
    );
  };
  
  export default Soporte;
const Recipient = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        position-y={0}
        position-x={1}
      >
        <circleGeometry args={[50, 32]} />
        <meshStandardMaterial roughness={0.8} metalness={1} />
      </mesh>
    );
  };
  
  export default Recipient;
  
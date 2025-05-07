/* eslint-disable react/no-unknown-property */
const Soporte = () => {
    return (
        <mesh
            rotation-x={-Math.PI / 2}
            receiveShadow={true}
            position-y={-12}
            position-x={0}
            position-z={2}
        >
            <circleGeometry args={[200, 200]} />
            <meshStandardMaterial
                color={"#ffffff"}
                transparent={true}
                roughness={0.8}
                metalness={0.2}
                opacity={0.2}
            />
        </mesh>

    );
};

export default Soporte;
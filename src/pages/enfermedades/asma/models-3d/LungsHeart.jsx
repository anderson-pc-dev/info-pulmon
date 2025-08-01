/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, OrbitControls, Text } from '@react-three/drei'
import Soporte from './Soporte'
import { Canvas, useFrame } from '@react-three/fiber'
import LightsLungHeart from './LightsLungHeart'
import Loader3D from '../../../../components/Loader'
import './RotateInhaler.scss'

export function LungsHeart(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models-3d/Body.glb')
    const { actions } = useAnimations(animations, group)
    const [playing, setPlaying] = useState(true)
    const [rotationY, setRotationY] = useState(0)

    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log(event.code)
            if (event.code === 'KeyP') {
                setPlaying(prev => !prev)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        const anims = ['Diaphragm', 'Heart', 'LeftLung', 'RightLung']
        anims.forEach(name => {
            const action = actions[name]
            if (action) {
                playing ? action.play() : action.stop()
            }
        })
    }, [actions, playing])

    // Evento de click para rotar el modelo
    const handleClick = () => {
        setRotationY(prev => prev + Math.PI / 12) // gira 15 grados
    }

    useFrame(() => {
        if (group.current) {
            group.current.rotation.y = rotationY
        }
    })

    return (
        <group ref={group} {...props} dispose={null} onClick={handleClick}>
            <group name="Scene">
                <group name="Heart">
                    <mesh
                        name="Heart_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_1.geometry}
                        material={materials.CoronaryVeinsMaterial}
                        morphTargetDictionary={nodes.Heart_1.morphTargetDictionary}
                        morphTargetInfluences={nodes.Heart_1.morphTargetInfluences}
                    />
                    <mesh
                        name="Heart_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_2.geometry}
                        material={materials.VentricleMaterial}
                        morphTargetDictionary={nodes.Heart_2.morphTargetDictionary}
                        morphTargetInfluences={nodes.Heart_2.morphTargetInfluences}
                    />
                    <mesh
                        name="Heart_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_3.geometry}
                        material={materials.LeftAtriumMaterial}
                        morphTargetDictionary={nodes.Heart_3.morphTargetDictionary}
                        morphTargetInfluences={nodes.Heart_3.morphTargetInfluences}
                    />
                    <mesh
                        name="Heart_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_4.geometry}
                        material={materials.RightAtriumMaterial}
                        morphTargetDictionary={nodes.Heart_4.morphTargetDictionary}
                        morphTargetInfluences={nodes.Heart_4.morphTargetInfluences}
                    />
                    <mesh
                        name="Heart_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_5.geometry}
                        material={materials.AortaMaterial}
                        morphTargetDictionary={nodes.Heart_5.morphTargetDictionary}
                        morphTargetInfluences={nodes.Heart_5.morphTargetInfluences}
                    />
                    <mesh
                        name="Heart_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_6.geometry}
                        material={materials.CoronaryArteryMaterial}
                        morphTargetDictionary={nodes.Heart_6.morphTargetDictionary}
                        morphTargetInfluences={nodes.Heart_6.morphTargetInfluences}
                    />
                </group>
                <mesh
                    name="RightLung"
                    castShadow
                    receiveShadow
                    geometry={nodes.RightLung.geometry}
                    material={materials.RightLungMaterial}
                    morphTargetDictionary={nodes.RightLung.morphTargetDictionary}
                    morphTargetInfluences={nodes.RightLung.morphTargetInfluences}
                />
                <mesh
                    name="LeftLung"
                    castShadow
                    receiveShadow
                    geometry={nodes.LeftLung.geometry}
                    material={materials.LeftLungMaterial}
                    morphTargetDictionary={nodes.LeftLung.morphTargetDictionary}
                    morphTargetInfluences={nodes.LeftLung.morphTargetInfluences}
                />
                <group name="Body">
                    <mesh
                        name="Body_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_1.geometry}
                        material={nodes.Body_1.material}
                    />
                    <mesh
                        name="Body_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_2.geometry}
                        material={materials.ThyrohyoidMembraneMaterial}
                    />
                    <mesh
                        name="Body_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_3.geometry}
                        material={materials.ThyroidCartilageMaterial}
                    />
                    <mesh
                        name="Body_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_4.geometry}
                        material={materials.TracheaMaterial}
                    />
                    <mesh
                        name="Body_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_5.geometry}
                        material={materials.VocalChordsMaterial}
                    />
                    <mesh
                        name="Body_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_6.geometry}
                        material={materials.MedianCricothyroidLligamentMaterial}
                    />
                    <mesh
                        name="Body_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_7.geometry}
                        material={materials.PulmonaryVeinsMaterial}
                    />
                    <mesh
                        name="Body_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_8.geometry}
                        material={materials.PulmonaryArteriesMaterial}
                    />
                    <mesh
                        name="Body_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_9.geometry}
                        material={materials.HyoidboneMaterial}
                    />
                    <mesh
                        name="Body_10"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_10.geometry}
                        material={materials.LarynxMaterial}
                    />
                    <mesh
                        name="Body_11"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_11.geometry}
                        material={materials.CricoidMaterial}
                    />
                    <mesh
                        name="Body_12"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_12.geometry}
                        material={materials.ArytenoidMaterial}
                    />
                    <mesh
                        name="Body_13"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_13.geometry}
                        material={materials.CorniculateMaterial}
                    />
                    <mesh
                        name="Body_14"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body_14.geometry}
                        material={materials.EpiglosttisMaterial}
                    />
                </group>
                <mesh
                    name="Diaphragm"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diaphragm.geometry}
                    material={materials.DiaphragmMaterial}
                    morphTargetDictionary={nodes.Diaphragm.morphTargetDictionary}
                    morphTargetInfluences={nodes.Diaphragm.morphTargetInfluences}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models-3d/Body.glb')

export default function Scene() {
    const [showHint, setShowHint] = useState(true)

    const handleModelClick = () => {
        setShowHint(false)
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Suspense fallback={<Loader3D message="Cargando pulmones y corazón..." />}>
                <Canvas camera={{ position: [0, -11.6, 3], fov: 40 }} shadows={true}>
                    <OrbitControls enableRotate enableZoom={false} enablePan={false} target={[0, -11.6, 0]} />
                    <LightsLungHeart />
                    <Soporte />
                    <group onClick={handleModelClick}>
                        <LungsHeart scale={2.0} position={[0, -11.95, 0]} rotation={[0, 0, 0]} />
                    </group>
                    <Text
                        position={[0, -10.8, 0]}
                        fontSize={0.15}
                        color="#2AABEC"
                        
                        anchorX="center"
                        anchorY="middle"
                    >
                        Presiona &quot;P&quot; para pausar/reanudar
                    </Text>
                    <Text
                        position={[0, -12.3, 0]}
                        fontSize={0.08}
                        color="#FF6B6B"
                        anchorX="center"
                        anchorY="middle"
                    >
                        Sistema Respiratorio: Observa cómo trabajan los pulmones y el corazón
                    </Text>
                </Canvas>
            </Suspense>
            {showHint && (
                <div className="hint">
                    💡 Haz clic en el modelo para rotarlo
                </div>
            )}
        </div>
    )
}


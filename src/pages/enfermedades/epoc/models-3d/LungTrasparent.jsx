import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function LungModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Lung-Transparent.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.Beating.play();
    return() => actions.Beating.stop();
  }, [actions.Idle]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
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
          name="PulmonaryArteries"
          castShadow
          receiveShadow
          geometry={nodes.PulmonaryArteries.geometry}
          material={materials.PulmonaryArteriesMaterial}
        />
        <mesh
          name="PulmonaryVeins"
          castShadow
          receiveShadow
          geometry={nodes.PulmonaryVeins.geometry}
          material={materials.PulmonaryVeinsMaterial}
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
        <mesh
          name="ThyrocricoidLigament"
          castShadow
          receiveShadow
          geometry={nodes.ThyrocricoidLigament.geometry}
          material={materials.ThyrocricoidLigamentMaterial}
        />
        <mesh
          name="ThyroidCartilage"
          castShadow
          receiveShadow
          geometry={nodes.ThyroidCartilage.geometry}
          material={materials.ThyroidCartilageMaterial}
        />
        <mesh
          name="Trachea"
          castShadow
          receiveShadow
          geometry={nodes.Trachea.geometry}
          material={materials.TracheaMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/Lung-Transparent.glb')
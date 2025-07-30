import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/Inhaler1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubierta.geometry}
        material={materials.CubiertaMaterial}
        rotation={[-1.422, 0.138, 0.743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inhaler.geometry}
        material={materials.InhalerMaterial}
        rotation={[-1.422, 0.138, 0.743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapa.geometry}
        material={materials.CubiertaMaterial}
        rotation={[-1.422, 0.138, 0.743]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Inhaler1.glb')
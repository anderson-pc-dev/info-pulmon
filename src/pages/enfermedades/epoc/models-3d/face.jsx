import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3/face1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face.geometry}
        material={materials.faceMarial}
        rotation={[-2.051, -0.01, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/face1.glb')
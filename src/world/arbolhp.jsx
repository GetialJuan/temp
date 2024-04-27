import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Arbolhp(props) {
  const { nodes, materials } = useGLTF('/assets/models/arbolhp/arbolhp.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica.geometry}
        material={materials['Material.002']}
        position={[3.791, 10.014, 5.409]}
        scale={[8.385, 2.5, 4.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica001.geometry}
        material={materials['Material.003']}
        position={[3.69, 11.151, -1.454]}
        scale={[8.385, 4, 5.878]}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/arbolhp/arbolhp.glb')
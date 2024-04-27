import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'

export default function LevelJuly(props) {
  const { nodes, materials } = useGLTF('/assets/models/levelJuly/World.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo.geometry}
        material={materials.Material}
        position={[0, 0, 0]}
        scale={[2.5, 1, 17.5]}
      />
      <group position={[-1.605, 1.258, -13.043]} scale={[1.078, 0.514, 0.756]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Esfera_geodésica004.geometry}
          material={new MeshBasicMaterial({color: "green"})}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Esfera_geodésica004_1.geometry}
          material={new MeshBasicMaterial({color: "green"})}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/levelJuly/World.glb')
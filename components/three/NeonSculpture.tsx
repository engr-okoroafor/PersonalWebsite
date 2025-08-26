
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

const NeonSculpture: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 2.2 : 2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color={hovered ? '#d946ef' : '#8b5cf6'}
        emissive={hovered ? '#d946ef' : '#8b5cf6'}
        emissiveIntensity={hovered ? 1.5 : 0.8}
        roughness={0.5}
        metalness={0.1}
        wireframe
      />
    </mesh>
  );
};

export default NeonSculpture;

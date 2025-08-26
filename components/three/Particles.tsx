
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Points } from 'three';

interface ParticlesProps {
    count: number;
}

const Particles: React.FC<ParticlesProps> = ({ count }) => {
  const points = useRef<Points>(null!);

  const particles = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      p[i] = (Math.random() - 0.5) * 25;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#A0A0A9" sizeAttenuation={true} />
    </points>
  );
};

export default Particles;

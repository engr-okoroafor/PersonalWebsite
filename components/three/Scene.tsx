
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import NeonSculpture from './NeonSculpture.tsx';
import Particles from './Particles.tsx';

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />

      <Suspense fallback={null}>
        <NeonSculpture />
        <Particles count={3000} />
      </Suspense>

      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.8} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
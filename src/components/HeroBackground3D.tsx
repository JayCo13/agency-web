'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeTerrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  const planeSize = 40;
  const segments = 60;

  // Create an initial noise map for the terrain so it's not totally flat before animating
  const initialZ = useMemo(() => {
    const count = (segments + 1) * (segments + 1);
    const initialZ = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      initialZ[i] = Math.random() * 0.8;
    }
    return initialZ;
  }, [segments]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (geometryRef.current) {
      const posAttribute = geometryRef.current.getAttribute('position');
      const array = posAttribute.array;

      // Animate vertices to create a flowing wave effect, mimicking a data landscape
      for (let i = 0; i < posAttribute.count; i++) {
        const x = array[i * 3];
        const y = array[i * 3 + 1];

        // Complex sine wave interaction
        const waveX = Math.sin(x * 0.15 + time * 0.4) * 1.5;
        const waveY = Math.cos(y * 0.15 + time * 0.3) * 1.5;

        array[i * 3 + 2] = waveX + waveY + initialZ[i] * 0.5;
      }

      posAttribute.needsUpdate = true;
    }

    // Super slow rotation of the grid
    if (meshRef.current) {
      meshRef.current.rotation.z = time * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2 + 0.2, 0, 0]} position={[0, -1, -8]}>
      <planeGeometry ref={geometryRef} args={[planeSize, planeSize, segments, segments]} />
      <meshBasicMaterial
        color="#0F172A" /* Slate 900 (Deep black) */
        wireframe={true}
        transparent={true}
        opacity={0.12} /* Ultra subtle */
      />
    </mesh>
  );
}

export default function HeroBackground3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 1.5, 5], fov: 75 }}>
        {/* We fade the far distance of the wireframe into solid white to blend with the background */}
        <fog attach="fog" args={['#FFFFFF', 2, 12]} />
        <WireframeTerrain />
      </Canvas>
    </div>
  );
}

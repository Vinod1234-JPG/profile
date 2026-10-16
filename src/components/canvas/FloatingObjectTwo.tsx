"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingObjectProps {
  isMobile?: boolean;
  reducedMotion?: boolean;
}

export function FloatingObjectTwo({ isMobile, reducedMotion }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  // Positioned upper-right / upper-center at a deeper z-depth (-1.4)
  const initialPosition: [number, number, number] = isMobile ? [0.4, 1.4, -1.2] : [1.1, 1.8, -1.2];
  const scale = isMobile ? 0.65 : 0.95;

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();
    
    // Independent timing and offset
    const floatY = Math.sin(t * 0.6 + 1.8) * 0.22;
    const driftZ = Math.cos(t * 0.45 + 0.5) * 0.12;

    meshRef.current.position.y = initialPosition[1] + floatY;
    meshRef.current.position.z = initialPosition[2] + driftZ;

    // Elegant rolling tumble rotation
    meshRef.current.rotation.x += delta * 0.22;
    meshRef.current.rotation.y += delta * 0.14;
    meshRef.current.rotation.z += delta * 0.08;

    // Subtle scale breathing out of phase with Object 1
    const s = scale * (1 + Math.sin(t * 0.9 + 2) * 0.025);
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <mesh
      ref={meshRef}
      position={initialPosition}
      scale={scale}
      castShadow
      receiveShadow
    >
      {/* Refined glass torus structure */}
      <torusGeometry args={[0.9, 0.32, 36, 72]} />
      <meshPhysicalMaterial
        color="#f8fafc"
        roughness={0.03}
        metalness={0.02}
        transmission={0.88}
        thickness={1.8}
        ior={1.42}
        reflectivity={0.95}
        clearcoat={1.0}
        clearcoatRoughness={0.05}
        attenuationColor="#60a5fa"
        attenuationDistance={2.5}
        sheen={0.4}
        sheenColor="#c084fc"
      />
    </mesh>
  );
}

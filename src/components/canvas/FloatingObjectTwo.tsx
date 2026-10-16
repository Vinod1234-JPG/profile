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
  // Positioned upper-right / upper-center at deeper depth
  const initialPosition: [number, number, number] = isMobile ? [0.4, 1.4, -1.0] : [0.95, 1.7, -1.0];
  const scale = isMobile ? 0.65 : 0.95;

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();
    
    // Slow floating movement out of phase with Object 1
    const floatY = Math.sin(t * 0.58 + 2.0) * 0.2;
    const driftZ = Math.cos(t * 0.42 + 1.0) * 0.12;

    meshRef.current.position.y = initialPosition[1] + floatY;
    meshRef.current.position.z = initialPosition[2] + driftZ;

    // Gentle continuous rotation
    meshRef.current.rotation.x += delta * 0.22;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z += delta * 0.08;

    // Subtle scale breathing
    const s = scale * (1 + Math.sin(t * 0.85 + 1.5) * 0.02);
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
      {/* Smooth glass torus structure */}
      <torusGeometry args={[0.9, 0.32, 36, 72]} />
      <meshPhysicalMaterial
        color="#ffffff"
        roughness={0.05}
        metalness={0.05}
        transmission={0.88}
        thickness={2.2}
        ior={1.48}
        reflectivity={0.98}
        clearcoat={1.0}
        clearcoatRoughness={0.04}
        attenuationColor="#38bdf8"
        attenuationDistance={1.8}
        sheen={0.5}
        sheenColor="#818cf8"
        specularColor="#ffffff"
        specularIntensity={1.2}
      />
    </mesh>
  );
}

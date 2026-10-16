"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingObjectProps {
  isMobile?: boolean;
  reducedMotion?: boolean;
}

export function FloatingObjectOne({ isMobile, reducedMotion }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition: [number, number, number] = isMobile ? [0.6, -0.2, -0.5] : [1.7, 0.1, 0];
  const scale = isMobile ? 0.9 : 1.35;

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();
    
    // Slow organic floating on Y axis
    const floatY = Math.sin(t * 0.75) * 0.18;
    // Gentle horizontal drift
    const driftX = Math.cos(t * 0.5) * 0.08;
    
    meshRef.current.position.y = initialPosition[1] + floatY;
    meshRef.current.position.x = initialPosition[0] + driftX;

    // Smooth multi-axis rotation
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.26;
    meshRef.current.rotation.z = Math.sin(t * 0.4) * 0.12;

    // Subtle organic breathing scale
    const breathingScale = scale * (1 + Math.sin(t * 1.2) * 0.02);
    meshRef.current.scale.set(breathingScale, breathingScale, breathingScale);
  });

  return (
    <mesh
      ref={meshRef}
      position={initialPosition}
      scale={scale}
      castShadow
      receiveShadow
    >
      {/* High-fidelity smooth sphere */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color="#ffffff"
        roughness={0.08}
        metalness={0.05}
        clearcoat={1.0}
        clearcoatRoughness={0.08}
        transmission={0.45}
        thickness={1.5}
        ior={1.48}
        reflectivity={0.9}
        sheen={0.6}
        sheenColor="#93c5fd"
        specularColor="#ffffff"
        specularIntensity={1.0}
      />
    </mesh>
  );
}

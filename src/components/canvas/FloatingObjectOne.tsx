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
  // Positioned prominently on the right side of the hero section
  const initialPosition: [number, number, number] = isMobile ? [0.6, -0.1, -0.4] : [1.65, 0.05, 0.2];
  const scale = isMobile ? 0.95 : 1.35;

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();
    
    // Smooth organic floating on Y axis
    const floatY = Math.sin(t * 0.75) * 0.16;
    // Gentle horizontal drift
    const driftX = Math.cos(t * 0.5) * 0.07;
    
    meshRef.current.position.y = initialPosition[1] + floatY;
    meshRef.current.position.x = initialPosition[0] + driftX;

    // Subtle animated rotation around vertical and horizontal axes
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.24;
    meshRef.current.rotation.z = Math.sin(t * 0.35) * 0.1;

    // Subtle breathing scale variation
    const breathingScale = scale * (1 + Math.sin(t * 1.1) * 0.02);
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
      {/* High-fidelity smooth glossy sphere */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color="#2b2d42"
        roughness={0.12}
        metalness={0.35}
        clearcoat={1.0}
        clearcoatRoughness={0.06}
        reflectivity={0.95}
        sheen={1.0}
        sheenColor="#818cf8"
        specularColor="#ffffff"
        specularIntensity={1.2}
      />
    </mesh>
  );
}

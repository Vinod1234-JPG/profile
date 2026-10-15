"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingObjectProps {
  isMobile?: boolean;
  reducedMotion?: boolean;
}

export function FloatingObjectThree({ isMobile, reducedMotion }: FloatingObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Lower-right placement, brought closer to foreground in Z (+0.6)
  const centerPosition: [number, number, number] = isMobile ? [0.7, -1.3, 0.2] : [2.2, -1.2, 0.7];
  const scale = isMobile ? 0.45 : 0.65;

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();

    // Gentle orbital movement around its center anchor
    const orbitRadius = 0.16;
    const orbitSpeed = 0.85;
    groupRef.current.position.x = centerPosition[0] + Math.cos(t * orbitSpeed) * orbitRadius;
    groupRef.current.position.y = centerPosition[1] + Math.sin(t * orbitSpeed * 1.3) * (orbitRadius * 0.7);
    groupRef.current.position.z = centerPosition[2] + Math.sin(t * orbitSpeed * 0.8) * (orbitRadius * 0.5);

    // Dynamic faceted rotation catching studio lights
    meshRef.current.rotation.x += delta * 0.45;
    meshRef.current.rotation.y += delta * 0.65;
    meshRef.current.rotation.z += delta * 0.3;
  });

  return (
    <group ref={groupRef} position={centerPosition}>
      <mesh
        ref={meshRef}
        scale={scale}
        castShadow
        receiveShadow
      >
        {/* Faceted crystal geometry */}
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#18181b"
          roughness={0.15}
          metalness={0.92}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={1.0}
          flatShading={true}
          emissive="#27272a"
          emissiveIntensity={0.2}
          sheen={0.8}
          sheenColor="#fbbf24"
        />
      </mesh>
    </group>
  );
}

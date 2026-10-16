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
  
  // Positioned lower-right, in the closer foreground
  const centerPosition: [number, number, number] = isMobile ? [0.75, -1.25, 0.3] : [2.25, -1.15, 0.8];
  const scale = isMobile ? 0.45 : 0.65;

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();

    // Gentle orbital movement around its anchor center
    const orbitRadius = 0.18;
    const orbitSpeed = 0.75;
    groupRef.current.position.x = centerPosition[0] + Math.cos(t * orbitSpeed) * orbitRadius;
    groupRef.current.position.y = centerPosition[1] + Math.sin(t * orbitSpeed * 1.2) * (orbitRadius * 0.75);
    groupRef.current.position.z = centerPosition[2] + Math.sin(t * orbitSpeed * 0.8) * (orbitRadius * 0.5);

    // Independent multi-axis rotation catching studio highlights
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.55;
    meshRef.current.rotation.z += delta * 0.25;
  });

  return (
    <group ref={groupRef} position={centerPosition}>
      <mesh
        ref={meshRef}
        scale={scale}
        castShadow
        receiveShadow
      >
        {/* Faceted crystal / jewel geometry */}
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#0f172a"
          roughness={0.15}
          metalness={0.92}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          reflectivity={1.0}
          flatShading={true}
          emissive="#312e81"
          emissiveIntensity={0.35}
          sheen={1.0}
          sheenColor="#38bdf8"
        />
      </mesh>
    </group>
  );
}

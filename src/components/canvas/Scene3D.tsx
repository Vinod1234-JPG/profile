"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { FloatingObjectOne } from "./FloatingObjectOne";
import { FloatingObjectTwo } from "./FloatingObjectTwo";
import { FloatingObjectThree } from "./FloatingObjectThree";

export function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [reducedMotion, setReducedMotion] = useState(false);
  const scrollRef = useRef(0);

  const isMobile = viewport.width < 5.5;

  useEffect(() => {
    // Respect reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    // Track scroll
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      // Parallax interaction responding smoothly to pointer
      const targetX = (state.pointer.x * viewport.width) * 0.04;
      const targetY = (state.pointer.y * viewport.height) * 0.04;

      // Scroll interaction: subtle tilt & shift as page scrolls down
      const scrollFactor = Math.min(scrollRef.current / 600, 1.5);
      const scrollYOffset = -scrollFactor * 0.4;
      const scrollRotX = scrollFactor * 0.15;

      // Smooth dampening
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY + scrollYOffset, 3.5, delta);
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, state.pointer.x * 0.12, 3.5, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -state.pointer.y * 0.1 + scrollRotX, 3.5, delta);
    }
  });

  return (
    <>
      {/* Studio Lighting Setup */}
      <ambientLight intensity={0.8} />
      
      {/* Primary Key Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={2.2}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      
      {/* Soft Fill Light */}
      <directionalLight
        position={[-5, 4, 3]}
        intensity={1.0}
        color="#fef08a" // subtle warm glow
      />

      {/* Rim / Accent Light */}
      <directionalLight
        position={[0, -5, -4]}
        intensity={1.5}
        color="#818cf8" // subtle indigo rim light
      />

      {/* Soft Point Highlight */}
      <pointLight position={[3, 3, 2]} intensity={1.2} color="#38bdf8" distance={8} />

      {/* Realistic Environment Reflections */}
      <Environment preset="city" />

      {/* Master 3D Group containing all 3 objects */}
      <group ref={groupRef}>
        {/* Object 1: Primary Hero Object */}
        <FloatingObjectOne isMobile={isMobile} reducedMotion={reducedMotion} />

        {/* Object 2: Secondary Floating Glass Torus */}
        <FloatingObjectTwo isMobile={isMobile} reducedMotion={reducedMotion} />

        {/* Object 3: Tertiary Faceted Metallic Crystal */}
        <FloatingObjectThree isMobile={isMobile} reducedMotion={reducedMotion} />
      </group>

      {/* Grounded Soft Contact Shadows */}
      <ContactShadows
        position={[1.5, -2.5, 0]}
        opacity={0.35}
        scale={8}
        blur={2.4}
        far={4.5}
      />
    </>
  );
}

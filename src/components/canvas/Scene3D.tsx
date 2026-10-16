"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { FloatingObjectOne } from "./FloatingObjectOne";
import { FloatingObjectTwo } from "./FloatingObjectTwo";
import { FloatingObjectThree } from "./FloatingObjectThree";

export function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [reducedMotion, setReducedMotion] = useState(false);
  const scrollRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  const isMobile = viewport.width < 5.5;

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    // Track scroll
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Track mouse position across whole window for fluid desktop parallax
    const onPointerMove = (e: PointerEvent) => {
      // Normalize to [-1, 1]
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      // Parallax interaction responding smoothly to mouse movement
      const targetX = (pointerRef.current.x * viewport.width) * 0.05;
      const targetY = (pointerRef.current.y * viewport.height) * 0.05;

      // Scroll interaction: subtle tilt & shift as page scrolls down
      const scrollFactor = Math.min(scrollRef.current / 600, 1.5);
      const scrollYOffset = -scrollFactor * 0.35;
      const scrollRotX = scrollFactor * 0.12;

      // Smooth dampening
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY + scrollYOffset, 3.5, delta);
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, pointerRef.current.x * 0.15, 3.5, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -pointerRef.current.y * 0.12 + scrollRotX, 3.5, delta);
    }
  });

  return (
    <>
      {/* Studio Lighting Rig — 100% self-contained, 0ms load delay */}
      <ambientLight intensity={1.2} />

      {/* Hemisphere Light for soft sky/ground ambient bounce */}
      <hemisphereLight
        args={["#ffffff", "#e2e8f0", 0.9]}
      />
      
      {/* Primary Key Light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={2.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      
      {/* Soft Warm Fill Light */}
      <directionalLight
        position={[-6, 4, 3]}
        intensity={1.4}
        color="#fef3c7"
      />

      {/* Cool Rim / Back Light for sharp silhouette highlights */}
      <directionalLight
        position={[0, -4, -5]}
        intensity={2.0}
        color="#818cf8"
      />

      {/* High-intensity Specular Accent Light */}
      <pointLight position={[3, 2, 3]} intensity={2.2} color="#38bdf8" distance={10} />
      <pointLight position={[-2, -2, 2]} intensity={1.5} color="#c084fc" distance={8} />

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
        position={[1.65, -2.5, 0]}
        opacity={0.4}
        scale={8.5}
        blur={2.2}
        far={4.5}
      />
    </>
  );
}

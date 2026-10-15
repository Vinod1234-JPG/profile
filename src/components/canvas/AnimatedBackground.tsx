"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { Scene3D } from "./Scene3D";

// Fallback for when WebGL is unavailable or during SSR
function CanvasFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elegant CSS gradient shapes simulating the 3D objects */}
      <div className="absolute top-[25%] right-[15%] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-indigo-200/40 via-sky-100/50 to-white/80 blur-xl opacity-80 animate-pulse" />
      <div className="absolute top-[12%] right-[30%] w-[180px] h-[180px] rounded-full border-[20px] border-white/60 backdrop-blur-md opacity-60" />
      <div className="absolute bottom-[20%] right-[10%] w-[140px] h-[140px] rotate-45 bg-zinc-800/10 backdrop-blur-sm border border-black/10" />
    </div>
  );
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Detect WebGL capability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebglSupported(Boolean(gl));
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!mounted) {
    return <CanvasFallback />;
  }

  if (!webglSupported) {
    return <CanvasFallback />;
  }

  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={[1, 1.5]} // Performance optimized DPR
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: true,
          }}
          className="w-full h-full pointer-events-none"
        >
          <Scene3D />
        </Canvas>
      </Suspense>
    </div>
  );
}

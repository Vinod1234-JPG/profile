"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Monitor, Box, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/canvas/AnimatedBackground";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-36 pb-12 overflow-hidden bg-[#fdfdfd]"
    >
      {/* Subtle Studio Ambient Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] bg-[#ffedd5] rounded-full mix-blend-multiply filter blur-[120px] opacity-45 animate-blob" />
        <div className="absolute top-[15%] -right-[10%] w-[50vw] h-[50vw] bg-[#f5d0fe] rounded-full mix-blend-multiply filter blur-[130px] opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] bg-[#ffe4e6] rounded-full mix-blend-multiply filter blur-[140px] opacity-35 animate-blob animation-delay-4000" />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-6000" />
      </div>

      {/* Exactly Three Animated Floating 3D Objects */}
      <AnimatedBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-left lg:pr-8"
          >
            {/* Greeting / Brand Label */}
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-black/50 uppercase">
                INNOVATION // DIGITAL SYSTEMS & PRODUCTS
              </span>
              <div className="w-12 h-[2px] bg-black/40" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter text-black leading-[1.05]" style={{ fontFamily: "var(--font-playfair)" }}>
              Building the Future <br className="hidden md:block" />
              Through Innovation. <br />
              <span className="text-black/60 font-sans font-extrabold text-3xl sm:text-4xl md:text-[50px] tracking-tight block mt-3">
                Engineered for impact.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-black/70 max-w-xl leading-relaxed font-normal pt-2">
              We combine intentional design, cutting-edge software architecture, and intelligent 3D digital experiences to help ambitious businesses innovate and move forward.
            </p>

            {/* Primary & Secondary Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="#projects"
                className="flex items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowDownRight size={24} className="text-black" />
                </div>
                <span className="text-sm font-semibold tracking-widest text-black/70 uppercase group-hover:text-black transition-colors">
                  Explore Our Work
                </span>
              </Link>
              
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full border-2 border-black/10 bg-transparent hover:bg-black/5 text-black font-semibold text-sm tracking-widest uppercase transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3D Visual Stage + Outer Ambient Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0 min-h-[460px] lg:min-h-[560px]"
          >
            <div className="relative w-full max-w-[500px] h-[460px] lg:h-[540px] flex items-center justify-center pointer-events-none">
              
              {/* Center subtle interactive glow indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto"
              >
                <div className="bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/10 flex items-center gap-2 shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                    Real-time 3D • Interactive Parallax
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[8%] -left-[4%] md:-left-[2%] z-20 pointer-events-auto"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Monitor size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">UI/UX Architecture</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Top Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-[12%] -right-[4%] md:right-0 z-20 pointer-events-auto"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Box size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">Product Strategy</span>
                </div>
              </motion.div>

              {/* Floating Badge 3 (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[16%] -left-[6%] md:-left-[4%] z-20 pointer-events-auto"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Code2 size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">Engineering Systems</span>
                </div>
              </motion.div>

              {/* Floating Badge 4 (Middle Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-[28%] -right-[8%] md:-right-[2%] z-20 pointer-events-auto"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Sparkles size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">3D Spatial Motion</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

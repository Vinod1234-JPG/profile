"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Box, Code2, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-36 pb-12 overflow-hidden bg-[#050505]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#f97316] rounded-full blur-[180px] opacity-[0.12] pointer-events-none parallax-slow" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-7 text-left lg:pr-8"
          >
            {/* Greeting */}
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-muted uppercase">
                Hello, I'm
              </span>
              <div className="w-12 h-[2px] bg-accent" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-accent">Vinod Patel</span> —<br />
              I build digital products<br />
              that make an impact.
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed font-normal pt-2">
              I’m a passionate UI/UX designer and front-end developer who loves turning ideas into meaningful digital experiences. I focus on clean design, smooth interactions and products that solve real problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-accent text-black font-semibold text-sm md:text-base flex items-center gap-2 hover:brightness-110 shadow-lg shadow-accent/20 transition-all duration-300"
              >
                View My Work
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </Link>
              
              <Link
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-white font-medium text-sm md:text-base transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Portrait + Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[550px] aspect-square flex items-end justify-center">
              
              {/* Intense orange rim light immediately behind portrait */}
              <div className="absolute inset-0 bg-[#f97316] rounded-full blur-[100px] opacity-20 pointer-events-none" />

              {/* Portrait */}
              <div className="relative z-10 w-[85%] h-[95%]">
                <Image 
                  src="/hero-image.png"
                  alt="Vinod Patel - Designer / Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 500px"
                  className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(249,115,22,0.15)]"
                />
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[20%] -left-[10%] md:-left-[5%] z-20"
              >
                <div className="glass px-4 py-2.5 rounded-full border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-xl bg-[#0a0a0a]/60">
                  <Monitor size={16} className="text-accent" />
                  <span className="text-sm font-medium text-white/90">UI/UX Design</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Top Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-[25%] -right-[5%] md:right-0 z-20"
              >
                <div className="glass px-4 py-2.5 rounded-full border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-xl bg-[#0a0a0a]/60">
                  <Box size={16} className="text-accent" />
                  <span className="text-sm font-medium text-white/90">Product Strategy</span>
                </div>
              </motion.div>

              {/* Floating Badge 3 (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[35%] -left-[15%] md:-left-[10%] z-20"
              >
                <div className="glass px-4 py-2.5 rounded-full border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-xl bg-[#0a0a0a]/60">
                  <Code2 size={16} className="text-accent" />
                  <span className="text-sm font-medium text-white/90">Web Development</span>
                </div>
              </motion.div>

              {/* Floating Badge 4 (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-[25%] -right-[15%] md:-right-[5%] z-20"
              >
                <div className="glass px-4 py-2.5 rounded-full border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-xl bg-[#0a0a0a]/60">
                  <PenTool size={16} className="text-accent" />
                  <span className="text-sm font-medium text-white/90">Brand Design</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

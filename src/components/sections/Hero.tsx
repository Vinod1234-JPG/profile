"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Monitor, Box, Code2, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-36 pb-12 overflow-hidden bg-[#fdfdfd]"
    >
      {/* Massive Vibrant Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-[#ffc875] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-[#f2a8ff] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] bg-[#ff5e7e] rounded-full mix-blend-multiply filter blur-[130px] opacity-60 animate-blob animation-delay-4000" />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] bg-[#a8c6ff] rounded-full mix-blend-multiply filter blur-[110px] opacity-60 animate-blob animation-delay-6000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-left lg:pr-8"
          >
            {/* Greeting */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold tracking-[0.2em] text-black/60 uppercase">
                HELLO, I'M
              </span>
              <div className="w-12 h-[2px] bg-black/60" />
            </div>

            {/* Main Headline - Serif */}
            <h1 className="text-6xl sm:text-7xl md:text-[88px] font-black tracking-tighter text-black leading-[1.05]" style={{ fontFamily: "var(--font-playfair)" }}>
              Hi, I'm <br className="hidden md:block" />
              Vinod Patel —<br />
              <span className="text-black/80">I build digital products<br />that make an impact.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-black/70 max-w-xl leading-relaxed font-normal pt-2">
              I’m a passionate UI/UX designer and front-end developer who loves turning ideas into meaningful digital experiences. I focus on clean design, smooth interactions and products that solve real problems.
            </p>

            {/* Buttons matching Fig 2 */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <Link
                href="#projects"
                className="flex items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowDownRight size={24} className="text-black" />
                </div>
                <span className="text-sm font-semibold tracking-widest text-black/60 uppercase group-hover:text-black transition-colors">
                  View My Work
                </span>
              </Link>
              
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full border-2 border-black/10 bg-transparent hover:bg-black/5 text-black font-semibold text-sm tracking-widest uppercase transition-all duration-300"
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
            className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[500px] aspect-square flex items-end justify-center">
              
              {/* Portrait */}
              <div className="relative z-10 w-[95%] h-[95%]">
                <Image 
                  src="/hero-image.png"
                  alt="Vinod Patel - Designer / Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 500px"
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[20%] -left-[10%] md:-left-[5%] z-20"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <Monitor size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">UI/UX Design</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Top Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-[25%] -right-[5%] md:right-0 z-20"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <Box size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">Product Strategy</span>
                </div>
              </motion.div>

              {/* Floating Badge 3 (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[35%] -left-[15%] md:-left-[10%] z-20"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <Code2 size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">Web Development</span>
                </div>
              </motion.div>

              {/* Floating Badge 4 (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-[25%] -right-[15%] md:-right-[5%] z-20"
              >
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/10 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <PenTool size={16} className="text-black" />
                  <span className="text-sm font-bold text-black/80">Brand Design</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

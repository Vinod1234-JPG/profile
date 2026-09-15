"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col pt-32 pb-10 overflow-hidden bg-[#050505]"
    >
      {/* Purple Glowing Backgrounds */}
      <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#6d28d9] rounded-full blur-[150px] opacity-40 pointer-events-none mix-blend-screen" />
      <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[60vw] bg-[#7c3aed] rounded-full blur-[180px] opacity-30 pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col items-center justify-start relative z-10 text-center mt-12">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-5xl"
        >
          Hi, I'm Vinod Patel. <br />
          I build digital products <span className="text-white/40">that make an impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-12 font-medium"
        >
          Visualize, communicate, and iterate on wireframes and prototypes in minutes. Empower your product team with professional design and development!
        </motion.p>

        {/* Search Bar style CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl bg-white rounded-xl p-1.5 flex items-center shadow-[0_0_40px_rgba(124,58,237,0.3)] mb-20"
        >
          <input 
            type="text" 
            placeholder="A portfolio website for a freelance developer..." 
            className="flex-grow bg-transparent px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none font-medium"
            disabled
          />
          <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
            <Sparkles size={18} />
            Generate
          </button>
        </motion.div>

        {/* Image / Showcase container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-5xl relative overflow-visible mt-10"
        >
          {/* User's portrait floating freely */}
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mx-auto z-10">
              <Image 
                src="/hero-image.png"
                alt="Vinod Patel"
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-contain drop-shadow-2xl z-10 rounded-3xl"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

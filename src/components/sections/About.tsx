"use client";

import { motion } from "framer-motion";
import { ArrowRight, LineChart, BookOpen } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background glow — parallax */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none parallax-slow" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 sticky-header pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Label */}
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
                01 // ABOUT ME
              </span>
              
              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-8">
                <span className="text-white block">I don't just write</span>
                <span className="text-white block mb-2">code.</span>
                <span className="text-white/40 block">I build systems.</span>
              </h2>
              
              {/* Sub-text with UI Accent */}
              <div className="flex gap-6 max-w-sm mt-12">
                {/* Circular UI Element */}
                <div className="mt-1.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-accent relative">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                {/* Paragraph */}
                <p className="text-base text-white/60 leading-relaxed font-medium">
                  Bridging the gap between engineering and design to create products that scale.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Bio & Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#111111] rounded-[32px] p-8 md:p-10 md:px-12 border border-white/5"
            >
              <div className="space-y-8">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                  <BookOpen size={20} strokeWidth={1.5} />
                </div>
                
                {/* Paragraphs */}
                <div className="space-y-8 text-base text-white/60 leading-[1.8] font-normal">
                  <p>
                    I'm a Computer Science & Engineering student pursuing my Bachelor of Engineering at Maharaja Institute of Technology, Mysore, currently maintaining a <strong className="text-accent font-semibold">8.0 CGPA</strong>.
                  </p>
                  <p>
                    Beyond academics, I'm a software developer and product builder with hands-on experience in full-stack development, ERP systems, SaaS platforms, AI, and research-oriented technology.
                  </p>
                  <p>
                    I've built and contributed to real-world platforms including a multi-tenant No Due Clearance system, an engineering-college ERP, a placement management platform, and a research management system under MRF. I've also explored offline AI education through ENILS and collaborative 3D mapping for disaster-response applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: YVB&Co */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="bg-[#111111] rounded-[32px] p-8 md:p-10 md:px-12 border border-white/5 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent">
                    <LineChart size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">YVB&Co</h3>
                    <p className="text-[10px] text-accent uppercase tracking-widest font-bold mt-1">Partner Studio</p>
                  </div>
                </div>
                {/* Role Badge */}
                <div className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-xs text-white/60 font-medium">
                  Role: COP
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Engineer your vision.
                </h4>
                
                <p className="text-white/60 text-base leading-[1.8] mb-8 font-normal">
                  YVB&Co is an independent technology studio based in India. We're a team of six engineers and designers building websites, apps, ERP systems, and tools around the way businesses actually work.
                </p>
                
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors group"
                >
                  Work with us 
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

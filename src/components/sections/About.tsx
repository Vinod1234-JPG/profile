"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, LineChart, BookOpen, Rocket } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-32 relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                01 // About Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                I don't just write code. <br />
                <span className="text-white/30">I build systems.</span>
              </h2>
              <p className="text-lg text-muted max-w-md">
                Bridging the gap between engineering and design to create products that scale.
              </p>
            </motion.div>
          </div>

          {/* Right Content / Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="group relative glass rounded-3xl p-8 md:p-10 overflow-hidden cursor-none md:cursor-pointer border border-white/10"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(124, 58, 237, 0.08), transparent 40%)'
                }}
              />

              <div className="relative z-10 space-y-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <BookOpen size={24} />
                </div>
                
                <div className="space-y-6 text-lg text-white/70 leading-relaxed font-medium">
                  <p>
                    I'm a Computer Science & Engineering student pursuing my Bachelor of Engineering at Maharaja Institute of Technology, Mysore, currently maintaining a <strong className="text-accent">9.05 CGPA</strong>.
                  </p>
                  <p>
                    Beyond academics, I'm a software developer and product builder with hands-on experience in full-stack development, ERP systems, SaaS platforms, AI, and research-oriented technology.
                  </p>
                  <p className="text-base text-muted">
                    I've built and contributed to real-world platforms including a multi-tenant No Due Clearance system, an engineering-college ERP, a placement management platform, and a research management system under MRF. I've also explored offline AI education through ENILS and collaborative 3D mapping for disaster-response applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* YVB&Co Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="group relative glass rounded-3xl p-8 md:p-10 overflow-hidden cursor-none md:cursor-pointer border border-accent/20"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(124, 58, 237, 0.15), transparent 40%)'
                }}
              />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <LineChart size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">YVB&Co</h3>
                      <p className="text-xs text-accent uppercase tracking-widest font-semibold mt-1">Partner Studio</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 font-medium">
                    Role: COP
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                  Engineer your vision.
                </h4>
                
                <p className="text-muted mb-8 leading-relaxed">
                  YVB&Co is an independent technology studio based in India. We're a team of six engineers and designers building websites, apps, ERP systems, and tools around the way businesses actually work.
                </p>
                
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors"
                >
                  Work with us <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

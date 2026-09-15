"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Rocket, FolderGit2, Users, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    icon: Rocket,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: FolderGit2,
    value: "20+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "10+",
    label: "Happy Clients",
  },
  {
    icon: Code2,
    value: "100%",
    label: "Passion for What I Do",
  },
];

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Warm Golden / Orange Ambient Glow behind the constellation and portrait */}
      <div className="absolute top-[15%] right-[5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-[#f97316] rounded-full blur-[160px] opacity-15 pointer-events-none" />
      <div className="absolute top-[35%] right-[20%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-[#fb923c] rounded-full blur-[130px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Tagline */}
            <span className="text-accent text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
              DESIGNER &nbsp;/&nbsp; DEVELOPER &nbsp;/&nbsp; FOUNDER
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Hi, I'm <span className="text-accent">Vinod Patel</span> <br />
              I build digital products that make an impact.
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-normal pt-2">
              I'm a designer and developer who loves turning ideas into simple, useful and beautiful products. 
              Currently building, learning and exploring new opportunities in tech and design.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-accent text-black font-semibold text-sm md:text-base flex items-center gap-2.5 hover:brightness-110 shadow-lg shadow-accent/25 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              
              <Link
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-accent/40 bg-accent/5 hover:bg-accent/15 text-white font-medium text-sm md:text-base flex items-center gap-2.5 transition-all duration-300"
              >
                Get In Touch
                <Mail size={18} className="text-accent" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Portrait + Constellation + Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[620px] aspect-[644/519]">
              <Image 
                src="/hero-portrait-glow.png"
                alt="Vinod Patel - Designer / Developer / Founder"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 md:mt-20 rounded-2xl md:rounded-3xl border border-white/10 bg-[#141416]/60 backdrop-blur-xl px-6 md:px-12 py-6 md:py-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className={`flex items-center gap-4 ${idx !== 0 ? "pt-4 md:pt-0 md:pl-8" : ""}`}
                >
                  <div className="text-accent shrink-0">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/50 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

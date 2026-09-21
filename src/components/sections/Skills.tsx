"use client";

import { motion } from "framer-motion";
import { Code2, Database, Sparkles, PenTool, Video, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Engineering & Architecture",
    icon: Code2,
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Python", "C++", "System Design"],
    description: "Building scalable frontend applications and robust backend architectures."
  },
  {
    title: "Data & Infrastructure",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "TypeORM", "REST APIs", "JWT", "Authentication"],
    description: "Designing secure databases and efficient API integrations."
  },
  {
    title: "AI & Emerging Tech",
    icon: Sparkles,
    skills: ["Local LLMs", "Edge AI", "Speech-to-Text", "Prompt Engineering", "Ollama"],
    description: "Integrating modern machine learning capabilities into production products."
  },
  {
    title: "Product Design",
    icon: PenTool,
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Figma"],
    description: "Creating intuitive, accessible, and highly-polished user interfaces."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background glow — subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none parallax-slow" />

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
                02 // CAPABILITIES
              </span>
              
              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-8">
                <span className="text-white block">Full-stack</span>
                <span className="text-white/40 block">expertise.</span>
              </h2>
              
              {/* Sub-text with UI Accent */}
              <div className="flex gap-6 max-w-sm mt-12">
                <div className="mt-1.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-accent relative">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <p className="text-base text-white/60 leading-relaxed font-medium">
                  A comprehensive toolkit spanning from systems architecture to pixel-perfect interface design.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="lg:col-span-7 space-y-4">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * idx }}
                className="bg-[#111111] rounded-[24px] p-8 md:px-10 border border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon Container */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                    <category.icon size={20} strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight mb-2">{category.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{category.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Database, Sparkles, PenTool } from "lucide-react";

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
    <section id="skills" className="py-32 relative bg-transparent overflow-hidden">

      <div className="absolute top-0 left-[10%] w-[50vw] h-[50vw] bg-[#f2a8ff] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 pointer-events-none parallax-slow" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 sticky-header pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-black/50 text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
                02 // CAPABILITIES
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.05] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                <span className="text-black block">Full-stack</span>
                <span className="text-black/30 block">expertise.</span>
              </h2>
              
              <div className="flex gap-6 max-w-sm mt-12">
                <div className="mt-1.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-black/20 relative">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-base text-black/60 leading-relaxed font-medium">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white/60 backdrop-blur-xl rounded-[24px] p-8 md:px-10 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/60">
                    <category.icon size={20} strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-black tracking-tight mb-2">{category.title}</h3>
                      <p className="text-sm text-black/60 leading-relaxed">{category.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 rounded-full bg-black/5 text-xs font-semibold text-black/70"
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

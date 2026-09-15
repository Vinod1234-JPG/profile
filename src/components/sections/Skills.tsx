"use client";

import { motion } from "framer-motion";
import { Code2, Database, Sparkles, PenTool, Video } from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "NestJS"],
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "TypeORM", "REST APIs", "JWT", "Authentication", "RBAC"],
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "AI & Emerging Tech",
    icon: Sparkles,
    skills: ["Local AI", "Small Language Models", "Edge AI", "Speech-to-Text", "Text-to-Speech", "Prompt Engineering", "Ollama", "Whisper", "Raspberry Pi"],
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Design",
    icon: PenTool,
    skills: ["UI/UX", "Product Design", "Dashboard Design", "Responsive Design", "Visual Design", "Workflow Design"],
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Creative",
    icon: Video,
    skills: ["Video Editing", "YouTube", "Technical Content", "Screen Recording", "Visual Storytelling", "Motion Graphics"],
    colSpan: "md:col-span-3 lg:col-span-3"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            02 // Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Tools, technologies, <br className="hidden md:block" />
            <span className="text-white/40">and creative disciplines.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative glass rounded-3xl p-8 overflow-hidden cursor-none md:cursor-pointer border border-white/10 ${category.colSpan}`}
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
                    background: 'radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(124, 58, 237, 0.1), transparent 40%)'
                  }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent transition-all duration-500 text-white/60">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-sm text-white/70 backdrop-blur-md transition-colors group-hover:border-white/10"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

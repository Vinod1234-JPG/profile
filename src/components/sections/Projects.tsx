"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "No-Due Portal",
    subtitle: "No Due Clearance Management System",
    description: "Multi-tenant SaaS that digitizes student No Due Certificate workflows, connecting faculty, coordinators, library, accounts, HODs, and administration with automated dues, payments, approvals, and PDF certificates.",
    tags: ["Full Stack", "SaaS", "Next.js"],
    featured: true
  },
  {
    id: "02",
    title: "AcadOps ERP",
    subtitle: "Engineering College ERP",
    description: "Governance-focused ERP for managing admissions, academics, attendance, internal assessments, examinations, mentorship, results, role-based access, and institutional workflows.",
    tags: ["ERP", "Backend", "React"],
    featured: false
  },
  {
    id: "03",
    title: "MITM PlacePro",
    subtitle: "Placement Management Platform",
    description: "Full-stack placement platform connecting students, placement administrators, and companies through job drives, assessments, interviews, feedback, recruitment workflows, and analytics.",
    tags: ["Full Stack", "Platform"],
    featured: false
  },
  {
    id: "04",
    title: "MRF",
    subtitle: "Research Management Platform",
    description: "Digital research administration platform supporting the academic research lifecycle—from candidate registration and supervisor allocation to RAC reviews, progress reports, publications, examinations, and graduation.",
    tags: ["Research", "SaaS"],
    featured: false
  },
  {
    id: "05",
    title: "ENILS",
    subtitle: "Edge-Native Interactive Learning System (Upcoming)",
    description: "Offline AI tutoring system designed for schools with limited connectivity. Uses local speech recognition, AI, and text-to-speech to provide voice-based learning without requiring the internet.",
    tags: ["AI", "Edge Computing", "Speech-to-Text"],
    featured: true
  },
  {
    id: "06",
    title: "Disaster Management",
    subtitle: "Collaborative 3D Mapping (Upcoming)",
    description: "Hackathon project exploring how ordinary smartphones can work together to capture videos and generate navigable 3D environments for emergency response and situational awareness.",
    tags: ["Hackathon", "3D", "Mobile"],
    featured: false
  },
  {
    id: "07",
    title: "UniConv",
    subtitle: "File Conversion & Manipulation SaaS",
    description: "A web-based utility platform focused on simplifying file conversion and manipulation through a modern digital workflow.",
    tags: ["Utility", "SaaS", "Web"],
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-[#010101]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">
              04 // Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Building systems that <br className="hidden md:block" />
              <span className="text-muted">solve real-world problems.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, idx) => {
            // Logic for spanning: featured projects take more width in large screens
            const spanClass = project.featured ? "lg:col-span-8" : "lg:col-span-4";
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className={`group relative glass rounded-2xl overflow-hidden flex flex-col cursor-none md:cursor-pointer ${spanClass}`}
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
                    background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(249, 115, 22, 0.15), transparent 40%)'
                  }}
                />

                {/* Abstract Preview Image / Placeholder */}
                <div className="w-full h-64 md:h-80 bg-zinc-900 relative overflow-hidden flex items-center justify-center p-8 z-10">
                  {/* Subtle Gradient Glow inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Typographic placeholder since no images exist */}
                  <h3 className="text-4xl md:text-5xl font-bold text-white/5 tracking-tighter uppercase text-center group-hover:scale-110 group-hover:text-white/10 transition-all duration-700">
                    {project.title}
                  </h3>

                  {/* Corner Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center -translate-y-4 translate-x-4 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out border border-white/20">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow border-t border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono text-muted">{project.id}</span>
                    <div className="h-px bg-white/10 flex-grow" />
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs text-accent px-2 py-1 rounded bg-accent/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-muted text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

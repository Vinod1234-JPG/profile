"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "No-Due Portal",
    subtitle: "No Due Clearance Management System",
    description: "Multi-tenant SaaS that digitizes student No Due Certificate workflows, connecting faculty, coordinators, library, accounts, HODs, and administration with automated dues, payments, approvals, and PDF certificates.",
    tags: ["Full Stack", "SaaS", "Next.js"],
  },
  {
    id: "02",
    title: "AcadOps ERP",
    subtitle: "Engineering College ERP",
    description: "Governance-focused ERP for managing admissions, academics, attendance, internal assessments, examinations, mentorship, results, role-based access, and institutional workflows.",
    tags: ["ERP", "Backend", "React"],
  },
  {
    id: "03",
    title: "MITM PlacePro",
    subtitle: "Placement Management Platform",
    description: "Full-stack placement platform connecting students, placement administrators, and companies through job drives, assessments, interviews, feedback, recruitment workflows, and analytics.",
    tags: ["Full Stack", "Platform"],
  },
  {
    id: "04",
    title: "MRF",
    subtitle: "Research Management Platform",
    description: "Digital research administration platform supporting the academic research lifecycle—from candidate registration and supervisor allocation to RAC reviews, progress reports, publications, examinations, and graduation.",
    tags: ["Research", "SaaS"],
  },
  {
    id: "05",
    title: "ENILS",
    subtitle: "Edge-Native Interactive Learning System",
    description: "Offline AI tutoring system designed for schools with limited connectivity. Uses local speech recognition, AI, and text-to-speech to provide voice-based learning without requiring the internet.",
    tags: ["AI", "Edge Computing"],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-transparent overflow-hidden">

      <div className="absolute bottom-0 right-[5%] w-[45vw] h-[45vw] bg-[#a8c6ff] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 pointer-events-none parallax-slow" />
      
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
                03 // SELECTED WORK
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.05] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                <span className="text-black block">Real-world</span>
                <span className="text-black/30 block">solutions.</span>
              </h2>
              
              <div className="flex gap-6 max-w-sm mt-12">
                <div className="mt-1.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-black/20 relative">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-base text-black/60 leading-relaxed font-medium">
                  Platforms, systems, and tools engineered to solve complex operational challenges.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Project Cards */}
          <div className="lg:col-span-7 space-y-4">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * idx }}
                className="group bg-white/60 backdrop-blur-xl rounded-[24px] p-8 md:p-10 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-black/40 uppercase tracking-widest">{project.id}</span>
                        <h3 className="text-2xl font-bold text-black tracking-tight">{project.title}</h3>
                      </div>
                      <p className="text-sm font-medium text-black/40">{project.subtitle}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-black/5 text-[10px] font-bold text-black/60 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-base text-black/60 leading-[1.8] font-normal mb-8">
                    {project.description}
                  </p>
                  
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity group/link"
                  >
                    View details 
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

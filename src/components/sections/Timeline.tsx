"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Video } from "lucide-react";
import clsx from "clsx";

const timelineItems = [
  {
    type: "work",
    title: "COO & Product Builder",
    organization: "YVB&Co",
    date: "Present",
    description: "Leading company operations and product development at an independent technology studio. Building websites, apps, ERP systems, and business tools.",
    icon: Briefcase
  },
  {
    type: "creative",
    title: "Technical Content & Motion Graphics",
    organization: "@visheshcoditz",
    date: "Ongoing",
    description: "Merging technical complexity with engaging narratives through high-retention technical content, visual storytelling, and premium UI animations.",
    icon: Video
  },
  {
    type: "education",
    title: "BE — Computer Science and Engineering",
    organization: "Maharaja Institute of Technology Mysore",
    date: "Current (CGPA: 9.55)",
    description: "Pursuing bachelor's degree with a focus on practical software engineering and systems design.",
    icon: GraduationCap
  },
  {
    type: "achievement",
    title: "Cricket Athlete & VTU Champions",
    organization: "MITM College Cricket Team",
    date: "2026",
    description: "Won the Mysore District Level VTU Competition and secured 4th place at the State Level Competition. Previously awarded Best Bowler in Malnad Cup U-14.",
    icon: Award
  },
  {
    type: "achievement",
    title: "1st Place — Escape X",
    organization: "MITM",
    date: "2025",
    description: "First place winner in technical competition.",
    icon: Award
  },
  {
    type: "education",
    title: "Pre-University College (PUC)",
    organization: "Gopalswamy PU College",
    date: "Completed (87.3%)",
    description: "Pre-university education with strong academic performance.",
    icon: GraduationCap
  },
  {
    type: "achievement",
    title: "Gold Medalist",
    organization: "SOF & LiveOlympiad",
    date: "School Level",
    description: "Gold Medal in National-level Math-Science LiveOlympiad and SOF International Mathematics Olympiad (International Rank 1712).",
    icon: Award
  }
];

export function Timeline() {
  return (
    <section id="experience" className="py-32 relative border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">
              03 // Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Experience & <br className="hidden md:block" />
              <span className="text-muted">Milestones.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 md:pl-32"
                >
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-6 md:left-12 top-1 -translate-x-1/2 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Icon size={16} className={clsx(
                      item.type === "work" ? "text-accent" : 
                      item.type === "education" ? "text-purple-400" :
                      item.type === "creative" ? "text-pink-400" : "text-amber-400"
                    )} />
                  </div>

                  <div className="glass p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted font-medium mt-1">
                          {item.organization}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

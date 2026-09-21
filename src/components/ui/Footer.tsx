"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#050505] relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Vinod Patel</h3>
            <p className="text-white/40 text-sm font-medium">
              Designer • Developer • Founder
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/vinodpatel" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href="https://linkedin.com/in/vinodpatel" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href="https://instagram.com/vinodpatel" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href="https://youtube.com/@vinodpatel" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-center md:text-right space-y-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors group w-fit"
            >
              <span>Back to top</span>
              <span className="p-2 rounded-full bg-white/5 group-hover:bg-accent/20 border border-white/10 group-hover:border-accent/50 transition-all">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
            <a href="mailto:vvinod95792@gmail.com" className="text-sm font-medium text-white/40 hover:text-accent transition-colors flex items-center gap-2">
              <Mail size={16} /> vvinod95792@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide text-white/40">
          <p>© {new Date().getFullYear()} VINOD PATEL. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH INTENTIONALITY.</p>
        </div>
      </div>
    </footer>
  );
}

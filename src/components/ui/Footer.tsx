"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/5 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h3 className="text-xl font-bold text-black mb-2 tracking-tight">Vinod Patel</h3>
            <p className="text-black/60 text-sm font-medium">
              Designer • Developer • Founder
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/vinodpatel" target="_blank" className="text-black/40 hover:text-black transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href="https://linkedin.com/in/vinodpatel" target="_blank" className="text-black/40 hover:text-black transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href="https://instagram.com/vinodpatel" target="_blank" className="text-black/40 hover:text-black transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href="https://youtube.com/@vinodpatel" target="_blank" className="text-black/40 hover:text-black transition-colors">
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-center md:text-right space-y-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors group w-fit"
            >
              <span>Back to top</span>
              <span className="p-2 rounded-full bg-black/5 group-hover:bg-black/10 border border-black/10 transition-all">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
            <a href="mailto:vvinod95792@gmail.com" className="text-sm font-semibold text-black/60 hover:text-black transition-colors flex items-center gap-2">
              <Mail size={16} /> vvinod95792@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase text-black/40 relative z-10">
          <p>© {new Date().getFullYear()} VINOD PATEL. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH INTENTIONALITY.</p>
        </div>
      </div>
    </footer>
  );
}

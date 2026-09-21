"use client";

import { motion } from "framer-motion";
import { Send, Mail, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      
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
                04 // CONTACT
              </span>
              
              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-8">
                <span className="text-white block">Let's build</span>
                <span className="text-white/40 block">together.</span>
              </h2>
              
              <div className="flex gap-6 max-w-sm mt-12 mb-12">
                <div className="mt-1.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-accent relative">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <p className="text-base text-white/60 leading-relaxed font-medium">
                  Have an idea, product, or technology problem? Let's talk. Always open to discussing new opportunities.
                </p>
              </div>

              <a href="mailto:vvinod95792@gmail.com" className="flex items-center gap-4 text-white hover:text-accent transition-colors group w-fit">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">vvinod95792@gmail.com</span>
              </a>

              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com/in/vinodpatel" target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  <ExternalLink size={20} />
                </a>
                <a href="https://github.com/vinodpatel" target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#111111] rounded-[24px] p-8 md:p-12 border border-white/5"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="John Doe"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-[#222] transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-[#222] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-[#222] transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

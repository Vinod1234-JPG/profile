"use client";

import { motion } from "framer-motion";
import { Send, Mail, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background elements — parallax */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none parallax-slow" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border border-white/10 relative overflow-hidden">
          {/* subtle noise overlay inside the card (removed to fix 404) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Left side text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  Let's build something <span className="text-accent">meaningful.</span>
                </h2>
                <p className="text-muted text-lg mb-8">
                  Have an idea, product or technology problem? Let's talk. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="space-y-4">
                  <a href="mailto:vvinod95792@gmail.com" className="flex items-center gap-4 text-white hover:text-accent transition-colors group w-fit">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                      <Mail size={20} />
                    </div>
                    <span className="font-medium text-lg">vvinod95792@gmail.com</span>
                  </a>
                </div>

                <div className="flex gap-4 mt-12">
                  <a href="https://linkedin.com/in/vinodpatel" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href="https://github.com/vinodpatel" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href="https://instagram.com/vinodpatel" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href="https://youtube.com/@vinodpatel" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group"
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

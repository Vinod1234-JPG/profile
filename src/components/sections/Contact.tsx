"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/vvinod95792@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-transparent overflow-hidden">

      <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#ff5e7e] rounded-full mix-blend-multiply filter blur-[130px] opacity-15 pointer-events-none parallax-slow" />
      
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
                04 // CONTACT
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.05] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                <span className="text-black block">Let's build</span>
                <span className="text-black/30 block">together.</span>
              </h2>
              
              <div className="flex gap-6 max-w-sm mt-12 mb-12">
                <div className="mt-1.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-black/20 relative">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-base text-black/60 leading-relaxed font-medium">
                  Have an idea, product, or technology problem? Let's talk. Always open to discussing new opportunities.
                </p>
              </div>

              <a href="mailto:vvinod95792@gmail.com" className="flex items-center gap-4 text-black hover:opacity-70 transition-opacity group w-fit">
                <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-semibold text-lg">vvinod95792@gmail.com</span>
              </a>

              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com/in/vinodpatel" target="_blank" className="p-3 rounded-xl bg-black/5 border border-black/10 text-black/60 hover:text-black hover:bg-black/10 transition-colors">
                  <ExternalLink size={20} />
                </a>
                <a href="https://github.com/vinodpatel" target="_blank" className="p-3 rounded-xl bg-black/5 border border-black/10 text-black/60 hover:text-black hover:bg-black/10 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-white/60 backdrop-blur-xl rounded-[24px] p-8 md:p-12 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Optional settings for FormSubmit */}
                <input type="hidden" name="_subject" value="New message from Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-black/70">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/[0.03] border border-black/10 rounded-xl px-4 py-3.5 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:bg-white transition-all disabled:opacity-50"
                      disabled={status === "loading"}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-black/70">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/[0.03] border border-black/10 rounded-xl px-4 py-3.5 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:bg-white transition-all disabled:opacity-50"
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-black/70">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/[0.03] border border-black/10 rounded-xl px-4 py-3.5 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:bg-white transition-all resize-none disabled:opacity-50"
                    disabled={status === "loading"}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all group ${
                    status === "success" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : status === "error"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-black hover:bg-black/80"
                  }`}
                >
                  {status === "loading" && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {status === "success" && (
                    <>
                      Message Sent!
                      <CheckCircle2 size={18} />
                    </>
                  )}
                  {status === "error" && (
                    <>
                      Error sending message. Try again?
                      <AlertCircle size={18} />
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

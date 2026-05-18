import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 md:px-10 pt-32 pb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[85vh]">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-secondary-fixed text-xs font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse shadow-[0_0_8px_#00eefc]"></span>
          AVAILABLE FOR INTERNSHIPS
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-on-surface">
            Yash Sawant
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Robotics & AI Engineering Student | Frontend Developer
          </p>
        </div>

        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-light">
          Engineering the future at the intersection of autonomous systems and seamless user interfaces. 
          Specialized in building intelligent platforms with a focus on robotics and scalable web architecture.
        </p>

        <div className="flex flex-wrap gap-5 pt-4">
          <a 
            href="#projects" 
            className="bg-primary-container text-on-primary-container px-10 py-4 rounded-2xl font-bold hover:ai-glow hover:-translate-y-1 transition-all active:scale-95"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="border border-secondary-fixed/50 text-secondary-fixed px-10 py-4 rounded-2xl font-bold hover:bg-secondary-fixed/5 transition-all hover:border-secondary-fixed active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5 relative group"
      >
        <div className="absolute -inset-4 bg-primary-container/20 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative overflow-hidden rounded-3xl ai-glow border border-white/10">
          <img 
            alt="Yash Sawant"
            className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx79oVx0Tg7Rj9hR-BsiYqTQHKF8DhPfqzcLZ3NrF7D-DNToDNp-aK-Qv-pvOy2pDjUfcXCAOEiVgNdPtTDHMRgvHjvOxsqqdLNqik02lFIbrFjVFvMkUh-sZCm0Qx124RrsDIb8wx3_q1wBZalS5_aMkluMLHHHjpU5UInXZy20ijix-_WhPDNSmVA4cd_FUrq2bGeOyZrcqvUKIAYRn6T7Wfq-Q5YeJX_xv580J1BUHEbp4qYAduUaRq2LEmLQtN6fwk_vPyUQ"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";
import { Mail, Phone, Github, Share2, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="space-y-12">
      <h2 className="text-4xl font-extrabold tracking-tight">Let's Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <p className="text-on-surface-variant text-xl leading-relaxed font-light">
            Whether you're looking for a dedicated intern or a technical collaborator for your next AI project, my door is always open.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-all shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-on-surface text-lg font-medium">ysawant292@gmail.com</p>
            </div>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-all shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-on-surface text-lg font-medium">9579831230</p>
            </div>
          </div>

          <div className="flex gap-6 pt-6">
            <a href="https://github.com/yash-techligence" className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all shadow-lg active:scale-95">
              <Github className="w-6 h-6" />
            </a>
            <button className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all shadow-lg active:scale-95">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-10 rounded-3xl space-y-8 shadow-2xl border-white/5"
        >
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Yash Sawant"
              className="w-full bg-surface-container-lowest border border-white/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary-fixed focus:outline-none transition-all placeholder:text-outline font-medium"
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email</label>
            <input 
              type="email" 
              placeholder="ysawant292@gmail.com"
              className="w-full bg-surface-container-lowest border border-white/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary-fixed focus:outline-none transition-all placeholder:text-outline font-medium"
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Message</label>
            <textarea 
              rows={4}
              placeholder="How can we collaborate?"
              className="w-full bg-surface-container-lowest border border-white/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary-fixed focus:outline-none transition-all placeholder:text-outline font-medium resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-primary-container text-on-primary-container font-black py-5 rounded-2xl hover:ai-glow hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95 text-lg"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-16 mt-32 border-t border-white/5 bg-surface-container-lowest/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 max-w-7xl mx-auto gap-12">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-3xl font-black text-primary tracking-tighter">Yash Sawant</span>
          <p className="text-on-surface-variant font-medium text-sm tracking-wide">
            © 2024 Yash Sawant. Built with AI & Precision.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/yash-techligence" },
            { label: "Twitter", href: "#" },
            { label: "ResearchGate", href: "#" }
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              target={link.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-bold text-on-surface-variant hover:text-primary transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

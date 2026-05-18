import { motion } from "motion/react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,82,255,0.15)]"
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-4 max-w-7xl mx-auto">
        <span className="text-xl md:text-2xl font-bold text-on-surface tracking-tight">Yash Sawant</span>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-on-surface hover:scale-105 transition-all duration-300 relative group text-sm font-semibold"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-fixed transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:ai-glow">
          Resume
        </button>
      </div>
    </motion.nav>
  );
}

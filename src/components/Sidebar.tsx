import { motion } from "motion/react";
import { Cpu, Rss, Layers, Archive, Mail } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { icon: <Rss className="w-5 h-5 text-primary" />, label: "Latest Posts", href: "#blog", active: true },
    { icon: <Cpu className="w-5 h-5" />, label: "Tech Stack", href: "#skills" },
    { icon: <Layers className="w-5 h-5" />, label: "Archives", href: "#projects" },
  ];

  return (
    <aside className="lg:col-span-3 space-y-8 h-fit lg:sticky lg:top-28">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-surface-container-low/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-8"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shadow-lg shadow-primary-container/20">
            <Cpu className="text-on-primary-container w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-on-surface leading-tight">Robotics & AI</p>
            <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Engineering Student</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-4 p-3.5 rounded-xl transition-all group ${
                item.active 
                  ? "bg-white/10 text-primary shadow-sm" 
                  : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
              }`}
            >
              {item.icon}
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="space-y-4 pt-6 border-t border-white/5">
          <p className="text-xs font-bold text-on-surface uppercase tracking-widest px-2">Newsletter</p>
          <div className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-surface-container-lowest border border-white/5 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary-container focus:outline-none transition-all placeholder:text-outline"
              />
            </div>
            <button className="w-full bg-secondary-fixed text-on-secondary-fixed font-bold py-3.5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-secondary-fixed/10">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}

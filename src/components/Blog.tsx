import { motion } from "motion/react";
import { Trophy, Code, Star } from "lucide-react";

export function Milestones() {
  const milestones = [
    { icon: <Trophy className="text-primary" />, title: "Schneider Winner", desc: "Global Competition" },
    { icon: <Code className="text-secondary-fixed" />, title: "HackWithInfy", desc: "Selected Participant" },
    { icon: <Star className="text-tertiary" />, title: "Rank 4 Winner", desc: "Williams Sonoma Hack" },
  ];

  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-extrabold tracking-tight">Milestones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {milestones.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 glass-card rounded-3xl flex items-center gap-6 hover:border-primary/30 transition-colors shadow-lg"
          >
            <div className="p-4 rounded-2xl bg-white/5">
              {m.icon}
            </div>
            <div>
              <p className="font-bold text-on-surface text-lg leading-tight">{m.title}</p>
              <p className="text-sm font-medium text-on-surface-variant tracking-wide mt-1">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Blog() {
  const posts = [
    {
      category: "AI & ROBOTICS",
      title: "AI in Robotics: The Next Frontier of Automation",
      desc: "Exploring how neural networks are reshaping kinetic hardware interactions and autonomous navigation.",
    },
    {
      category: "DEVELOPMENT",
      title: "Frontend Development Trends in 2024",
      desc: "Why React and Tailwind remain the powerhouse duo for modern, responsive engineering portfolios.",
    },
    {
      category: "FINTECH",
      title: "Machine Learning in Modern Finance",
      desc: "A deep dive into FinScore's architecture for predictive credit analysis using regression models.",
    },
  ];

  return (
    <section id="blog" className="space-y-10">
      <h2 className="text-4xl font-extrabold tracking-tight">Technical Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl space-y-6 hover:ai-glow hover:-translate-y-2 transition-all group"
          >
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{post.category}</p>
            <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-on-surface-variant text-sm font-light line-clamp-3 leading-relaxed">
              {post.desc}
            </p>
            <a href="#blog" className="inline-flex items-center gap-2 text-secondary-fixed text-sm font-black uppercase tracking-wider group/link hover:gap-3 transition-all">
              Read Article 
              <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

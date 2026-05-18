import { motion } from "motion/react";
import { Code2, Layers, Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-secondary-fixed" />,
      skills: ["Java", "Python", "JS/TS", "SQL"],
    },
    {
      title: "Frontend",
      icon: <Layers className="w-5 h-5 text-secondary-fixed" />,
      skills: ["React", "Tailwind", "MUI"],
    },
    {
      title: "Backend & DB",
      icon: <Database className="w-5 h-5 text-secondary-fixed" />,
      skills: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="space-y-10">
      <h2 className="text-4xl font-extrabold tracking-tight">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group shadow-xl border-white/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary-container/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export default function About() {
  const stats = [
    { label: "DSA SOLVED", value: "400+" },
    { label: "DIPLOMA SCORE", value: "94%" },
  ];

  return (
    <section id="about" className="space-y-10">
      <h2 className="text-4xl font-extrabold tracking-tight">About Me</h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass-card p-10 rounded-3xl"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span> Education
            </h3>
            <div className="terminal-bg p-6 rounded-2xl space-y-6 shadow-inner">
              <div className="space-y-1">
                <p className="font-bold text-secondary-fixed">COEP Technological University</p>
                <p className="text-on-surface-variant text-sm font-medium">B.E Robotics and AI (2024-2027)</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-secondary-fixed">Diploma in Engineering</p>
                <p className="text-on-surface-variant text-sm font-medium">Graduated with 94% Distinction</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span> Mission
            </h3>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed">
              Driven by a passion for solving complex problems using Machine Learning and Full-Stack technologies. 
              I bridge the gap between high-performance hardware and intuitive software environments.
            </p>
            <div className="flex gap-6 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center glass-card px-6 py-4 rounded-2xl min-w-[120px] shadow-lg border-white/5">
                  <p className="text-primary text-2xl font-black">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

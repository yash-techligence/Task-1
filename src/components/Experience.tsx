import { motion } from "motion/react";

export default function Experience() {
  const journey = [
    {
      role: "Frontend Intern",
      company: "CloudAstra.AI",
      year: "2025",
      description: "Developing cutting-edge AI dashboard interfaces and optimizing frontend performance for cloud-native applications.",
      active: true,
    },
    {
      role: "Python Intern",
      company: "Codexlabz",
      year: "2023",
      description: "Implemented data processing scripts and automation tools, focusing on algorithm efficiency and API integration.",
      active: false,
    },
  ];

  return (
    <section id="experience" className="space-y-10">
      <h2 className="text-4xl font-extrabold tracking-tight">Professional Journey</h2>
      
      <div className="space-y-12 pl-4">
        {journey.map((item, idx) => (
          <motion.div
            key={item.role + item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex gap-8 items-start relative"
          >
            {/* Timeline Line */}
            {idx !== journey.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary-container/50 to-transparent"></div>
            )}
            
            {/* Timeline Dot */}
            <div className={`mt-2.5 w-6 h-6 rounded-full shrink-0 z-10 flex items-center justify-center ${
              item.active 
                ? "bg-primary-container ring-8 ring-primary-container/10" 
                : "bg-surface-container-highest ring-8 ring-white/5"
            }`}>
              {item.active && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
            </div>

            <div className="glass-card p-8 rounded-3xl flex-1 shadow-xl border-white/5">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <h3 className="text-2xl font-bold tracking-tight text-on-surface">
                  {item.role}
                </h3>
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] ${
                  item.active 
                    ? "bg-secondary-fixed/10 text-secondary-fixed border border-secondary-fixed/20" 
                    : "bg-white/5 text-on-surface-variant border border-white/10"
                }`}>
                  {item.company} | {item.year}
                </span>
              </div>
              <p className="text-on-surface-variant font-light leading-[1.8] text-lg italic">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

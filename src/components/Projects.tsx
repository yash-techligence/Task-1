import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TradeSphere AI",
      tag: "MERN STACK",
      tagColor: "bg-primary-container/20 text-primary",
      description: "Real-time stock analysis and prediction platform using the MERN stack with integrated AI forecasting models.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsHtyfqOZNlkjrlI2bheMApuvQRPOIJ9Uz_mkAqhSNh-dYz1_3PZiHy4QkQevXnkz71iZJ_UgQnU_KtCspBXt1XSa7mrdVKXq0kSLwwTmxAdTCVMBKUaUyzd97FOgJ8jK0wb96e6MG0Gxjx31NmVc59molU3z_rF0u9ylqlo-m2uBuiXZh9Zds8L_WtUGjaCOf-NPRLqpKNY8W_4vrZelrvCItfZATwqSlVIqo6XOV1YyCJo2MLslcgBTiQa6q7mcPDItmA7OKAw",
    },
    {
      title: "FinScore",
      tag: "ML / PYTHON",
      tagColor: "bg-tertiary-container/20 text-tertiary",
      description: "Machine Learning credit engine for assessing financial risk profiles using Scikit-learn and automated feature engineering.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFcMxgsPFw36_Ad_r5uMMQb1HZKSeRS4BBJKVRxFcZrqiv66RW3LA6Qc2Msh5yziVbDAFAXr2DxYSi10N3HIsfKr21zlhvBz0sqN3djoQUFe8EBjeqzNOpsvI2n7lX3wZAFSgtcc3DQ4WdRxpc4Bgrim0KFn3tJRF9fvE7-Tlo78rSED8VzGHM0VZ2qEKRgkake1FU8ALmPImE80oafMUUrrIwtltohMNkWTucqIWPpFjLmxh7AowYHDGwiuDqzEt_JxdzxHJc2w",
    },
  ];

  return (
    <section id="projects" className="space-y-10">
      <div className="flex justify-between items-end">
        <h2 className="text-4xl font-extrabold tracking-tight">Featured Projects</h2>
        <a 
          href="https://github.com/yash-techligence" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary font-bold text-sm hover:underline flex items-center gap-2 group"
        >
          See all on GitHub
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="glass-card rounded-3xl overflow-hidden group border-white/5"
          >
            <div className="h-64 bg-surface-container-high relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
              <img 
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
              />
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <span className={`px-2.5 py-1 ${project.tagColor} text-[10px] rounded font-black tracking-widest`}>
                  {project.tag}
                </span>
              </div>
              
              <p className="text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-4 pt-2">
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/10 hover:ai-glow active:scale-95 transition-all">
                  Live Demo
                </button>
                <button className="border border-outline-variant text-on-surface-variant px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/5 active:scale-95 transition-all">
                  <Github className="w-4 h-4" />
                  Source Code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

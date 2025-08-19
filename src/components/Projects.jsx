import { PROJECTS } from "../constraints";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app')) 
      return <FaMobile className="text-2xl text-emerald-400" />;
    if (title.toLowerCase().includes('server') || title.toLowerCase().includes('system')) 
      return <FaServer className="text-2xl text-amber-400" />;
    if (title.toLowerCase().includes('website') || title.toLowerCase().includes('web')) 
      return <FaLaptopCode className="text-2xl text-sky-400" />;
    return <FaCode className="text-2xl text-purple-400" />;
  };

  const filteredProjects = (() => {
    if (filter === "all") return PROJECTS;
    if (filter === "django") {
      return PROJECTS.filter(project => 
        ["Heart Disease Prediction Chatbot", "UWL Nepalese Society Website"].includes(project.title)
      );
    }
    if (filter === "java") {
      return PROJECTS.filter(project => 
        ["E-commerce Mobile Web App", "Story Management System", "IT-Magazine Workflow Server"].includes(project.title)
      );
    }
    if (filter === "react") {
      return PROJECTS.filter(project => 
        project.technologies.some(tech => 
          ["react", "javascript"].includes(tech.toLowerCase())
        )
      );
    }
    return [];
  })();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { 
      y: 5,
      opacity: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.6, 1]
      }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-emerald-400">Projects</span>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-2 sm:mt-3 rounded-full"></div>
        </motion.h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {["All", "Django/Python", "React/JavaScript", "Java"].map((btn) => {
            const btnFilter = btn.toLowerCase().split('/')[0];
            const isActive = filter === btnFilter.toLowerCase();
            
            return (
              <motion.button
                key={btn}
                onClick={() => setFilter(btnFilter.toLowerCase())}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-colors ${
                  isActive 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="bg-gray-800 rounded-xl p-6 flex flex-col h-full"
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.1 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {getProjectIcon(project.title)}
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <FaGithub className="mr-1.5" /> Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-1.5 text-xs" /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No projects found in this category.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-4 sm:px-7 py-1.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-xs sm:text-base font-medium hover:opacity-90 transition-all transform hover:scale-105"
          >
            Let's Talk About Project
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

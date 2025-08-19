import { motion } from "framer-motion";
import { EXPERIENCES } from "../constraints";

const Experience = () => {
  // Group experiences by company
  const groupedExperiences = EXPERIENCES.reduce((acc, exp) => {
    if (!exp || !exp.company) return acc;
    if (!acc[exp.company]) {
      acc[exp.company] = [];
    }
    acc[exp.company].push(exp);
    return acc;
  }, {});

  return (
    <section id="experience" className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 relative z-10 max-w-4xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {Object.entries(groupedExperiences).map(([company, experiences], index) => (
            <motion.div 
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/80 p-5 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors duration-300 h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3">{company}</h3>
              
              <div className="space-y-4">
                {experiences.map((exp, expIndex) => (
                  <div key={expIndex} className="relative pl-4 border-l-2 border-emerald-500/30">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h4 className="text-lg font-semibold text-emerald-300 pr-2">{exp.role}</h4>
                      <span className="text-xs text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                        {exp.year}
                      </span>
                    </div>
                    
                    {/* Skills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mb-3">
                        <h5 className="text-xs font-medium text-gray-400 mb-1">Skills:</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] bg-slate-700/50 text-emerald-300 px-2 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-2">
                        <h5 className="text-xs font-medium text-gray-400 mb-1">Achievements:</h5>
                        <ul className="space-y-1.5 pl-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                              <span className="mr-2 text-emerald-400">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Awards */}
                    {exp.awards && exp.awards.length > 0 && (
                      <div className="mt-3">
                        <h5 className="text-xs font-medium text-amber-400 mb-1">Awards & Recognition:</h5>
                        <ul className="space-y-1.5 pl-3">
                          {exp.awards.map((award, idx) => (
                            <li key={idx} className="text-sm text-amber-300 flex items-start">
                              <span className="mr-2 text-amber-400">🏆</span>
                              <span>{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm mb-4">
            Want to know more about my experience?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
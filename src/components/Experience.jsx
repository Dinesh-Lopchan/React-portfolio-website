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
    <section id="experience" className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-2 sm:mt-3 rounded-full"></div>
        </motion.div>

        {/* Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {Object.entries(groupedExperiences).map(([company, experiences], index) => (
            <motion.div 
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/80 p-4 sm:p-5 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors duration-300 h-full"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{company}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp, expIndex) => (
                  <div key={expIndex} className="relative pl-3 sm:pl-4 border-l-2 border-emerald-500/30">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1 sm:mb-2">
                      <h4 className="text-base sm:text-lg font-semibold text-emerald-300 pr-2">{exp.role}</h4>
                      <span className="text-xs text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                        {exp.year}
                      </span>
                    </div>
                    
                    {/* Skills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mb-2 sm:mb-3">
                        <h5 className="text-xs font-medium text-gray-400 mb-1">Skills:</h5>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {exp.skills.map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] sm:text-xs bg-slate-700/50 text-emerald-300 px-1.5 sm:px-2 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-1.5 sm:mt-2">
                        <h5 className="text-xs font-medium text-gray-400 mb-1">Achievements:</h5>
                        <ul className="space-y-1 sm:space-y-1.5 pl-2 sm:pl-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-gray-300 flex items-start">
                              <span className="mr-1.5 sm:mr-2 text-emerald-400">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Awards */}
                    {exp.awards && exp.awards.length > 0 && (
                      <div className="mt-2 sm:mt-3">
                        <h5 className="text-xs font-medium text-amber-400 mb-1">Awards & Recognition:</h5>
                        <ul className="space-y-1 sm:space-y-1.5 pl-2 sm:pl-3">
                          {exp.awards.map((award, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-amber-300 flex items-start">
                              <span className="mr-1.5 sm:mr-2 text-amber-400">🏆</span>
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
            Want to know more about my experience?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-4 sm:px-7 py-1.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-xs sm:text-base font-medium hover:opacity-90 transition-all transform hover:scale-105"
          >
            Contact Me
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
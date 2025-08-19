import { RiReactjsLine } from "react-icons/ri";
import { DiPython, DiJava, DiHtml5, DiCss3Full, } from "react-icons/di";
import { FaGit, FaGithub, FaServer, FaMobileAlt, FaCode } from "react-icons/fa";
import { SiDjango, SiFirebase, SiTailwindcss, SiJavascript, SiNodedotjs, SiVercel, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const Technologies = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const techCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-2xl text-emerald-400" />,
      skills: [
        { name: "React", icon: <RiReactjsLine className="text-4xl text-blue-400" />, level: 75 },
        { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" />, level: 70 },
        { name: "HTML5", icon: <DiHtml5 className="text-4xl text-orange-500" />, level: 80 },
        { name: "CSS3", icon: <DiCss3Full className="text-4xl text-blue-500" />, level: 70 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: 70 },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl text-sky-400" />,
      skills: [
        { name: "Python", icon: <DiPython className="text-4xl text-blue-500" />, level: 80 },
        { name: "Django", icon: <SiDjango className="text-4xl text-green-700" />, level: 75 },
        { name: "Node.js", icon: <SiNodedotjs className="text-4xl text-green-500" />, level: 65 },
        { name: "Java", icon: <DiJava className="text-4xl text-orange-500" />, level: 75 },
      ]
    },
    {
      title: "Tools & More",
      icon: <FaMobileAlt className="text-2xl text-amber-400" />,
      skills: [
        { name: "Git", icon: <FaGit className="text-4xl text-orange-600" />, level: 80 },
        { name: "GitHub", icon: <FaGithub className="text-4xl text-gray-200" />, level: 80 },
        { name: "Vercel", icon: <SiVercel className="text-4xl text-black dark:text-white" />, level: 75 },
        { name: "Postman", icon: <SiPostman className="text-4xl text-orange-500" />, level: 70 },
        { name: "Firebase", icon: <SiFirebase className="text-4xl text-yellow-500" />, level: 70 },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="technologies" className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            My <span className="text-emerald-400">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 max-w-2xl mx-auto">
            Technologies I've worked with and my proficiency level in each area
          </p>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="p-3 sm:p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-1.5 sm:mb-2">
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-300">{skill.name}</span>
                      <div className="w-full bg-slate-700/50 rounded-full h-1.5 mt-2 sm:mt-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also Experienced With Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-amber-500/30 transition-colors"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="p-1.5 sm:p-2 bg-amber-500/10 rounded-lg text-amber-400">
              <FaMobileAlt className="text-lg sm:text-xl" />
            </span>
            Also Experienced With
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {['REST APIs', 'Testing', 'Agile/Scrum', 'Problem Solving', 'Teamwork', 'Communication'].map((item, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-3 py-1.5 text-xs sm:text-sm bg-slate-700/30 text-gray-300 rounded-full border border-slate-600/50 hover:bg-slate-700/50 hover:border-amber-500/30 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

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
    <section id="technologies" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with and my proficiency level in each area
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={item}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`relative p-4 rounded-lg bg-slate-800/30 border ${
                      hoveredSkill === skill.name 
                        ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' 
                        : 'border-slate-700/50'
                    } transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 transition-transform duration-300 hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <div className="w-full bg-slate-700/50 rounded-full h-1.5 mt-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
              <FaMobileAlt className="text-xl" />
            </span>
            Also Experienced With
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['REST APIs', 'Testing', 'Agile/Scrum Methodologies', 'Problem Solving', 'Team Collaboration', 'Effective Communication'].map((item, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-700/30 text-gray-300 rounded-full text-sm border border-slate-600/50 hover:bg-slate-700/70 hover:border-amber-500/30 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

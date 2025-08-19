import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaGraduationCap, FaLinkedin } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Test Automation Foundations",
      issuer: "LinkedIn Learning",
      date: "2025",
      skills: ["Test Automation"],
      link: "https://www.linkedin.com/learning/certificates/685ea2aba6716bffd7785f805f7ec191e61726f0aa301e3d800188f7bf8d5cd2?u=56747433",
      icon: <FaLinkedin className="text-3xl text-blue-600" />
    },
    {
      title: "Postman Essential Training (2020)",
      issuer: "LinkedIn Learning",
      date: "2025",
      skills: ["Postman", "API Testing"],
      link: "https://www.linkedin.com/learning/certificates/1eb18939c7d9bbc257beaab1b996ca782d47ff1eb14a0dd1a1c89e454bf278ee?u=56747433",
      icon: <FaLinkedin className="text-3xl text-blue-600" />
    },
    {
      title: "Programming Foundations: Software Testing/QA",
      issuer: "LinkedIn Learning",
      date: "2025",
      skills: ["Software Testing", "Software Quality Assurance"],
      link: "https://www.linkedin.com/learning/certificates/e5810c5086bc9a161b950de4e9fcbb6c8ca6341ed92b97d43f0bd911af0d8f3e?u=56747433",
      icon: <FaLinkedin className="text-3xl text-blue-600" />
    },
    {
      title: "Python Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      skills: ["Python (Programming Language)"],
      link: "https://www.linkedin.com/in/dinesh-tamang-153678268/details/certifications/1704316252427/single-media-viewer/?profileId=ACoAAEGYNc8Bu1-koj259rK8yZXLhES3ULB4mwU",
      icon: <FaLinkedin className="text-3xl text-blue-600" />
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="certifications" className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-emerald-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{cert.credential}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  {cert.icon}
                </div>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-1.5 text-xs" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Continuously learning and expanding my skillset through online courses and certifications
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-medium 
                      hover:opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 
                      focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Request Full Transcript
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

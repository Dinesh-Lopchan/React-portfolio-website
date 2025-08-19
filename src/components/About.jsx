import aboutImg from "../assets/poster.jpg";
import { ABOUT_TEXT, ABOUT_LINK, ABOUT_DETAILS } from "../constraints";
import { motion } from "framer-motion";
import { FaRunning, FaBasketballBall, FaUsers, FaUniversity, FaHiking } from "react-icons/fa";

const About = () => {
  const interests = [
    { icon: <FaHiking className="text-2xl text-emerald-400" />, text: "Hiking & Nature" },
    { icon: <FaRunning className="text-2xl text-sky-400" />, text: "Marathon Running" },
    { icon: <FaBasketballBall className="text-2xl text-amber-400" />, text: "Basketball & Sports" },
    { icon: <FaUsers className="text-2xl text-purple-400" />, text: "Community Leadership" },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
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
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl opacity-70 blur-xl"></div>
              <img 
                src={aboutImg} 
                alt="Dinesh Tamang" 
                className="relative z-10 w-full max-w-md rounded-2xl border-4 border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            {/* About Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-center lg:text-left"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Who Am I?</h3>
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">{ABOUT_DETAILS}</p>
                <p className="leading-relaxed">{ABOUT_TEXT}</p>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center lg:text-left">My Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/80 transition-colors"
                  >
                    <div>{interest.icon}</div>
                    <span className="text-gray-300">{interest.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Blog Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                <a 
                  href={ABOUT_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 mx-auto"
                >
                  <FaUniversity className="text-lg" />
                  <span>Read My Featured Story</span>
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center w-full">Featured in University of West London's Student Blog</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
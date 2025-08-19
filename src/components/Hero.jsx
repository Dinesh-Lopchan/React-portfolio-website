import { HERO_CONTENT } from "../constraints";
import Profile from "../assets/Dinesh.jpg";
import { motion } from "framer-motion";
import { FaMountain, FaRunning, FaBasketballBall, FaUniversity, FaUsers } from "react-icons/fa";

// Animation container settings with delay for smooth transitions
const container = (delay) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Reduced animation intensity for mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-10 sm:opacity-20">
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="hidden sm:block absolute top-1/3 right-1/4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="hidden sm:block absolute bottom-1/4 left-1/2 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          >
            <motion.p 
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="text-emerald-400 font-mono text-base sm:text-lg mb-3 sm:mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              Dinesh Tamang
            </motion.h1>

            <motion.div 
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="px-4 py-2 bg-sky-900/50 text-sky-300 rounded-full text-sm flex items-center">
                <FaMountain className="mr-2" /> Outdoor Adventurer
              </span>
              <span className="px-4 py-2 bg-amber-900/40 text-amber-300 rounded-full text-sm flex items-center">
                <FaUniversity className="mr-2" /> Featured on UWL Student Blog
              </span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm flex items-center">
                <FaUsers className="mr-2" /> Student Leader & Mentor
              </span>
            </motion.div>

            <motion.p 
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl font-medium text-white mb-8 max-w-2xl leading-relaxed bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#projects" 
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-medium hover:opacity-90 transition-all transform hover:scale-105 text-sm sm:text-base flex-1 sm:flex-none text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-emerald-500 text-emerald-400 rounded-full font-medium hover:bg-emerald-500/10 transition-all text-sm sm:text-base flex-1 sm:flex-none text-center"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-emerald-400">5+</div>
                <div className="text-sm text-gray-400">Marathons</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-sky-400">10+</div>
                <div className="text-sm text-gray-400">Hiking Trails</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-amber-400">100+</div>
                <div className="text-sm text-gray-400">Basketball Games</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-md lg:w-1/2 flex justify-center lg:mr-0 lg:ml-8 xl:ml-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl opacity-70 blur-xl"></div>
              <img 
                src={Profile} 
                alt="Dinesh Tamang" 
                className="relative z-10 w-full max-w-xs rounded-2xl border-4 border-white/10 shadow-2xl lg:max-w-sm"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
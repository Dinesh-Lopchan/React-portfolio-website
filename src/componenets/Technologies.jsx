import { RiReactjsLine } from "react-icons/ri";  // Importing React icon
import { DiPython, DiJava, DiHtml5, DiCss3Full, DiMysql } from "react-icons/di";  // Importing other tech icons
import { FaGit, FaGithub } from "react-icons/fa";  // Git and GitHub icons
import { SiDjango, SiFirebase } from "react-icons/si";  // Django and Firebase icons
import { motion } from "framer-motion";  // Importing motion for animation effects


// Function to define the animation for the icons, with a customizable duration
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [8, -8, 0],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Main functional component to display technologies and tools with animations
const Technologies = () => {
  const skills = [
    { name: "React", icon: <RiReactjsLine className="text-3xl text-blue-400" />, duration: 3.5 },
    { name: "Python", icon: <DiPython className="text-3xl text-blue-500" />, duration: 3 },
    { name: "Java", icon: <DiJava className="text-3xl text-orange-500" />, duration: 3.5 },
    { name: "HTML5", icon: <DiHtml5 className="text-3xl text-red-500" />, duration: 3 },
    { name: "CSS3", icon: <DiCss3Full className="text-3xl text-blue-500" />, duration: 3.5 },
    { name: "Django", icon: <SiDjango className="text-3xl text-green-700" />, duration: 3 },
    { name: "Firebase", icon: <SiFirebase className="text-3xl text-yellow-500" />, duration: 3.5 },
    { name: "Git", icon: <FaGit className="text-3xl text-orange-600" />, duration: 3 },
    { name: "GitHub", icon: <FaGithub className="text-3xl text-gray-400" />, duration: 3.5 },
    { name: "MySQL", icon: <DiMysql className="text-3xl text-blue-500" />, duration: 3 },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-900 text-white border-b border-neutral-200 pb-14">
      <h1 className="text-3xl mb-12">TOOLS & TECHNOLOGIES</h1>

      {/* Big Container Box */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-500 w-full max-w-4xl">

        {/* Flex container to wrap and position icons */}
        <div className="flex flex-wrap gap-5 justify-center">
          {skills.map(({ name, icon, duration }, index) => (
            <motion.div
              key={index}
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center bg-gray-700 p-3 sm:p-7 md:p-7 rounded-xl shadow-md w-20 sm:w-28 md:w-32 lg:w-28 h-22 sm:h-28 md:h-32 lg:h-28 border border-gray-600"
            >
              {icon}
              <p className="text-sm mt-2 font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

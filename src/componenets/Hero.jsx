import {HERO_CONTENT} from "../constraints"; //Importing hero section content
import Profile from "../assets/Dinesh.jpg"; //Importing profile image
import {motion} from "framer-motion"; // Importing motion for animation effects


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
  return <div className="border-b border-neutral-200 pb-12 lg:mb-35 overflow-hidden min-h-[600px]">
    <div className="flex flex-wrap items-center justify-between">

        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start sm:items-center lg:items-start">

                {/* Animated Name */}
                <motion.h1 
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.5, delay: 1}}
                  className="pb-7 text-5xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
                    Dinesh Tamang
                </motion.h1>

                {/* Animated Title with gradient color */}
                <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-orange-300 via-pink-500 to-purple-500 bg-clip-text text-4xl tracking-tight
                  text-transparent">
                    Computer Science Student
                </motion.span>

                {/* Animated Description Text */}
                <motion.p 
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                  className="my-2 max-w-xl py-4 font-light tracking-tighter text-justify">
                  {HERO_CONTENT}
                </motion.p>
            </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center w-full lg:justify-end">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              src={Profile} 
              alt="Dinesh Tamang" className="w-auto max-w-[300px] md:max-w-[320px] lg:max-w-[350px] h-auto object-contain rounded-2xl"/>
          </div>
        </div>
    </div>
  </div>

};

export default Hero
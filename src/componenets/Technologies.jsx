import { RiReactjsLine } from "react-icons/ri";  // Importing React icon
import { DiPython, DiJava, DiHtml5, DiCss3Full, DiMysql } from "react-icons/di";  // Importing various tech icons
import { FaGit, FaGithub } from "react-icons/fa";  // Importing Git and GitHub icons
import { SiDjango, SiFirebase } from "react-icons/si";  // Importing Django and Firebase icons
import {motion} from "framer-motion"; //Importing Framer Motion for animations

// Animation variants for floating effect
const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10, 0],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">

        {/* Section Title */}
        <h1 className="my-20 text-center text-3xl text-neutral-700">TOOLS & TECHNOLOGIES</h1>

        {/* Technology Icons Display */}
        <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1}}
            className="flex flex-wrap items-center justify-center gap-4">

            {/* Each technology represented by its respective icon */}
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiReactjsLine className="text-4xl" style={{ color: "#61DAFB" }} />
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <DiPython className="text-4xl" style={{ color: "#306998" }}/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <DiJava className="text-4xl" style={{ color: "#f89820" }}/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <DiHtml5 className="text-4xl" style={{ color: "#E34F26" }} />
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <DiCss3Full className="text-4xl" style={{ color: "#1572B6" }}/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <SiDjango className="text-4xl" style={{ color: "#092E20" }}/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <SiFirebase className="text-4xl" style={{ color: "#FFCA28" }} />
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <FaGit className="text-4xl" style={{ color: "#F05032" }} />
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <FaGithub className="text-4xl" style={{ color: "#333333" }}/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
                <DiMysql className="text-4xl" style={{ color: "#4479A1" }}/>
            </motion.div>

        </motion.div>

    </div>
  )
}

export default Technologies
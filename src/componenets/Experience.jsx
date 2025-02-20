import { EXPERIENCES } from "../constraints" // Importing experience data from constraints
import {motion} from "framer-motion"; // Importing motion component for animation

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">

        {/* Section Title */}
        <h1 className="my-20 text-center text-3xl ">EXPERIENCES</h1>

        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-12 flex flex-wrap lg:justify-center md:justify-center ">

                    {/* Left Section - Year */}
                    <motion.div
                        whileInView={{ opacity:1, x:0}}
                        initial={{ opacity:0, x:-100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-3  ">
                            {experience.year} 
                        </p>
                    </motion.div>

                    {/* Right Section - Role, Company, Description, and Technologies */}
                    <motion.div 
                        whileInView={{ opacity:1, x:0}}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:w-3/4">

                        {/* Job Role and Company */}
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-md ">
                                {experience.company}
                            </span>
                        </h6>

                        {/* Job Description */}
                        <p className="mb-3 text-justify">
                            {experience.description}
                        </p>

                        {/* Technologies Used */}
                        {experience.technologies.map((tech, index) => 
                            <span
                                key={index}
                                className="mr-2 mt-4 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-blue-500">
                                {tech}
                            </span>
                        )}
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience
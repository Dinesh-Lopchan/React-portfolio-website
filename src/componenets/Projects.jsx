import { PROJECTS } from "../constraints" // Importing project data from constraints
import  {motion} from "framer-motion"; //Importing motion for animations


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

        {/* Section Title */}
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-10 flex flex-wrap lg:justify-center md:justify-center gap-10">

                    {/* Left Section - Project Image */}
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/4 md:w-1/3 sm:w-full flex justify-center">
                        <img 
                            src={project.image} 
                            width={230}
                            height={200}
                            alt={project.title} 
                            className="mb-6 rounded"
                        />
                    </motion.div>

                    {/* Right Section - Project Title, Description, and Technologies */}
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:w-3/4">

                        {/* Project Title */}
                        <h6 className="mb-2 font-semibold">{project.title}</h6>

                        {/* Conditionally Render Link at the Bottom for Nepalese Society Website */}
                        {project.title === "UWL Nepalese Society Website" && (
                        <div className="mt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Visit Society Website
                            </a>
                        </div>
                        )}

                        {/* Technologies Used */}
                        <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500">
                                {tech}
                            </span>
                        ))}
                        
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
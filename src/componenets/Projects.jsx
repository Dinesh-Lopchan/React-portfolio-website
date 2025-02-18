import { PROJECTS } from "../constraints" // Importing project data from constraints
import { motion } from "framer-motion"; //Importing motion for animations
import { useState } from "react"; // Import useState hook for state management

const Projects = () => {

    const [selectedImage, setSelectedImage] = useState(null); // Track the selected image

    const handleImageClick = (image) => {
        setSelectedImage(image); // Set the selected image when clicked
    };

    const handleCloseModal = () => {
        setSelectedImage(null); // Close the modal by resetting the selected image
    };
    return (
        <div className="border-b border-neutral-900 pb-4 ">

            {/* Section Title */}
            <h1 className="my-20 text-center text-4xl text-neutral-700">PROJECTS</h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-10 flex flex-wrap lg:justify-center md:justify-center gap-10 ">

                        {/* Left Section - Project Image */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4 md:w-1/3 sm:w-full flex justify-center">
                            <img
                                src={project.image}
                                width={230}
                                height={200}
                                alt={project.title}
                                className="mb-6 rounded-lg border-4 border-gray-400 hover:border-gray-200 transition-all duration-300"
                                onClick={() => handleImageClick(project.image)} // Trigger the modal when clicked
                            />
                        </motion.div>

                        {/* Right Section - Project Title, Description, and Technologies */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4 ">

                            {/* Project Title */}
                            <h6 className="mb-2 font-semibold text-gray-500">{project.title}</h6>

                            {/* Conditionally Render Link at the Bottom for Nepalese Society Website */}
                            {project.title === "UWL Nepalese Society Website" && (
                                <div className="mt-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        Visit Society Website
                                    </a>
                                </div>
                            )}

                            {/* Technologies Used */}
                            <p className="mb-4 text-gray-500 text-justify">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-blue-500">
                                    {tech}
                                </span>
                            ))}

                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Modal for Enlarged Image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Enlarged project"
                            className="max-w-3xl max-h-screen object-contain rounded-2xl"
                        />
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-white text-l bg-black p-2 rounded-full"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects
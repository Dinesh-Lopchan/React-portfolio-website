
import aboutImg from "../assets/poster.jpg" //Importing profile image for the about section
import {ABOUT_TEXT} from "../constraints" //Imporing about section content
import { ABOUT_LINK } from "../constraints"; // Importing external blog link
import {motion} from "framer-motion"; // Importing Framer Motion for animations

const About = () => {
    return <div className="border-b border-neutral-900 pb-4">

      {/* Section Title */}  
      <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">

            {/* Left Section - Animated Profile Image */}
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center w-full">

                    {/* Responsive profile image */}
                    <img className="w-full max-w-[80%] md:max-w-[350px] lg:max-w-[300px] h-auto object-contain rounded-2xl" src={aboutImg} alt="About" />
                </div>
            </motion.div>

            {/* Right Section - Animated About Text */}
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">

                    {/* Splitting ABOUT_TEXT into multiple paragraphs */}
                    {ABOUT_TEXT.split("\n").map((paragraph, index) =>(
                        <p key={index} className="max-w-xl py-1 text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* External link to the blog */}
                <div className="flex justify-center lg:justify-start">
                    <a href={ABOUT_LINK} target="_blank" className="text-blue-500 underline py-3">My Journey - University of West London Student Union Blog</a>
                </div>
            </motion.div>
      </div>
    </div>
  
    };

export default About


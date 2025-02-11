import aboutImg from "../assets/Dinesh.jpg"
import {ABOUT_TEXT} from "../constraints"

const About = () => {
    return <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justofy-center">
                    <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-2xl" src={aboutImg} alt="About" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </div>
      </div>
    </div>
  
  };

export default About


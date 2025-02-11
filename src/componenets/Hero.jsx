import {HERO_CONTENT} from "../constraints"; //Importing hero section content
import Profile from "../assets/Dinesh.jpg"; //Importing profile image

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">

        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Dinesh Tamang</h1>

                {/* Gradient-colored title */}
                <span className="bg-gradient-to-r from-orange-300 via-pink-500 to-purple-500 bg-clip-text text-4xl tracking-tight
                text-transparent">Software Developer
                </span>

                {/* Description text */}
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
            </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
          <img src={Profile} alt="Dinesh Tamang" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover"/>
          </div>
        </div>
    </div>
  </div>

};

export default Hero
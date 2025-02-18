import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import { FaGithub } from "react-icons/fa"; // Import GitHub Icon
import { motion } from "framer-motion"; //Import framer motion

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">

      {/* Left Section - Welcome Text with Waving Hand */}
      <div className=" text-gray-500 flex items-center text-2xl">
        Welcome to My Site 👋
      </div>

      {/* Right Section - Social Media Icons */}
      <div className="m-8 flex items-center gap-5 text-4xl text-gray-500">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/dinesh-tamang-153678268/"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-blue-600">
          <FaLinkedin/>
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Dinesh-Lopchan?tab=overview&from=2025-02-01&to=2025-02-18"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-gray-400">
          <FaGithub />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;

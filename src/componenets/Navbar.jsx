import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import { FaGithub } from "react-icons/fa"; // Import GitHub Icon
import { FaFileAlt } from "react-icons/fa"; // Custom CV icon

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-3">

      {/* Left Section - Welcome Text with Waving Hand */}
      <div className=" flex items-center text-2xl">
        Welcome to My Portfolio👋
      </div>

      {/* Right Section - Social Media Icons */}
      <div className="m-8 flex items-center gap-4 text-3xl ">
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
          className="hover:text-gray-600">
          <FaGithub />
        </a>

        {/* CV Icon with Tooltip */}
        <a
          href="/DINESH TAMANG.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <FaFileAlt />
        </a>

      </div>

    </nav>
  );
};

export default Navbar;

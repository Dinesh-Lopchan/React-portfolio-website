import logo from "../assets/Dinesh.jpg"; //Import the profile logo image
import { FaLinkedin } from "react-icons/fa"; //Import LinkedIn icon
import { FaGithub } from "react-icons/fa"; //Import GitHub Icon

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">

        {/* Left Section - Logo */}
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo"/>  
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="m-8 flex items-center gap-4 text-3xl">
            <FaLinkedin/>
            <FaGithub/> 
        </div>
    </nav>

  );
};

export default Navbar;
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Handle scroll event to update active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "technologies", "experience", "certifications", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // Check if we're at the top of the page
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !document.querySelector('.mobile-menu-button')?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Let CSS handle the positioning with scroll-margin-top
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeMobileMenu();
  };

  // Navbar links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/dinesh-tamang-153678268/",
      label: "LinkedIn Profile",
      className: "text-gray-300 hover:text-blue-400"
    },
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/Dinesh-Lopchan",
      label: "GitHub Profile",
      className: "text-gray-300 hover:text-gray-400"
    },
    {
      icon: <FaFileAlt className="text-xl" />,
      href: "/DINESH.pdf",
      label: "Download CV",
      className: "text-gray-300 hover:text-red-400"
    }
  ];

  // Add this effect to trigger animation on page load
  useEffect(() => {
    // Trigger the wave animation on page load
    const timer = setTimeout(() => {
      setHasAnimated(true);
      // Reset after the longer animation completes
      const resetTimer = setTimeout(() => setHasAnimated(false), 2000);
      return () => clearTimeout(resetTimer);
    }, 500); // Slightly longer initial delay
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-slate-900 ${
          isScrolled ? "bg-opacity-90 backdrop-blur-md shadow-lg" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Welcome
                <motion.span 
                  className="inline-block ml-2 text-yellow-400"
                  animate={hasAnimated ? 'pageLoadWave' : {}}
                  whileHover="wave"
                  variants={{
                    wave: {
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                      transition: {
                        duration: 0.8,
                        ease: "easeInOut"
                      }
                    },
                    pageLoadWave: {
                      rotate: [0, 14, -8, 14, -4, 10, 0, 14, -8, 14, -4, 10, 0],
                      transition: {
                        duration: 2,
                        ease: "easeInOut"
                      }
                    }
                  }}
                >
                  👋
                </motion.span>
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNavLink"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4 ml-4 border-l border-slate-700 pl-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${social.className}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-button p-2 rounded-md text-gray-300 hover:bg-slate-800"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-40 md:hidden border-t border-slate-800"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.id);
                      closeMobileMenu();
                    }}
                    className={`px-4 py-3 text-left rounded-lg transition-colors ${
                      activeSection === link.id
                        ? "bg-emerald-900/30 text-emerald-400"
                        : "text-gray-300 hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="flex justify-center space-x-6 pt-4 border-t border-slate-800">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors ${social.className}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add padding to account for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;

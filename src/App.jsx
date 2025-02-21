import Hero from "./componenets/Hero"; //Importing Hero  component
import Navbar from "./componenets/Navbar"; //Importing Navbar  component
import About from "./componenets/About"; //Importing About  component
import Technologies from "./componenets/Technologies"; //Importing Technologies component
import Experience from "./componenets/Experience";
import Projects from "./componenets/Projects";
import Contact from "./componenets/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-white selection:text-cyan-900 bg-slate-900">
      
      {/* Background and layering */}
      <div className="fixed top-0 -z-10 h-full w-full ">
        
        {/* Applying background gradient */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      </div>

      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar/> {/* Navbar component included here */}
        <Hero/> {/* Hero component included here */}
        <About/> {/* About component included here */}
        <Technologies/> {/* Technologies component included here */}
        <Experience/> {/* Experience component included here */}
        <Projects/> {/* Projects component included here */}
        <Contact/> {/* Contact component included here */}
      </div>  
    </div>
    
  );
};

export default App;
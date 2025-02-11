import Hero from "./componenets/Hero"; //Importing Hero  component
import Navbar from "./componenets/Navbar"; //Importing Navbar  component
import About from "./componenets/About"; //Importing About  component
import Technologies from "./componenets/Technologies"; //Importing Technologies component

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-white selection:text-cyan-900">
      
      {/* Background and layering */}
      <div className="fixed top-0 -z-10 h-full w-full">
        
        {/* Applying background gradient */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-8">
        <Navbar/> {/* Navbar component included here */}
        <Hero/> {/* Hero component included here */}
        <About/> {/* About component included here */}
        <Technologies/> {/* Technologies component included here */}
      </div>  
    </div>
    
  );
};

export default App;
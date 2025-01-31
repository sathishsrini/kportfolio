import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-black-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Combined Backgrounds */}
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Radial Gradient Background */}
        <div
          className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
        ></div>
        {/* Additional Background Elements */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Courses />
        <Contact />
      </div>
    </div>
  );
};

export default App;
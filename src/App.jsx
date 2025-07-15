import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default App;
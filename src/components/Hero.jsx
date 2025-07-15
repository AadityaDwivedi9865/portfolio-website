import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Electronics Engineer",
    "Web Developer", 
    "DSA Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-grey-900 via-grey-700 to-grey-400 overflow-hidden">
    {/* Animated background particles */}
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white text-center px-6 pt-16">
        {/* Profile section */}
        <div className="mb-8 animate-fade-in-down mt-16">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-900 to-pink-900 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
               <img src="/assets/my-image.jpg" alt="Aaditya Dwivedi"
    className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
  />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
          </div>
        </div>

        {/* Name and title */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Hi, I'm{" "}
            <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aaditya Dwivedi
            </span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium mb-6 h-12 flex items-center justify-center">
  <span className="text-red-900">I'm a </span>
  <span
    key={currentText}
    className="ml-2 text-red-900 font-semibold min-w-[200px] transition-all duration-500 slide-in-forward animate-fade-in-up"
  >
    {texts[currentText]}
  </span>
</div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-900 leading-relaxed animate-fade-in-up">
          Passionate about creating innovative web solutions and solving complex problems. 
          I thrive on solving challenging problems with clean, scalable, and modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="/contact"
            className="group px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-8 animate-fade-in-up">
          <a
            href="https://github.com/AadityaDwivedi9865"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/aaditya-dwivedi-041813284"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="mailto:adityadwivedi9865@gmail.com"
            className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDown className="text-2xl text-purple-300" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default Hero;
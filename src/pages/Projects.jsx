import ProjectCard from "../components/ProjectCard";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const Projects = () => {
  const projects = [
    
     {
  title: "A.R. Coaching Classes Chat Bot",
  description: "A chat bot for A.R. Coaching Classes, built to assist students and automate queries.",
  link: "https://aadityadwivedi9865.github.io/A.R.-Coaching-Classes-chat-Boat/",
  tech: ["React", "JavaScript", "CSS"],
  image: "/assets/chat-bot-img.jpg"
    },
    {
      title: "Astrology Insights",
      description: "A beautiful astrology platform with zodiac-based insights and personalized horoscope readings.",
      link: "https://aadityadwivedi9865.github.io/Astrology-Insights/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/astro-img.jpg"
    },
    {
      title: "Dynamic Quote Generator",
      description: "Displays random motivational quotes from an API with beautiful animations and user interactions.",
      link: "https://aadityadwivedi9865.github.io/Dynamic-Quote-Generator/",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "/assets/quote-generator-img.jpg"
    },
    {
      title: "Tic-Tac-Toe",
      description: "A simple and fun Tic-Tac-Toe game with win logic and smooth animations.",
      link: "https://aadityadwivedi9865.github.io/tic-tac-toe/",
      tech: ["JavaScript", "DOM", "CSS"],
      image: "/assets/tic-tac-img.jpg"
    },
    {
      title: "Solar System",
      description: "Visual animation of our solar system with realistic planet movements and orbits.",
      link: "https://aadityadwivedi9865.github.io/solar-system/",
      tech: ["CSS Animation", "HTML"],
      image: "https://images.unsplash.com/photo-1447433865958-f402f562b843"
    }
  ];

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-5xl font-extrabold gradient-text mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've built to showcase my skills and creativity
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-gray-600">Live</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                link={project.link}
                tech={project.tech}
                image={project.image}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto hover-lift">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <FaRocket className="text-2xl text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold gradient-text mb-4">Ready to Collaborate?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring innovative ideas to life. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/AadityaDwivedi9865"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-purple-400 text-purple-600 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

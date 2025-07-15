import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, link, tech, image }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift">
    {/* Image Container */}
    <div className="relative overflow-hidden h-56">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Overlay with links */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaExternalLinkAlt className="text-lg" />
          </a>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-between items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span>View Project</span>
          <FaExternalLinkAlt className="ml-2 text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
        
        <div className="text-sm text-gray-500">
          <span className="inline-flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live Demo
          </span>
        </div>
      </div>
    </div>

    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45 translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
  </div>
);

export default ProjectCard;

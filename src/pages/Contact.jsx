import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-5xl font-extrabold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm open to work and collaborations! Feel free to reach out through any of the platforms below or send me a message directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a 
                      href="mailto:adityadwivedi9865@gmail.com" 
                      className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                    >
                      adityadwivedi9865@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <FaGithub className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">GitHub</h4>
                    <a 
                      href="https://github.com/AadityaDwivedi9865" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      github.com/AadityaDwivedi9865
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/aaditya-dwivedi-041813284" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 transition-colors duration-300"
                    >
                      linkedin.com/in/aaditya-dwivedi-041813284
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-orange-600">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Status</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <span className="font-medium text-gray-800">Available for</span>
                  <span className="text-green-600 font-semibold">Freelance Work</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <span className="font-medium text-gray-800">Open to</span>
                  <span className="text-blue-600 font-semibold">Collaborations</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <span className="font-medium text-gray-800">Response time</span>
                  <span className="text-purple-600 font-semibold">Within 24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold gradient-text mb-4">Let's Build Something Amazing Together!</h3>
            <p className="text-gray-600 mb-6">
              Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:adityadwivedi9865@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://github.com/AadityaDwivedi9865"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 text-purple-600 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
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

export default Contact;

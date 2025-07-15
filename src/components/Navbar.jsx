import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
   <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700 to-pink-400 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-white hover:text-green-200 transition-colors duration-300">
              <span className="text-white">Aaditya Dwivedi</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { path: '#hero', label: 'Home' },
                { path: '#about', label: 'About' },
                { path: '#projects', label: 'Projects' },
                { path: '#contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-white hover:text-green-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-200 focus:outline-none focus:text-purple-200 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { path: '#hero', label: 'Home' },
              { path: '#about', label: 'About' },
              { path: '#projects', label: 'Projects' },
              { path: '#contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 text-white hover:text-green-200 hover:bg-green-800 hover:bg-opacity-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
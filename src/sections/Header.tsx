'use client';
import { useState } from 'react';

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    smoothScrollTo(sectionId);
  };

  return <div className="flex justify-center items-center sticky top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <button 
        onClick={() => handleNavClick('hero')} 
        className={`nav-item transition-all duration-300 hover:scale-105 ${
          activeSection === 'hero' ? 'bg-white/20 text-white' : ''
        }`}
      >
        Home
      </button>
      <button 
        onClick={() => handleNavClick('projects')} 
        className={`nav-item transition-all duration-300 hover:scale-105 ${
          activeSection === 'projects' ? 'bg-white/20 text-white' : ''
        }`}
      >
        Projects
      </button>
      <button 
        onClick={() => handleNavClick('about')} 
        className={`nav-item transition-all duration-300 hover:scale-105 ${
          activeSection === 'about' ? 'bg-white/20 text-white' : ''
        }`}
      >
        About
      </button>
      <button 
        onClick={() => handleNavClick('contact')} 
        className={`nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 transition-all duration-300 hover:scale-105 ${
          activeSection === 'contact' ? 'bg-white/90' : ''
        }`}
      >
        Contact
      </button>
    </nav>
  </div>;
};

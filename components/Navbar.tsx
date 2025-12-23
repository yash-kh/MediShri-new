
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-teal-400 rounded-xl flex items-center justify-center text-white shadow-lg">
            <i className="fa-solid fa-staff-snake text-xl"></i>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">Medi<span className="text-sky-600">Shri</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-sky-600 transition-colors">Our Mission</a>
          <a href="#features" className="hover:text-sky-600 transition-colors">Platform</a>
          <a href="#ai-preview" className="hover:text-sky-600 transition-colors">AI Assistant</a>
        </div>
        <a 
          href="#waitlist" 
          className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-sky-100 active:scale-95"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest animate-bounce">
          Coming Online Soon
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Redefining Healthcare <br />
          <span className="gradient-text">Through Technology</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          MediShri is building the next generation of healthcare ecosystems. Personalized diagnostics, AI-driven insights, and seamless patient care are coming to your fingertips.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#waitlist" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center">
            Get Early Access
            <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
          </a>
          <a href="#ai-preview" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center">
            Try AI Preview
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">24/7</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Availability</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">100%</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Secure Records</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">AI</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Assisted Care</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">01</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Unified Platform</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

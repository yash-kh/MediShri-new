
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
              <i className="fa-solid fa-staff-snake"></i>
            </div>
            <span className="text-xl font-bold text-white">MediShri</span>
          </div>
          <p className="max-w-sm mb-6 leading-relaxed">
            Bridging the gap between medical expertise and technological innovation. Providing healthcare solutions for the 21st century.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Legal & Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li><i className="fa-solid fa-envelope mr-2"></i> hello@medishri.com</li>
            <li><i className="fa-solid fa-phone mr-2"></i> +1 (888) MEDI-SHRI</li>
            <li><i className="fa-solid fa-location-dot mr-2"></i> Innovation Hub, Silicon Valley</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} MediShri Health Tech. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

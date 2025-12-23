
import React, { useState } from 'react';
import { AppStatus } from '../types';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus(AppStatus.LOADING);
    // Simulate API call
    setTimeout(() => {
      setStatus(AppStatus.SUCCESS);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 bg-sky-600 px-6 relative overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the healthcare revolution.</h2>
        <p className="text-sky-100 text-lg mb-10 max-w-xl mx-auto">
          Be among the first to experience MediShri. We're launching in limited beta soon. Reserved spots are filling fast.
        </p>

        {status === AppStatus.SUCCESS ? (
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-sky-100">Keep an eye on your inbox for our early access invite.</p>
            <button 
              onClick={() => setStatus(AppStatus.IDLE)} 
              className="mt-6 text-sm text-sky-200 underline hover:text-white"
            >
              Sign up another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all"
            />
            <button 
              type="submit"
              disabled={status === AppStatus.LOADING}
              className="bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold hover:bg-sky-50 transition-all flex items-center justify-center disabled:opacity-70 active:scale-95 shadow-xl"
            >
              {status === AppStatus.LOADING ? (
                <i className="fa-solid fa-circle-notch fa-spin"></i>
              ) : (
                'Secure Access'
              )}
            </button>
          </form>
        )}
        <p className="mt-8 text-sky-200 text-sm">
          <i className="fa-solid fa-lock mr-2"></i> We value your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

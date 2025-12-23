
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    icon: 'fa-solid fa-laptop-medical',
    title: 'Smart Consultations',
    description: 'Connect with top-tier healthcare professionals through our ultra-low latency tele-health platform.'
  },
  {
    icon: 'fa-solid fa-dna',
    title: 'Precision Diagnostics',
    description: 'Leveraging AI to analyze health data and provide hyper-personalized treatment recommendations.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Encrypted Records',
    description: 'Your health data is your own. We use military-grade encryption to keep your medical history safe.'
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Vitals Monitoring',
    description: 'Integration with wearable devices for real-time tracking of your cardiovascular and metabolic health.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need for holistic care</h2>
          <p className="text-slate-600 max-w-xl mx-auto">We are consolidating the fragmented healthcare landscape into a single, intuitive experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-50 transition-all group">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all">
                <i className={f.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React, { useState, useRef, useEffect } from 'react';
import { getHealthInsight } from '../services/geminiService';
import { ChatMessage, AppStatus } from '../types';

const AIPreview: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm MediShri AI. While we're putting the finishing touches on our main platform, I'm here to answer your general health queries. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === AppStatus.LOADING) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setStatus(AppStatus.LOADING);

    const aiResponse = await getHealthInsight(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setStatus(AppStatus.IDLE);
  };

  return (
    <section id="ai-preview" className="py-24 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sky-600 font-bold text-sm tracking-widest uppercase">Prototype Preview</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Ask MediShri AI</h2>
          <p className="text-slate-600 mt-4">Experience the intelligence behind our upcoming patient care modules.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-slate-900 p-4 flex items-center space-x-3">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white">
              <i className="fa-solid fa-robot text-xs"></i>
            </div>
            <div>
              <p className="text-white text-sm font-bold">MediShri AI Assistant</p>
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">Systems Operational</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm ${
                  m.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {m.content.split('\n').map((line, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {status === AppStatus.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex space-x-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., What are the early signs of high blood pressure?"
              className="flex-1 bg-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              disabled={status === AppStatus.LOADING}
            />
            <button 
              type="submit"
              disabled={status === AppStatus.LOADING || !input.trim()}
              className="bg-sky-600 text-white p-3 rounded-xl hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
        
        <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-semibold">
          AI information is for educational purposes only. Always consult a medical professional.
        </p>
      </div>
    </section>
  );
};

export default AIPreview;

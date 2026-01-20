
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
          <span className="flex w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
          <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">The Future of Education is Here</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Master Any Subject with Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Personal AI Mentor
          </span>
        </h1>
        
        <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lumina adapts to your learning style, providing 24/7 personalized tutoring across 
          Science, Math, Languages, and Humanities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl hover:bg-indigo-700 hover:-translate-y-1 transition-all text-lg">
            Start Your First Lesson
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl shadow-md hover:bg-slate-50 transition-all text-lg">
            Watch Demo
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white/40">
          <img 
            src="https://picsum.photos/id/180/1600/900" 
            alt="AI Tutoring Platform Interface" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex items-end p-8">
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i+10}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-700">Joined by <span className="font-bold text-indigo-600">12,000+</span> active students this week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

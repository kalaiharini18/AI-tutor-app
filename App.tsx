
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <InteractiveDemo />
      
      {/* Testimonials Section Placeholder */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Loved by Students Globally</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "High School Senior",
                text: "Lumina helped me jump two letter grades in Calculus. The step-by-step explanations are better than my real textbook!",
                img: "https://picsum.photos/id/64/100/100"
              },
              {
                name: "David Chen",
                role: "Computer Science Major",
                text: "Debugging with Lumina is a game changer. It explains the 'why' behind the errors rather than just giving me the fix.",
                img: "https://picsum.photos/id/91/100/100"
              },
              {
                name: "Elena Rodriguez",
                role: "Lifelong Learner",
                text: "I'm learning French at 50, and having a tutor available at 11 PM when I'm free is exactly what I needed.",
                img: "https://picsum.photos/id/103/100/100"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl text-left border border-slate-200">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full shadow-md" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-indigo-600 font-semibold">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to reach your <br />full potential?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join thousands of students who are already mastering new skills every day. 
              Start your journey today for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-slate-50 shadow-xl transition-all">
                Get Started Now
              </button>
              <button className="px-10 py-4 bg-indigo-700 text-white font-bold rounded-2xl hover:bg-indigo-800 transition-all border border-indigo-500/50">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;

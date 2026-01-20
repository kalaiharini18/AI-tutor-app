
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string; color: string }> = ({ title, desc, icon, color }) => (
  <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 text-2xl`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Why Lumina?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Traditional tutoring is expensive and limited. Lumina offers the same quality instruction 
            at a fraction of the cost, available whenever you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Personalized Path" 
            desc="Our AI analyzes your gaps and creates a unique curriculum tailored to your goals." 
            icon="🎯"
            color="bg-indigo-100 text-indigo-600"
          />
          <FeatureCard 
            title="Socratic Learning" 
            desc="Lumina doesn't just give answers. It guides you to understand the 'why' behind every concept." 
            icon="🧠"
            color="bg-blue-100 text-blue-600"
          />
          <FeatureCard 
            title="Any Subject, Any Level" 
            desc="From elementary math to PhD-level quantum mechanics, Lumina's knowledge base is vast." 
            icon="📚"
            color="bg-purple-100 text-purple-600"
          />
          <FeatureCard 
            title="Real-time Feedback" 
            desc="Upload your homework or essays and get instant, constructive feedback to improve your work." 
            icon="⚡"
            color="bg-emerald-100 text-emerald-600"
          />
          <FeatureCard 
            title="Multilingual Tutor" 
            desc="Learn in your native language or practice new ones with advanced voice recognition." 
            icon="🌐"
            color="bg-orange-100 text-orange-600"
          />
          <FeatureCard 
            title="Progress Tracking" 
            desc="Visual analytics show you exactly how much you've improved over time." 
            icon="📈"
            color="bg-rose-100 text-rose-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Calendar, Mail, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-notion-text font-sans selection:bg-notion-blue/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-notion-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
              <span className="font-bold text-xs">N</span>
            </div>
            Noma Mail
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Product</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Download</a>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <button 
              onClick={() => navigate('/app')}
              className="text-gray-500 hover:text-black transition-colors"
            >
              Log in
            </button>
            <button 
              onClick={() => navigate('/app')}
              className="bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 transition-all shadow-sm"
            >
              Get Noma free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-neutral-900 leading-[1.1]">
            Email, reimagined for <br className="hidden md:block"/> your modern workflow.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Beautifully designed, lightning fast, and integrated with your calendar. 
            Experience the clarity of a clean inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
             <button 
              onClick={() => navigate('/app')}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium text-lg flex items-center gap-2 hover:bg-neutral-800 hover:scale-105 transition-all shadow-lg shadow-black/10"
            >
              Try Noma Mail <ArrowRight size={18} />
            </button>
            <span className="text-sm text-gray-400">Available on Mac & Web</span>
          </div>

          {/* Product Interface Mockup */}
          <div className="relative rounded-xl border border-notion-border shadow-2xl overflow-hidden bg-white max-w-5xl mx-auto aspect-[16/10] group">
             {/* Fake Browser UI Header */}
             <div className="h-8 bg-[#F7F7F5] border-b border-notion-border flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-medium">Inbox - Noma Mail</div>
             </div>
             
             {/* Mock App Content */}
             <div className="flex h-full text-left">
                {/* Mock Sidebar */}
                <div className="w-48 border-r border-notion-border bg-[#F7F7F5] p-4 hidden md:block">
                   <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-gray-700">
                      <Mail size={16} /> alex@noma.com
                   </div>
                   <div className="space-y-1">
                      <div className="flex items-center gap-2 px-2 py-1.5 bg-gray-200/60 rounded text-sm font-medium text-black">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div> Inbox
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-gray-500 text-sm">
                        <Calendar size={14} /> Today
                      </div>
                   </div>
                </div>
                
                {/* Mock List */}
                <div className="w-72 border-r border-notion-border bg-white flex flex-col">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`p-4 border-b border-notion-border/50 ${i === 1 ? 'bg-blue-50/50' : ''}`}>
                         <div className="flex justify-between mb-1">
                            <div className="w-20 h-3 bg-gray-200 rounded"></div>
                            <div className="w-8 h-3 bg-gray-100 rounded"></div>
                         </div>
                         <div className="w-32 h-4 bg-gray-800 rounded mb-2 opacity-80"></div>
                         <div className="w-full h-3 bg-gray-100 rounded mb-1"></div>
                         <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                      </div>
                    ))}
                </div>

                {/* Mock Details */}
                <div className="flex-1 bg-white p-8">
                   <div className="w-12 h-12 bg-gray-100 rounded-full mb-4"></div>
                   <div className="w-3/4 h-8 bg-black rounded mb-6 opacity-90"></div>
                   <div className="space-y-3">
                      <div className="w-full h-4 bg-gray-100 rounded"></div>
                      <div className="w-full h-4 bg-gray-100 rounded"></div>
                      <div className="w-5/6 h-4 bg-gray-100 rounded"></div>
                      <div className="w-4/5 h-4 bg-gray-100 rounded"></div>
                   </div>
                   
                   <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 flex gap-4">
                      <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center text-blue-600">
                        <Calendar size={16}/>
                      </div>
                      <div>
                        <div className="w-32 h-4 bg-blue-200 rounded mb-1"></div>
                        <div className="w-24 h-3 bg-blue-100 rounded"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="py-20 bg-white border-t border-notion-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
           <div className="space-y-4">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                 <Zap size={20} className="text-gray-600" />
              </div>
              <h3 className="font-semibold text-lg">Speed & Reliability</h3>
              <p className="text-gray-500 leading-relaxed">Built for speed. Search your entire history in milliseconds and navigate entirely with keyboard shortcuts.</p>
           </div>
           <div className="space-y-4">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                 <Check size={20} className="text-gray-600" />
              </div>
              <h3 className="font-semibold text-lg">Focus Mode</h3>
              <p className="text-gray-500 leading-relaxed">Snooze emails, set reminders, and group notifications to keep your flow state uninterrupted.</p>
           </div>
           <div className="space-y-4">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                 <Calendar size={20} className="text-gray-600" />
              </div>
              <h3 className="font-semibold text-lg">Calendar Integration</h3>
              <p className="text-gray-500 leading-relaxed">See your schedule alongside your messages. Accept invites and propose times without leaving your inbox.</p>
           </div>
        </div>
      </section>

      <footer className="py-12 border-t border-notion-border bg-[#F7F7F5]">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
           © 2024 Noma Mail Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
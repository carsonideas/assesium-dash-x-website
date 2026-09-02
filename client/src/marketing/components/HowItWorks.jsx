

import React, { useState } from 'react';

const HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="how-it-works" className="home-section home-how-it-works-section assesium-how-it-works relative mt-4 sm:mt-20 pb-12">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Badge above title */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 mb-4">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text ">
              Simple & Efficient
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Four steps to effortless and accurate exam marking.
          </p>
          
          {/* Decorative underline */}
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 rounded-full"></div>
        </div>
        
        {/* Enhanced connection line between cards */}
        <div className="hidden md:block absolute left-1/2 top-[320px] w-[calc(100%-200px)] h-0.5 -translate-x-1/2 -z-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 opacity-50 rounded-full animate-pulse"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5 relative">
          {/* Step 1 - Import */}
          <div 
            className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2 group overflow-hidden"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Shimmer effect on hover */}
            <div className={`absolute inset-0 shimmer-effect transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
            

            
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 z-10">
              1
            </span>
            
            {/* Enhanced icon illustration */}
            <div className="mb-4 mt-2 flex justify-center relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-600/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <svg className="w-8 h-8 text-violet-600 dark:text-violet-400 relative z-10 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                
                {/* Orbiting dots */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-violet-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-indigo-500 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold tracking-tight relative z-10">Import</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 relative z-10">Upload handwritten exams, documents, or assignments.</p>
            
            {/* Enhanced corner accent with animation */}
            <div className="absolute bottom-2 right-2 w-16 h-16 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
              <div className="w-full h-full border-r-2 border-b-2 border-violet-500 rounded-br-2xl"></div>
            </div>
            
            {/* Progress indicator dots */}
            <div className="absolute bottom-3 left-5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-300/30"></div>
            </div>
          </div>

          {/* Step 2 - Assist */}
          <div 
            className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 group overflow-hidden"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-0 shimmer-effect transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}></div>
            

            
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 z-10">
              2
            </span>
            
            <div className="mb-4 mt-2 flex justify-center relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-600/10 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                
                {/* Enhanced sparkle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 left-0 w-1 h-1 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                
                {/* Brain wave effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-indigo-400/30 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold tracking-tight relative z-10">Assist</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 relative z-10">AI analyzes and marks handwritten exams, documents, and assignments.</p>
            
            <div className="absolute bottom-2 right-2 w-16 h-16 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
              <div className="w-full h-full border-r-2 border-b-2 border-indigo-500 rounded-br-2xl"></div>
            </div>
            
            <div className="absolute bottom-3 left-5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/50"></div>
            </div>
          </div>

          {/* Step 3 - Review */}
          <div 
            className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 group overflow-hidden"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-0 shimmer-effect transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}></div>
            

            
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 z-10">
              3
            </span>
            
            <div className="mb-4 mt-2 flex justify-center relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-600/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <svg className="w-8 h-8 text-violet-600 dark:text-violet-400 relative z-10 transition-all duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                
                {/* Checkmark animation effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgb(167 139 250 / 0.2)" strokeWidth="2">
                      <animate attributeName="r" from="30" to="48" dur="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.8" to="0" dur="1s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold tracking-tight relative z-10">Review</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 relative z-10">Review AI-generated marks and feedback, make adjustments as needed.</p>
            
            <div className="absolute bottom-2 right-2 w-16 h-16 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
              <div className="w-full h-full border-r-2 border-b-2 border-violet-500 rounded-br-2xl"></div>
            </div>
            
            <div className="absolute bottom-3 left-5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
            </div>
          </div>

          {/* Step 4 - Sync */}
          <div 
            className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 group overflow-hidden"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-0 shimmer-effect transition-opacity duration-300 ${hoveredCard === 4 ? 'opacity-100' : 'opacity-0'}`}></div>
            

            
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 z-10">
              4
            </span>
            
            <div className="mb-4 mt-2 flex justify-center relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-600/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10 transition-transform duration-500 group-hover:rotate-180" style={{animationDuration: '3s'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                
                {/* Sync pulse effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-emerald-400/40 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-teal-400/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold tracking-tight relative z-10">Sync</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 relative z-10">Automatically update marks to the system for students, teachers, and institutions, and generate comprehensive reports.</p>
            
            <div className="absolute bottom-2 right-2 w-16 h-16 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
              <div className="w-full h-full border-r-2 border-b-2 border-indigo-500 rounded-br-2xl"></div>
            </div>
            
            <div className="absolute bottom-3 left-5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        {/* Enhanced visual flow arrows for desktop */}
        <svg className="hidden md:block absolute top-[320px] left-0 w-full h-12 -z-10 pointer-events-none" style={{transform: 'translateY(-50%)'}}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="rgb(139 92 246 / 0.5)" />
            </marker>
            <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(139 92 246 / 0.1)" />
              <stop offset="100%" stopColor="rgb(139 92 246 / 0.5)" />
            </linearGradient>
          </defs>
          <path d="M 200 24 Q 280 24 340 24" stroke="url(#arrowGradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M 540 24 Q 620 24 680 24" stroke="url(#arrowGradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M 880 24 Q 960 24 1020 24" stroke="url(#arrowGradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Success metric or completion indicator */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10 border border-violet-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Average completion time:</span>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text">
              Under 2 minutes
            </span>
          </div>
        </div>

        
        {/* Call to action */}
        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Start Free Trial
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
            No credit card required • 14-day free trial
          </p>
        </div> */}


      </div>
    </section>
  );
};

export default HowItWorks;
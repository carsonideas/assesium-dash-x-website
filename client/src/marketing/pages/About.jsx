
import React, { useState, useEffect } from 'react'
import '../App.css'
import FinalCTA from '../components/FinalCTA'
import CTA from '../components/CTA'
// Import images
import companyStoryImg from '../assets/images/company-story.png'
import innovationLabImg from '../assets/images/innovation-lab.png'
import awardsRecognitionImg from '../assets/images/awards-recognition.png'
// import globalPresenceImg from '../assets/images/blog-author-avatar.png'

import globalPresenceImg from '../assets/images/blog-author-avatar.png'



function About() {
  const [, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(savedTheme)
  }, [])


  return (
    <div className="about-route antialiased text-zinc-100 bg-[#0a0a12]" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 hero-section pt-20 pb-16">
        <div className="gradient-bg"></div>
        <div className="glass-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-violet-300">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7z"></path>
                </svg>
                Our Story
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Reimagining how<br />
              <span className="text-violet-400">ideas come to life</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300">
              We believe that assessment should empower learning, not hinder it. Assesium was born from the vision of creating a seamless bridge between AI technology and educational excellence, revolutionizing how exams are marked and students are evaluated.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative z-10 py-20 light-gradient-1 light-glass-orbs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
            // className="floating"
            >
              <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src={companyStoryImg} alt="Assesium team working together" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
                Founded on the belief that thinking should be effortless
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  In 2023, our founders—former researchers from Stanford and MIT—recognized a fundamental problem: brilliant minds were being held back by clunky, outdated note-taking tools that couldn't keep up with the speed of thought.
                </p>
                <p>
                  We set out to build something different. Not just another note app, but an intelligent companion that understands context, anticipates needs, and seamlessly connects ideas across time and space.
                </p>
                <p>
                  Today, Assesium serves thousands of researchers, writers, students, and professionals who demand more from their tools. We're just getting started.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white stat-counter">50K+</div>
                  <div className="text-sm text-zinc-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white stat-counter">1M+</div>
                  <div className="text-sm text-zinc-400">Notes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white stat-counter">99.9%</div>
                  <div className="text-sm text-zinc-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





<section className="relative z-10 py-20 light-gradient-2 animated-mesh">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
        Our mission & values
      </h2>
      <p className="text-zinc-400 max-w-2xl mx-auto">
        We're guided by principles that put human creativity and privacy at the center of everything we build.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Privacy First */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5">
            <img 
              src="https://talent500.com/blog/wp-content/uploads/sites/42/2023/10/Privacy-vs-Security-blog.png" 
              alt="Privacy Protection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 极速 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 极速 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
            <p className="text-zinc-400 text-sm">
              Your thoughts are yours alone. We use end-to-end encryption and zero-knowledge architecture to ensure your ideas remain private and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Human-Centered AI */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse h-full">
          <div className="md:w-2/5">
            <img 
              src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/scientificallyprovencreativityboostersyouveprobablyneverheardof.jpg" 
              alt="Human AI Collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="M12 8V极速H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 极速v2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Human-Centered AI</h3>
            <p className="text-zinc-400 text-sm">
              AI should amplify human creativity, not replace it. Our intelligent features are designed to enhance your natural thinking process.
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa极速by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Accessibility" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Accessibility</h3>
            <p className="text-zinc-400 text-sm">
              Great ideas can come from anyone, anywhere. We build inclusive tools that work for people of all abilities and backgrounds.
            </p>
          </div>
        </div>
      </div>

      {/* Open Innovation */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse h-full">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Open Innovation" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-b极速 from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/s极速" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Open Innovation</h3>
            <p className="text-zinc-400 text-sm">
              We believe in the power of community and collaboration. Our platform integrates with the tools you already love and use.
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Sustainability" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="M7 20h10"></path>
                <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.7 4.3-1.4 1-1.1 1.6-2.7 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
            <p className="text-zinc-400 text-sm">
              We're committed to building a sustainable future. Our infrastructure runs on renewable energy and we offset our carbon footprint.
            </p>
          </div>
        </div>
      </div>

      {/* Excellence */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse h-full">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3极速fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&极速fit=crop&w=500&q=80" 
              alt="Excellence" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
            <p className="text-zinc-400 text-sm">
              We strive for excellence in everything we do, from the smallest interaction to the biggest feature. Quality is never an accident.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      
      {/* Company Timeline */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Our journey
            </h2>
            <p className="text-zinc-400">
              From a simple idea to a revolutionary platform.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 to-indigo-600"></div>

            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="timeline-content p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">The Beginning</h4>
                    <p className="text-zinc-400 text-sm mb-2">Founded by Alex Chen and Maria Rodriguez in a small San Francisco apartment.</p>
                    <div className="text-violet-400 text-sm font-medium">2020</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8">
                  <div className="timeline-content p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">First Beta Launch</h4>
                    <p className="text-zinc-400 text-sm mb-2">Released our first beta version to 100 early adopters and received overwhelming positive feedback.</p>
                    <div className="text-indigo-400 text-sm font-medium">2021</div>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="timeline-content p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Series A Funding</h4>
                    <p className="text-zinc-400 text-sm mb-2">Raised $10M Series A led by Sequoia Capital to accelerate product development.</p>
                    <div className="text-blue-400 text-sm font-medium">2022</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8">
                  <div className="timeline-content p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">AI Integration</h4>
                    <p className="text-zinc-400 text-sm mb-2">Launched AI-powered features that revolutionized how users interact with their notes.</p>
                    <div className="text-emerald-400 text-sm font-medium">2023</div>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="timeline-content p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Global Expansion</h4>
                    <p className="text-zinc-400 text-sm mb-2">Reached 500,000+ users across 150+ countries and opened offices in London and Singapore.</p>
                    <div className="text-orange-400 text-sm font-medium">2024</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8">
                  <div className="timeline-content p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">The Future</h4>
                    <p className="text-zinc-400 text-sm mb-2">Continuing to innovate and expand our platform to serve millions of users worldwide.</p>
                    <div className="text-violet-400 text-sm font-medium">2025 & Beyond</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Join our mission
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for building tools that help people think better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="job-opening p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Senior Frontend Engineer</h4>
                  <p className="text-zinc-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-4">Build beautiful, responsive interfaces that millions of users love. Work with React, TypeScript, and modern web technologies.</p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs">Full-time</span>
                <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs">Remote OK</span>
              </div>
            </div>

            <div className="job-opening p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">AI/ML Engineer</h4>
                  <p className="text-zinc-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-4">Develop cutting-edge AI features that understand and enhance user productivity. Work with LLMs, NLP, and machine learning.</p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs">Full-time</span>
                <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">Hybrid</span>
              </div>
            </div>

            <div className="job-opening p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Product Designer</h4>
                  <p className="text-zinc-400 text-sm">London, UK</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-4">Design intuitive experiences that make complex workflows feel simple. Lead user research and create beautiful, functional interfaces.</p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs">Full-time</span>
                <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs">Remote OK</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75">
              View all openings
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
                Innovation at our core
              </h2>
              <div className="space-y-4 text-zinc-300 mb-8">
                <p>
                  Our research lab is where the future of note-taking is born. We're constantly exploring new frontiers in AI, natural language processing, and human-computer interaction.
                </p>
                <p>
                  From advanced neural networks that understand context to breakthrough encryption methods that protect privacy, we're pushing the boundaries of what's possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white">Advanced AI Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white">Privacy-Preserving Technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white">User Experience Innovation</span>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src={innovationLabImg} alt="Assesium innovation laboratory" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Recognition & Awards
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our commitment to innovation and excellence has been recognized by industry leaders and organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Awards Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* TechCrunch Award */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M14 9h1.5a2.5 2.5 0 0 1 0 5H14"></path>
                        <path d="M6 9v6"></path>
                        <path d="M14 9v6"></path>
                        <path d="M6 15h8"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">TechCrunch Startup Battlefield Winner</h3>
                      <p className="text-violet-400 text-sm font-medium">2024</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Recognized as the most innovative productivity startup at TechCrunch Disrupt 2024.
                  </p>
                </div>

                {/* Product Hunt Award */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Product Hunt #1 Product of the Day</h3>
                      <p className="text-violet-400 text-sm font-medium">2024</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Topped Product Hunt with over 2,000 upvotes and 500+ comments from the community.
                  </p>
                </div>

                {/* Fast Company Award */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Fast Company Most Innovative Companies</h3>
                      <p className="text-violet-400 text-sm font-medium">2024</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Listed among the top 10 most innovative companies in the productivity software category.
                  </p>
                </div>

                {/* G2 Award */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M9 12l2 2 4-4"></path>
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.22.45 4.56 1.23"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">G2 Leader in Note-Taking Software</h3>
                      <p className="text-violet-400 text-sm font-medium">2024</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Ranked #1 in user satisfaction and market presence in G2's quarterly report.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards Image */}
            <div 
            // className="floating"
            >
              <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src={awardsRecognitionImg} alt="Awards and recognition trophies" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global reach, local impact */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Global reach, local impact
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From our headquarters in San Francisco to users around the world, Assesium is making productivity accessible to everyone, everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Stats and Offices Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-sm text-zinc-400">Countries</div>
                  <div className="text-xs text-zinc-500 mt-1">Active users worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">25</div>
                  <div className="text-sm text-zinc-400">Languages</div>
                  <div className="text-xs text-zinc-500 mt-1">Supported in Assesium</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">5</div>
                  <div className="text-sm text-zinc-400">Offices</div>
                  <div className="text-xs text-zinc-500 mt-1">Across 3 continents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-zinc-400">Support</div>
                  <div className="text-xs text-zinc-500 mt-1">Around the clock</div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* San Francisco */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">San Francisco</h3>
                  <p className="text-violet-400 text-sm font-medium mb-3">Headquarters</p>
                  <p className="text-zinc-300 text-sm">
                    Our main hub for product development, engineering, and company leadership.
                  </p>
                </div>

                {/* London */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">London</h3>
                  <p className="text-violet-400 text-sm font-medium mb-3">European Operations</p>
                  <p className="text-zinc-300 text-sm">
                    Supporting our European customers with local sales and customer success teams.
                  </p>
                </div>

                {/* Singapore */}
                <div className="p-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Singapore</h3>
                  <p className="text-violet-400 text-sm font-medium mb-3">Asia-Pacific Hub</p>
                  <p className="text-zinc-300 text-sm">
                    Expanding our presence in the fast-growing Asian markets with dedicated teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Presence Image */}
            <div 
            // className="floating"
            >
              <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 p-1 ">
                <img src={globalPresenceImg} alt="Global presence world map" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Our journey
            </h2>
            <p className="text-zinc-400">
              From a simple idea to a revolutionary platform.
            </p>
          </div>

          <div className="space-y-12 pl-8">
            <div className="timeline-item">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-violet-400">2023 Q1</span>
                  <h3 className="text-xl font-semibold text-white">The Beginning</h3>
                </div>
                <p className="text-zinc-300">
                  Founded by AI researchers with a vision to revolutionize note-taking. Initial prototype development begins.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-violet-400">2023 Q3</span>
                  <h3 className="text-xl font-semibold text-white">Private Beta</h3>
                </div>
                <p className="text-zinc-300">
                  Launch private beta with 50 selected users. Gather feedback and iterate on core features.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-violet-400">2024 Q1</span>
                  <h3 className="text-xl font-semibold text-white">Public Launch</h3>
                </div>
                <p className="text-zinc-300">
                  Official public launch with AI-powered features. Reach 10,000 users in the first month.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-violet-400">2024 Q4</span>
                  <h3 className="text-xl font-semibold text-white">Series A</h3>
                </div>
                <p className="text-zinc-300">
                  Raised $15M Series A to accelerate growth and expand our team of world-class engineers.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-violet-400">2025</span>
                  <h3 className="text-xl font-semibold text-white">Global Expansion</h3>
                </div>
                <p className="text-zinc-300">
                  Expanding internationally and building the future of intelligent note-taking for millions of users.
                </p>
              </div>
              
            </div>
            
          </div>
          
        </div>
        {/* <CTA/> */}
        {/* <FinalCTA/> */}
        
      </section>
      <CTA/>
      
    
      
    </div>
    
  )
  
}


export default About;

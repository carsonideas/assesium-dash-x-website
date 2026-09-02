import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import person1 from '../assets/people_images/person1.jpg';
import person2 from '../assets/people_images/person2.jpg';
import person3 from '../assets/people_images/person3.jpg';
import person4 from '../assets/people_images/person4.jpg';
import AppPreview from './AppPreview';

const Hero = () => {
  return (
    <section className="relative z-10 hero-section">
      <div className="gradient-bg"></div>
      <div className="glass-overlay"></div>
      
      <div className="relative max-w-6xl sm:px-6 lg:px-8 sm:pt-16 mt-0 mr-auto mb-0 ml-auto pt-0 pr-0 pl-0 hero-content">
        <div className="flex flex-col text-center mr-auto mb-30 ml-auto space-y-6 items-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
              New: AI-Powered Exam Marking is Here!
            </span>
          </div>

          <h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight">
            Revolutionizing Assessments, Instantly
          </h1>
          <p className="max-w-2xl sm:text-lg text-base text-zinc-300 mt-0">
            Assesium is an AI exam marking platform that helps teachers, parents, and institutions mark exams, track student performance, and more.
          </p>

          <div className="flex gap-3 mt-8 mb-0 pb-[60px] items-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75"
              style={{transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}}
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </a>
            <a 
              href="/dashboard" 
              className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-lg"
            >
              <Play className="h-4 w-4" />
              Watch demo
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              <img src={person1} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              <img src={person2} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              <img src={person3} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              <img src={person4} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
            </div>
            <span className="text-sm text-zinc-300">Trusted by educators and institutions worldwide</span>
          </div>
        </div>

        <AppPreview />
      </div>
    </section>
  );
};

export default Hero;


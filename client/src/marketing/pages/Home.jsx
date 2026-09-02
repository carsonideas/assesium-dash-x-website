
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
// import Homefeaturethink from '@/components/Homefeaturethink';
import {
  ArrowRight,
  Play,
  Target,
  ShieldCheck,
  Lock,
  Cpu,
  Laptop,
  Smartphone,
  Tablet,
  Cloud,
  Wand2,
  Download,
  RefreshCcw,
  CheckCircle2,
  BadgeCheck,
  Server,
  ChevronDown,
  CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import person1 from '../assets/people_images/person1.jpg';
import person2 from '../assets/people_images/person2.jpg';
import person3 from '../assets/people_images/person3.jpg';
import person4 from '../assets/people_images/person4.jpg';


import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';

const Hero = () => {
  const [showTrustedGlass, setShowTrustedGlass] = React.useState(true);
  const [isLightMode, setIsLightMode] = React.useState(() => document.documentElement.classList.contains('light'));

  React.useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsLightMode(root.classList.contains('light'));
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-section home-hero-section relative z-10 hero-section">
      <div className="gradient-bg"></div>
      <div className="glass-overlay"></div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 sm:pt-16 pt-8 hero-content">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
              New: AI-Powered Exam Marking is Here!
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Transform Education with Intelligent Assessment
          </h1>
          <p className="max-w-2xl sm:text-lg text-base text-zinc-300 mt-0">
            Assesium is the comprehensive AI exam marking platform that provides real-time marking, detailed reporting, scheduling, tutoring services, and community collaboration for teachers, students, and institutions worldwide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:duration-75"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                boxShadow: '0 8px 16px -4px rgba(139, 92, 246, 0.25)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </Link>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-lg"
            >
              <Play className="h-4 w-4" />
              Watch demo
            </a>
          </div>
          <div className={`${isLightMode && showTrustedGlass ? 'metric-theme-toggle' : 'hero-trusted-by-plain'} hero-trusted-by relative mx-auto my-4 flex w-fit max-w-full items-center justify-center px-4 py-2 sm:my-5 sm:px-5`}>
            <div className="hero-trusted-by-content flex items-center justify-center gap-3">
              <div className="flex shrink-0 -space-x-3">
                <img src={person1} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
                <img src={person2} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
                <img src={person3} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
                <img src={person4} alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              </div>
              <span className="hero-trusted-by-label whitespace-nowrap text-center text-xs font-semibold leading-5 sm:text-sm">Trusted by teachers, institutions, and educational systems globally</span>
            </div>
            {isLightMode && (
              <button
                type="button"
                onClick={() => setShowTrustedGlass((current) => !current)}
                className="metric-theme-toggle hero-trusted-by-toggle inline-flex h-8 w-8 shrink-0 items-center justify-center p-0"
                aria-label={showTrustedGlass ? 'Remove trusted-by glass container' : 'Show trusted-by glass container'}
                title={showTrustedGlass ? 'Remove glass container' : 'Show glass container'}
              >
                {showTrustedGlass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>

        <div className="relative mt-4 sm:mt-6">
          {/* Glow */}
          <div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-indigo-500/30 blur-2xl"></div>

          <section
            className="home-dashboard relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/5 overflow-hidden text-white bg-white/5 border-slate-50/10 border rounded-2xl backdrop-blur-xl"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'
            }}
          >
            {/* Sidebar (icons only) */}
            <nav className="hidden sm:flex flex-col absolute inset-y-0 left-0 w-14 ring-1 ring-white/10 z-10 border-slate-50/0 border-r pt-4 pr-2 pb-4 pl-2 backdrop-blur items-center justify-between" aria-label="Primary">
              <div className="flex flex-col gap-3 items-center">
                <button type="button" className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20 shadow-lg shadow-violet-900/25 flex items-center justify-center" title="Home" aria-label="Home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-asterisk w-5 h-5 text-white" />
                </button>
                <div className="h-px w-8 bg-white/10"></div>
                <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Search" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5" />
                </button>
                <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="New Exam" aria-label="New Exam">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-5 h-5" />
                </button>
                <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Settings" aria-label="Settings">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Profile" aria-label="Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5" />
                </button>
              </div>
            </nav>

            {/* Main content area */}
            <div className="flex min-h-[400px] min-w-0 sm:ml-14 sm:min-h-[500px]">
              {/* Note list */}
              <div className="w-full shrink-0 border-r border-white/10 bg-white/[0.02] backdrop-blur sm:w-80">
                <div className="p-4 border-b border-white/10">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search exams and assessments..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                    />
                  </div>
                </div>

                <div className="p-2">
                  <div className="space-y-1">
                    <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-white">Math Final Exam - Grade 12</h3>
                        <span className="text-xs text-white/60">2m ago</span>
                      </div>
                      <p className="text-xs text-white/70 line-clamp-2">AI marking completed with detailed performance analytics and improvement recommendations.</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="inline-flex items-center gap-1 text-xs text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                          Active
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-white/90">English Essay Assessment - A-Level</h3>
                        <span className="text-xs text-white/60">1h ago</span>
                      </div>
                      <p className="text-xs text-white/60 line-clamp-2">AI marking with teacher verification completed. Comprehensive feedback generated for students.</p>
                    </div>

                    <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-white/90">Performance Analysis: Student Progress</h3>
                        <span className="text-xs text-white/60">3h ago</span>
                      </div>
                      <p className="text-xs text-white/60 line-clamp-2">Comprehensive analysis of student performance trends and progress over the past academic year.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note editor */}
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <h2 className="min-w-0 truncate text-lg font-semibold text-white">Math Final Exam - Grade 12</h2>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      Synced
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 p-4">
                  <div className="prose prose-invert max-w-none">
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-violet-500/20 text-violet-300 rounded text-xs font-medium">Q4</span>
                        <div className="flex-1">
                          <h3 className="text-white font-medium mb-2">Ass Obment Results</h3>
                          <ul className="space-y-1 text-white/70">
                            <li>• AI marking accuracy: 98.5%</li>
                            <li>• Student performance analytics generated</li>
                            <li>• Improvement recommendations provion</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-2 border-violet-500/30 pl-4 py-2">
                        <p className="text-white/80 italic">
                          "Exceptional performance in algebraic problem-solving. Recommend advanced calculus preparation."
                        </p>
                        <p className="text-xs text-white/50 mt-1">— AI Assessment Feedback</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                        <span>Linked notes:</span>
                        <a href="#" className="text-violet-300 hover:text-violet-200 underline">Student Reports</a>
                        <span>•</span>
                        <a href="#" className="text-violet-300 hover:text-violet-200 underline">Class Analytics</a>
                        <span>•</span>
                        <a href="#" className="text-violet-300 hover:text-violet-200 underline">Institution Dashboard</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
const Features = () => {
  return (
    <section className="home-section home-features-section relative z-10 section-bg pattern-overlay content-section">
      <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Security Feature */}
          <div className="relative h-full">
            <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
              <div className="relative overflow-hidden rounded-t-3xl">
                <div className="h-56 sm:h-64">
                  {/* Radar-style visual */}
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0">
                      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 ring-1 ring-white/10 rounded-full"></div>
                      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
                      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
                      <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Target className="h-6 w-6 text-white/70" />
                      </div>
                      {/* Nodes */}
                      <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
                      <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
                      <div className="absolute bottom-0 left-12 h-28 w-28 translate-y-1/3 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  <span className="text-sm text-neutral-300">Security update</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">Secure Exam Management</h2>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Assesium secures your exams and student data with enterprise-grade encryption. Real-time AI marking with automatic result updates to your Assesium dashboard—completely secure and private.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
                    <Lock className="h-3.5 w-3.5" />
                    Private
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-400/10 px-2 py-1 text-xs text-indigo-300 ring-1 ring-indigo-400/20">
                    <Cpu className="h-3.5 w-3.5" />
                    On‑device
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sync Feature */}
          <div className="relative ring-1 ring-white/5 bg-neutral-900/40 border-neutral-800/70 border rounded-3xl shadow-2xl backdrop-blur max-w-xl h-full flex flex-col">
            {/* Subtle grid lines */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
              <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
              </svg>
            </div>

            <div className="relative sm:p-6 lg:p-8 flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5">
              {/* Diagram */}
              <div className="relative mx-auto max-w-2xl flex-1">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 h-[220px] sm:h-[230px]">
                  <div className="mx-auto h-full w-px bg-gradient-to-b from-neutral-700/60 via-neutral-700/30 to-neutral-700/60"></div>
                </div>

                {/* Node: All Devices */}
                <div className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-indigo-500/30">
                        <Laptop className="h-3.5 w-3.5 text-indigo-300" />
                      </span>
                      <span className="text-white font-medium">All devices</span>
                    </div>

                    {/* Connector dot (top) */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700"></span>
                  </div>

                  <div className="mt-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3">
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Laptop className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-sm">MacBook Pro</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-neutral-300">
                      <Smartphone className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-sm">iPhone 15</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-neutral-300">
                      <Tablet className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-sm">iPad Air</span>
                    </div>
                  </div>

                  {/* Connector dot (bottom) */}
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700"></span>
                </div>

                {/* Node: Sync */}
                <div className="relative z-10 mx-auto mt-14 w-full max-w-md rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30">
                      <Cloud className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <div className="flex-1">
                      <p className="text-white font-medium">Assesium Reporting System</p>
                      <p className="text-[13px] text-neutral-400">Comprehensive Analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button className="inline-flex hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 items-center justify-center">
                    <Wand2 className="mr-2 h-4 w-4" />
                    Customize
                  </button>
                  <button className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-3.5 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition">
                    <Download className="mr-2 h-4 w-4" />
                    Export image
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Capture Feature */}
          <div className="max-w-xl mr-auto ml-auto">
            <div className="premium-card rounded-[28px] shadow-2xl">
              <div className="sm:p-6 border-white/10 border-b pt-5 pr-5 pb-5 pl-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
                      <RefreshCcw className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                      AI Exam Marking
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                    <BadgeCheck className="w-4.5 h-4.5 text-emerald-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white/90 font-medium">
                        AI Marked: <span className="text-white">Math Final Exam - Grade 12</span>
                      </p>
                      <p className="text-[13px] text-white/60">Real-time results updated</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
                    <Server className="w-4.5 h-4.5 text-sky-300 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white/80 font-medium">Comprehensive reports generated</p>
                      <p className="text-[13px] text-white/55">A-levels, students, classes, institutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/7 flex items-center justify-center ring-1 ring-inset ring-white/12">
                      <CheckCircle2 className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                      Scheduling & Tutoring
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/7 flex items-center justify-center ring-1 ring-inset ring-white/12">
                      <CheckCircle2 className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                      Payment & Community
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Cards Grid */}
        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">New</span>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                <Expand className="h-4 w-4" />
              </button>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Instant capture</h3>
            <p className="text-sm text-slate-300 mt-1">Open a note anywhere. Works offline and syncs when you're back.</p>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <img alt="workspace" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/9d1de9bd-4ff4-42aa-a3e3-8a2bb4281aac/0_0.png?w=800&q=80" />
            </div>
          </article>
          
          <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Built‑in</span>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                <Network className="h-4 w-4" />
              </button>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Backlinks & graph</h3>
            <p className="text-sm text-slate-300 mt-1">Type to link ideas. See relationships with an instant graph.</p>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <img alt="abstract" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/57c7383f-0520-4ba3-b327-792c429bff72/0_0.png?w=800&q=80" />
            </div>
          </article>
          
          <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Private</span>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                <Lock className="h-4 w-4" />
              </button>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">AI summaries</h3>
            <p className="mt-1 text-sm text-slate-300 font-sans">Turn long notes into crisp takeaways you can act on—locally processed.</p>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <img alt="minimal" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/abdd2d48-3bf3-4630-a8c3-3e28a7f6b4ff/0_0.png?w=800&q=80" />
            </div>
          </article>
        </div> */}
      </div>
    </section>
  );
};
const HowItWorksv1 = () => {
  return (
    <section id="how-it-works" className="relative section-spacing section-bg pattern-overlay content-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Four steps to effortless and accurate exam marking.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5 ">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">1</span>
            <h3 className="text-lg font-semibold tracking-tight">Import</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Upload handwritten exams, documents, or assignments.</p>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">2</span>
            <h3 className="text-lg font-semibold tracking-tight">Assist</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">AI analyzes and marks handwritten exams, documents, and assignments.</p>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">3</span>
            <h3 className="text-lg font-semibold tracking-tight">Review</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Review AI-generated marks and feedback, make adjustments as needed.</p>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">4</span>
            <h3 className="text-lg font-semibold tracking-tight">Sync</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Automatically update marks to the system for students, teachers, and institutions, and generate comprehensive reports.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
const TestimonialsV1 = () => {
  return (
    <section id="testimonials" className="relative section-spacing section-bg pattern-overlay content-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Loved by educators</h2>
        <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">Real results from real teams.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-2">
          <figure className="rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 out of 5 stars</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img src={person1} alt="Dr. Priya Mehta" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              <div>
                <p className="text-sm font-medium">Dr. Priya Mehta</p>
                <p className="text-xs text-zinc-500">Dept. Chair, Life Sciences</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 out of 5 stars</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img src={person2} alt="Samir Patel" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              <div>
                <p className="text-sm font-medium">Samir Patel</p>
                <p className="text-xs text-zinc-500">Senior Lecturer, Humanities</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 out of 5 stars</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "Integration with Canvas was painless. The transparency helps with student appeals."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img src={person3} alt="Prof. Alison Grant" className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              <div>
                <p className="text-sm font-medium">Prof. Alison Grant</p>
                <p className="text-xs text-zinc-500">Program Director, Business</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
const FAQ = () => {
  return (
    <section className="home-section home-faq-section assesium-faq relative z-10 section-bg pattern-overlay section-spacing content-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-white tracking-tight">Your Questions, Answered</h3>
          <p className="mt-2 text-zinc-400 text-sm">Everything you need to know about grading with AI.</p>
        </div>

        <div className="divide-y divide-white/5 rounded-2xl premium-card">
          <details className="group open:bg-white/5 p-5" open>
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-white text-sm sm:text-base font-medium">How does Assesium ensure data privacy and security for student information?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Assesium employs robust encryption protocols and adheres to strict data protection regulations to safeguard all student and institutional data. Our platform is designed with privacy by design principles.
            </p>
          </details>

          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-white text-sm sm:text-base font-medium">Can Assesium mark handwritten exams and documents?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Yes, Assesium utilizes advanced AI and OCR technology to accurately mark handwritten exams, documents, and assignments, providing detailed feedback and analysis.
            </p>
          </details>

          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-white text-sm sm:text-base font-medium">How does Assesium support teachers, parents, and institutions?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Assesium provides comprehensive reports on student, teacher, and institutional performance, a tutoring section, community forums, scheduling tools, and a revision question generator. Parents can track student progress in real-time, and all payment methods are accepted.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};
const CTA = () => {
  return (
    <section className="home-section home-cta-section relative z-10 section-spacing-lg holographic floating-orbs">
      <div className="max-w-5xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Revolutionize Your Assessment Process Today</h2>
          <p className="mt-2 text-zinc-300">Experience the future of AI-powered exam marking. Start your free trial today!</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:duration-75"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                boxShadow: '0 8px 16px -4px rgba(139, 92, 246, 0.25)'
              }}
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
            >
              Compare plans
              <CreditCard className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const FinalCTA = () => {
  return (
    <section className="relative section-spacing-lg light-gradient-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-violet-400/30 dark:border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-600/10 dark:from-violet-500/10 dark:to-indigo-600/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to Transform Your Assessment Workflow?</h3>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Join thousands of educators and institutions already benefiting from Assesium.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white px-4 py-2 text-sm font-medium">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-white/10">
              Book a demo
              <Play className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
// import React from 'react';
// // import './style.css';
// import '../app.css';

// const FeatureCard = ({ icon, title, description, badge, badgeColor, progress, submissions, confidence }) => (
//   <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
//     <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
//       <div className="flex items-center gap-2">
//         {icon}
//         <span className="text-sm text-neutral-300">{badge}</span>
//       </div>
//       <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
//       <p className="text-sm leading-relaxed text-neutral-300">{description}</p>
//       {progress && (
//         <div className="mt-5">
//           <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-4 space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3.5 w-3.5 text-white">
//                     <path d="M4 3h16v6H4zm0 8h16v10H4z"/>
//                   </svg>
//                 </span>
//                 <p className="text-sm font-medium text-white">MCQ batch</p>
//               </div>
//               <span className="text-xs text-slate-400">{submissions} submissions</span>
//             </div>
//             <div className="h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
//               <div className={`h-full bg-gradient-to-r ${badgeColor} w-[${progress}%]`}></div>
//             </div>
//             <div className="flex items-center justify-between text-xs">
//               <span className="text-slate-300">{progress}% auto-graded</span>
//               <span className="text-emerald-300 inline-flex items-center gap-1">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3 w-3">
//                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
//                   <path d="m9 11 3 3L22 4"/>
//                 </svg>
//                 {confidence}
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// );

// const CapabilityCard = ({ icon, title, description }) => (
//   <div 
//     className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8"
//     onClick={(e) => {
//       e.currentTarget.classList.add('shine-effect');
//       setTimeout(() => e.currentTarget.classList.remove('shine-effect'), 600);
//     }}
//   >
//     <div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
//     <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
//       {icon}
//     </div>
//     <h3 className="text-lg text-white">{title}</h3>
//     <p className="mt-1 text-sm text-zinc-400">{description}</p>
//   </div>
// );

const Homefeaturethink = () => {
  return (
    <>
      {/* What can you do with Assesium AI? */}
      <section className="home-section home-capabilities-section relative z-10 section-spacing content-section light-gradient-4 light-glass-orbs">
        <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
          <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight text-center pb-10">
            What can you do with Assesium AI?
          </h2>
          <div className="ring-1 ring-white/10 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-blue-500/20 to-purple-500/10 rounded-2xl backdrop-blur">
            {/* Top row */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-white/10 border-b ">
              <div
                className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8"
                onClick={(e) => {
                  e.currentTarget.classList.add('shine-effect');
                  setTimeout(() => e.currentTarget.classList.remove('shine-effect'), 600);
                }}
              >
                <div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check-2 h-5 w-5">
                    <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="m3 15 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg text-white">Realtime Exam Marking</h3>
                <p className="mt-1 text-sm text-zinc-400">Marks handwritten exams, documents, assignments, and more.</p>
              </div>
              <div
                className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8"
                onClick={(e) => {
                  e.currentTarget.classList.add('shine-effect');
                  setTimeout(() => e.currentTarget.classList.remove('shine-effect'), 600);
                }}
              >
                <div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2 h-5 w-5">
                    <line x1="18" x2="18" y1="20" y2="10"></line>
                    <line x1="12" x2="12" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-lg text-white">Performance Analytics</h3>
                <p className="mt-1 text-sm text-zinc-400">Track student, teacher, and institutional performance with detailed reports.</p>
              </div>
              <div
                className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8"
                onClick={(e) => {
                  e.currentTarget.classList.add('shine-effect');
                  setTimeout(() => e.currentTarget.classList.remove('shine-effect'), 600);
                }}
              >
                <div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-5 w-5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg text-white">Tutoring Section</h3>
                <p className="mt-1 text-sm text-zinc-400">Connect students with teachers for physical or online tutoring sessions.</p>
              </div>
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8"
                onClick={(e) => {
                  e.currentTarget.classList.add('shine-effect');
                  setTimeout(() => e.currentTarget.classList.remove('shine-effect'), 600);
                }}
              >
                <div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87C18.5 13.5 20 11.4 20 9c0-4-3.5-7-8-7s-8 3-8 7c0 2.4 1.5 4.5 3.87 5.13C4 17 2 19 2 21v2"></path>
                  </svg>
                </div>
                <h3 className="text-lg text-white">Community Section</h3>
                <p className="mt-1 text-sm text-zinc-400">Facilitate communication between schools, teachers, parents, and students.</p>
              </div>
              <div
                className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8"
                onClick={(e) => {
                  e.currentTarget.classList.add('shine-effect');
                  setTimeout(() => e.currentTarget.classList.remove('shine-effect'), 600);
                }}
              >
                <div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check h-5 w-5">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg text-white">Scheduling & Chatbot</h3>
                <p className="mt-1 text-sm text-zinc-400">Effortless timetable scheduling and 24/7 chatbot support.</p>
              </div>
            </div>
          </div>
          <style>
            {`
              @keyframes shine {
                0% {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  transform: translateX(100%);
                  opacity: 0;
                }
              }
              
              .shine-effect .shine-effect-animation {
                opacity: 1 !important;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                animation: shine 0.6s ease-out;
              }
            `}
          </style>
        </div>
      </section>


            {/* Call to action */}
        <div className="mt-12 text-center">
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
        </div>


      {/* Features */}
      <section className="home-section home-advanced-features-section relative z-10 bg-gradient-to-b from-[#000000] to-[#0A0A11] light-gradient-5">
        <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="relative h-full">
              <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="h-56 sm:h-64">
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0">
                        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 ring-1 ring-white/10 rounded-full"></div>
                        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
                        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
                        <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target h-6 w-6 text-white/70">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <path d="M12 2a10 10 0 0 0-9.45 13.94"></path>
                            <path d="M22 12A10 10 0 0 0 12 2"></path>
                          </svg>
                        </div>
                        <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
                        <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
                        <div className="absolute bottom-0 left-12 h-28 w-28 translate-y-1/3 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-5 w-5 text-emerald-300">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-sm text-neutral-300">Security update</span>
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">End‑to‑end encryption</h2>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    Assesium secures your exams and data with end‑to‑end encryption. Keys stay on your devices, with continuous, zero‑knowledge sync—no manual steps required.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-3.5 w-3.5">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Private
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-400/10 px-2 py-1 text-xs text-indigo-300 ring-1 ring-indigo-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu h-3.5 w-3.5">
                        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                        <path d="M9 9h6v6H9z"></path>
                        <path d="M15 2v2"></path>
                        <path d="M15 20v2"></path>
                        <path d="M2 15h2"></path>
                        <path d="M20 15h2"></path>
                        <path d="M2 9h2"></path>
                        <path d="M20 9h2"></path>
                        <path d="M9 2v2"></path>
                        <path d="M9 20v2"></path>
                      </svg>
                      On‑device
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative ring-1 ring-white/5 bg-neutral-900/40 border-neutral-800/70 border rounded-3xl shadow-2xl backdrop-blur max-w-xl h-full flex flex-col">
              <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
                  <defs>
                    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5"></path>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"></rect>
                </svg>
              </div>

              <div className="relative sm:p-6 lg:p-8 flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5">
                <div className="relative mx-auto max-w-2xl flex-1">
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 h-[220px] sm:h-[230px]">
                    <div className="mx-auto h-full w-px bg-gradient-to-b from-neutral-700/60 via-neutral-700/30 to-neutral-700/60"></div>
                  </div>

                  <div className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-indigo-500/30">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop h-3.5 w-3.5">
                            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.91 1.45H3.63a1 1 0 0 1-.91-1.45L4 16"></path>
                          </svg>
                        </span>
                        <span className="text-white font-medium">All devices</span>
                      </div>

                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700"></span>
                    </div>

                    <div className="mt-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop h-3.5 w-3.5">
                          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.91 1.45H3.63a1 1 0 0 1-.91-1.45L4 16"></path>
                        </svg>
                        <span className="text-sm">MacBook Pro</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-neutral-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-3.5 w-3.5">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                          <path d="M12 18h.01"></path>
                        </svg>
                        <span className="text-sm">iPhone 15</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-neutral-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tablet h-3.5 w-3.5">
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <path d="M12 19h.01"></path>
                        </svg>
                        <span className="text-sm">iPad Air</span>
                      </div>
                    </div>

                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700"></span>
                  </div>

                  <div className="relative z-10 mx-auto mt-14 w-full max-w-md rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-3.5 w-3.5">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                        </svg>
                      </span>
                      <div className="flex-1">
                        <p className="text-white font-medium">Assesium Sync Service</p>
                        <p className="text-[13px] text-neutral-400">P2P + Local‑first</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <button className="inline-flex hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand-2 mr-2 h-4 w-4">
                        <path d="M21 7.769a2 2 0 0 0-2.928-2.928l-2.002 2.002a2.92 2.92 0 0 0 0 4.132l.868.868a2.92 2.92 0 0 0 4.132 0l2.002-2.002A2 2 0 0 0 21 7.769Z"></path>
                        <path d="M13.5 6.5 17 10"></path>
                        <path d="M10.5 10.5 14 14"></path>
                        <path d="M7.5 13.5 11 17"></path>
                        <path d="M3 21l9-9"></path>
                      </svg>
                      Customize
                    </button>
                    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-3.5 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2 h-4 w-4">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                      </svg>
                      Export image
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-xl mr-auto ml-auto">
              <div className="ring-1 ring-white/10 shadow-black/40 bg-white/5 rounded-[28px] shadow-2xl backdrop-blur">
                <div className="sm:p-6 border-white/10 border-b pt-5 pr-5 pb-5 pl-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw h-5 w-5 text-white/80">
                          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                          <path d="M21 21v-5h-5"></path>
                        </svg>
                      </div>
                      <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                        Mark an Exam
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 h-5 w-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check h-4.5 w-4.5 text-emerald-400 mt-0.5">
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <div className="flex-1">
                        <p className="text-sm text-white/90 font-medium">
                          Exam marked: <span className="text-white">Math Final Exam</span>
                        </p>
                        <p className="text-[13px] text-white/60">Encrypted and signed</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server h-4.5 w-4.5 text-sky-300 mt-0.5">
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6.01" y1="6" y2="6"></line>
                        <line x1="6" x2="6.01" y1="18" y2="18"></line>
                      </svg>
                      <div className="flex-1">
                        <p className="text-sm text-white/80 font-medium">Reports generated automatically</p>
                        <p className="text-[13px] text-white/55">Reports for 12 exams</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-white/7 flex items-center justify-center ring-1 ring-inset ring-white/12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 h-5 w-5 text-white/80">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                        Sync across devices
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 h-5 w-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4 sm:px-6 sm:py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-white/7 flex items-center justify-center ring-1 ring-inset ring-white/12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 h-5 w-5 text-white/80">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                        Ready to use
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 h-5 w-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Advanced Features Section */}
          <section className="relative z-10 section-spacing content-section animated-mesh pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                  Advanced Features
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Discover powerful tools to enhance your note-taking experience with seamless integration and advanced capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Rich Media Support */}
                <div className="flex flex-col rounded-2xl premium-card overflow-hidden">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5">
                      <img
                        // src="https://support.cc/images/blog/social-media-customer-service.png?v=1682512742702523116" 
                        // src="https://chatra.com/books/ultimate-guide-to-customer-service-channels/images/social-media-support.png" 
                        src="https://chatra.com/books/ultimate-guide-to-customer-service-channels/images/ultimate-guide-to-customer-service-channels.png?4"



                        alt="Rich Media Support"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Rich Media Support</h3>
                      <p className="text-zinc-400 text-sm">
                        Embed images, videos, and audio directly into your notes for a richer experience.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-violet-400"></div>
                          Image and video embeds
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-violet-400"></div>
                          Audio recordings and playback
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Export & Share */}
                <div className="flex flex-col rounded-2xl premium-card overflow-hidden">
                  <div className="flex flex-col md:flex-row-reverse h-full">
                    <div className="md:w-2/5">
                      <img
                        // src="https://ungoti.com/wp-content/uploads/Migrate-fileshare-to-sharepoint-2.png" 
                        // src="https://cdn.dribbble.com/userupload/23944449/file/original-fe38fefdc048e41504cc9d5f0dad282d.gif" 
                        src="https://engineering.fb.com/wp-content/uploads/2019/11/Data_PortabilityPrivacy_BANNER_003.gif"



                        alt="Export & Share"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Export & Share</h3>
                      <p className="text-zinc-400 text-sm">
                        Easily export your notes in various formats or share them securely with others.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                          PDF, Markdown, HTML export
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                          Secure shareable links
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voice Notes */}
                <div className="flex flex-col rounded-2xl premium-card overflow-hidden">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5">
                      <img
                        src="https://static01.nyt.com/images/2024/03/03/fashion/23VOICE-NOTES/23VOICE-NOTES-videoLarge.jpg"
                        // src="https://cdn.dribbble.com/userupload/21823231/file/original-72afa7b9b91b506e7eeee3d53447120c.gif" 





                        alt="Voice Notes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" y1="19" x2="12" y2="23"></line>
                          <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Voice Notes</h3>
                      <p className="text-zinc-400 text-sm">
                        Capture ideas on the go with voice recordings and automatic transcription.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                          High-accuracy transcription
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                          Searchable audio content
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="flex flex-col rounded-2xl premium-card overflow-hidden">
                  <div className="flex flex-col md:flex-row-reverse h-full">
                    <div className="md:w-2/5">
                      <img
                        src="https://www.inspirisys.com/uploads/general_image/Employee-Performance-Management.jpg"
                        alt="Performance Metrics"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Performance Metrics</h3>
                      <p className="text-zinc-400 text-sm">
                        Gain insights into your productivity with detailed usage statistics and trends.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                          Note creation trends
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-pink-400"></div>
                          Search efficiency reports
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrations */}
                <div className="flex flex-col rounded-2xl premium-card overflow-hidden">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5">
                      <img
                        src="https://mondo.com/wp-content/uploads/2023/08/areas-of-business-that-could-benefit-from-integrated-technologies-2023.jpg"
                        alt="Integrations"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Integrations</h3>
                      <p className="text-zinc-400 text-sm">
                        Connect Assesium with your favorite tools and workflows for a seamless experience.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                          Slack, Google Drive, Outlook
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
                          Custom API access
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Version History */}
                <div className="flex flex-col rounded-2xl premium-card overflow-hidden">
                  <div className="flex flex-col md:flex-row-reverse h-full">
                    <div className="md:w-2/5">
                      <img
                        // src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/09/version-history-in-microsoft-word.jpg" 
                        src="/image.png"


                        alt="Version History"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-lime-600 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                          <path d="M20 11.08A9 9 0 1 1 6.41 4.41"></path>
                          <polyline points="14 2 20 8 20 2"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Version History</h3>
                      <p className="text-zinc-400 text-sm">
                        Never lose an idea with automatic versioning and easy rollback options.
                      </p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                          Unlimited version history
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-lime-400"></div>
                          Restore previous versions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

                {/* Call to action */}
        <div className="mt-12 text-center">
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
        </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-3 pt-28">
            <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">New</span>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-expand h-4 w-4">
                    <path d="m21 21-6-6"></path>
                    <path d="m3 15 6 6"></path>
                    <path d="m15 3 6 6"></path>
                    <path d="m9 3-6 6"></path>
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Instant capture</h3>
              <p className="text-sm text-slate-300 mt-1">Open a note anywhere. Works offline and syncs when you're back.</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <img alt="workspace" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/9d1de9bd-4ff4-42aa-a3e3-8a2bb4281aac/0_0.png?w=800&q=80" />
              </div>
            </article>

            <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Built‑in</span>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-4 w-4">
                    <path d="M12 18v4"></path>
                    <path d="M17 22h-2"></path>
                    <path d="M9 22H7"></path>
                    <path d="M12 12V2"></path>
                    <path d="M17 2h-2"></path>
                    <path d="M9 2H7"></path>
                    <path d="M12 6h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8Z"></path>
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Backlinks & graph</h3>
              <p className="text-sm text-slate-300 mt-1">Type to link ideas. See relationships with an instant graph.</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <img alt="abstract" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/57c7383f-0520-4ba3-b327-792c429bff72/0_0.png?w=800&q=80" />
              </div>
            </article>

            <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Private</span>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-4 w-4">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">AI summaries</h3>
              <p className="mt-1 text-sm text-slate-300 font-sans">Turn long notes into crisp takeaways you can act on—locally processed.</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <img alt="minimal" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/abdd2d48-3bf3-4630-a8c3-3e28a7f6b4ff/0_0.png?w=800&q=80" />
              </div>
            </article>
          </div>
        </div>

        
      </section>
    </>
  );
};

const Home = () => {
  return (
    <main className="home-route">
      <Hero />
      <div className="page-content-wrapper">
        <Features />
        <Homefeaturethink />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
        {/* <FinalCTA /> */}
      </div>
    </main>
  );
};

export default Home;

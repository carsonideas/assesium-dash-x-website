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

// const Homefeaturethink = () => {
//   return (
//     <>
//       {/* What can you do with Nova AI? */}
//       <section className="relative z-10 mt-10 mb-20 pt-0 pb-0">
//         <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
//           <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight text-center">
//             What can you do with Nova AI?
//           </h2>
//           <div className="ring-1 ring-white/10 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-blue-500/20 to-purple-500/10 rounded-2xl mt-10 backdrop-blur">
//             {/* Top row */}
//             <div className="grid grid-cols-1 md:grid-cols-3 border-white/10 border-b">
//               <CapabilityCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic h-5 w-5">
//                     <path d="M12 19v3"></path>
//                     <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
//                     <rect x="9" y="2" width="6" height="13" rx="3"></rect>
//                   </svg>
//                 }
//                 title="Transform speech to text"
//                 description="in seconds with AI precision"
//               />
//               <CapabilityCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-5 w-5">
//                     <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
//                     <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//                     <path d="M10 9H8"></path>
//                     <path d="M16 13H8"></path>
//                     <path d="M16 17H8"></path>
//                   </svg>
//                 }
//                 title="Create structured content"
//                 description="from messy brainstorms"
//               />
//               <CapabilityCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check-2 h-5 w-5">
//                     <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
//                     <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//                     <path d="m3 15 2 2 4-4"></path>
//                   </svg>
//                 }
//                 title="Extract insights and tasks"
//                 description="from complex discussions"
//               />
//             </div>
//             {/* Bottom row */}
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               <CapabilityCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-5 w-5">
//                     <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
//                   </svg>
//                 }
//                 title="Chat with your notes"
//                 description="to find and organize information"
//               />
//               <CapabilityCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-5 w-5">
//                     <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
//                     <path d="M20 2v4"></path>
//                     <path d="M22 4h-4"></path>
//                     <circle cx="4" cy="20" r="2"></circle>
//                   </svg>
//                 }
//                 title="Save your own"
//                 description="custom prompts"
//               />
//             </div>
//           </div>
//           <style>
//             {`
//               @keyframes shine {
//                 0% {
//                   transform: translateX(-100%);
//                   opacity: 0;
//                 }
//                 50% {
//                   opacity: 1;
//                 }
//                 100% {
//                   transform: translateX(100%);
//                   opacity: 0;
//                 }
//               }
              
//               .shine-effect .shine-effect-animation {
//                 opacity: 1 !important;
//                 background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//                 animation: shine 0.6s ease-out;
//               }
//             `}
//           </style>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="relative z-10 bg-gradient-to-b from-[#000000] to-[#0A0A11]">
//         <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//             <FeatureCard
//               icon={
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4.5 w-4.5 text-indigo-300">
//                   <rect width="16" height="16" x="4" y="4" rx="2"></rect>
//                   <path d="M9 9h6v6H9z"></path>
//                   <path d="M15 2v2"></path>
//                   <path d="M15 20v2"></path>
//                   <path d="M2 15h2"></path>
//                   <path d="M20 15h2"></path>
//                   <path d="M2 9h2"></path>
//                   <path d="M20 9h2"></path>
//                   <path d="M9 2v2"></path>
//                   <path d="M9 20v2"></path>
//                 </svg>
//               }
//               badge="Objective auto‑grading"
//               title="Fast and accurate"
//               description="Auto‑grade MCQs, coding tasks, and spreadsheet questions with rubric‑aware models. Explainable scoring and easy overrides."
//               badgeColor="from-violet-500 to-indigo-600"
//               progress={86}
//               submissions={120}
//               confidence="high confidence"
//             />
//             <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
//               <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4.5 w-4.5 text-fuchsia-300">
//                     <path d="m3 17 2 2 4-4"></path>
//                     <path d="m3 7 2 2 4-4"></path>
//                     <path d="M13 6h8"></path>
//                     <path d="M13 12h8"></path>
//                     <path d="M13 18h8"></path>
//                   </svg>
//                   <span className="text-sm text-neutral-300">Rubrics &amp; moderation</span>
//                 </div>
//                 <h2 className="text-2xl font-semibold tracking-tight text-white">Consistent subjective grading</h2>
//                 <p className="text-sm leading-relaxed text-neutral-300">
//                   Draft rubrics with AI, calibrate with exemplars, and moderate outliers in one place. All changes tracked for audit.
//                 </p>
//                 <div className="mt-4 grid grid-cols-2 gap-3">
//                   <div className="rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
//                     <p className="text-xs text-slate-400 mb-2">Rubric builder</p>
//                     <div className="space-y-2">
//                       <label className="flex items-center gap-2 text-xs text-slate-300">
//                         <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 accent-violet-500" />
//                         Criteria from prompt
//                       </label>
//                       <label className="flex items-center gap-2 text-xs text-slate-300">
//                         <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 accent-violet-500" />
//                         Level descriptors
//                       </label>
//                       <label className="flex items-center gap-2 text-xs text-slate-300">
//                         <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 accent-violet-500" />
//                         Exemplars
//                       </label>
//                     </div>
//                   </div>
//                   <div className="rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
//                     <p className="text-xs text-slate-400 mb-2">Moderation</p>
//                     <div className="flex items-center justify-between text-xs">
//                       <span className="text-slate-300">Outliers flagged</span>
//                       <span className="text-amber-300">4</span>
//                     </div>
//                     <div className="mt-2 h-2 w-full rounded-full bg-white/5 overflow-hidden ring-1 ring-white/10">
//                       <div className="h-full w-[35%] bg-gradient-to-r from-amber-400 to-orange-500"></div>
//                     </div>
//                     <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3 w-3">
//                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="12" cy="7" r="4"></circle>
//                       </svg>
//                       2 reviewers assigned
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
//               <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4.5 w-4.5 text-emerald-300">
//                     <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                     <path d="m9 12 2 2 4-4"></path>
//                   </svg>
//                   <span className="text-sm text-neutral-300">Integrity &amp; release</span>
//                 </div>
//                 <h2 className="text-2xl font-semibold tracking-tight text-white">Trust, then publish</h2>
//                 <p className="text-sm leading-relaxed text-neutral-300">
//                   Proctoring signals, similarity, and AI‑writing indicators feed a single risk view. Release grades in waves with holdbacks.
//                 </p>
//                 <div className="mt-4 rounded-2xl bg-black/20 ring-1 ring-white/10 p-4 space-y-3">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2 text-sm">
//                       <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 ring-1 ring-white/20">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3.5 w-3.5 text-white">
//                           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                           <path d="m9 12 2 2 4-4"></path>
//                         </svg>
//                       </span>
//                       <span className="text-white">Release controls</span>
//                     </div>
//                     <span className="text-xs text-slate-400">Canvas sync</span>
//                   </div>
//                   <div className="grid grid-cols-3 gap-2">
//                     <label className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 text-xs">
//                       <span className="text-slate-300">Provisional</span>
//                       <input type="checkbox" defaultChecked className="accent-violet-500 h-4 w-4" />
//                     </label>
//                     <label className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 text-xs">
//                       <span className="text-slate-300">Feedback</span>
//                       <input type="checkbox" defaultChecked className="accent-violet-500 h-4 w-4" />
//                     </label>
//                     <label className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 text-xs">
//                       <span className="text-slate-300">Hold outliers</span>
//                       <input type="checkbox" defaultChecked className="accent-violet-500 h-4 w-4" />
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 flex flex-col items-center text-center">
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3.5 w-3.5 text-violet-300">
//                 <path d="m12 14 4-4"></path>
//                 <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
//               </svg>
//               Try the AI rubric builder
//             </div>
//             <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Reduce time‑to‑publish by 60%</h3>
//             <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-300">
//               Import outcomes, generate criteria, and calibrate in minutes. Assesium keeps everything auditable and aligned to your policy.
//             </p>
//             <div className="mt-6 flex gap-3">
//               <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full px-5 py-2.5 shadow-lg shadow-violet-900/25 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] transition">
//                 Build a rubric
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4 w-4">
//                   <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
//                   <path d="M20 2v4"></path>
//                   <path d="M22 4h-4"></path>
//                   <circle cx="4" cy="20" r="2"></circle>
//                 </svg>
//               </a>
//               <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 border-white/10 border rounded-full px-5 py-2.5 hover:bg-white/5 backdrop-blur">
//                 See examples
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4 w-4">
//                   <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18z"></path>
//                   <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//                   <path d="M10 9H8"></path>
//                   <path d="M16 13H8"></path>
//                   <path d="M16 17H8"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative">
//         <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-8 pl-4">
//           <div className="grid gap-10 pt-4 md:grid-cols-12 md:gap-8 md:pt-8">
//             <div className="md:col-span-7 lg:col-span-8">
//               <h1 className="leading-tight sm:text-6xl lg:text-7xl text-5xl font-semibold text-white tracking-tight font-sans">
//                 <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3">Think clearly.</span>
//                 <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3">Capture instantly.</span>
//               </h1>
//               <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
//                 <div className="flex items-center gap-2 font-sans">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 text-violet-300">
//                     <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
//                     <path d="M20 2v4"></path>
//                     <path d="M22 4h-4"></path>
//                     <circle cx="4" cy="20" r="2"></circle>
//                   </svg>
//                   Offline‑first
//                 </div>
//                 <div className="h-px w-24 bg-white/10"></div>
//                 <div className="flex items-center gap-2 font-sans">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 text-violet-300">
//                     <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                   </svg>
//                   Private by default
//                 </div>
//               </div>
//             </div>
//             <div className="md:col-span-5 lg:col-span-4">
//               <p className="text-base leading-relaxed text-slate-300 font-sans">
//                 Capture ideas, link them with effortless backlinks, and recall anything in milliseconds—across devices, even offline.
//               </p>
//               <div className="mt-6 flex items-center gap-3">
//                 <button className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" id="aura-emejxzef1">
//                   Start free trial
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-[16px] h-[16px]">
//                     <path d="M5 12h14"></path>
//                     <path d="m12 5 7 7-7 7"></path>
//                   </svg>
//                 </button>
//                 <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 border border-white/10">
//                   Watch demo
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-4 w-4">
//                     <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
//             <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
//               <div className="flex items-start justify-between">
//                 <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">New</span>
//                 <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-expand h-4 w-4">
//                     <path d="m15 15 6 6"></path>
//                     <path d="m15 9 6-6"></path>
//                     <path d="M21 16v5h-5"></path>
//                     <path d="M21 8V3h-5"></path>
//                     <path d="M3 16v5h5"></path>
//                     <path d="m3 21 6-6"></path>
//                     <path d="M3 8V3h5"></path>
//                     <path d="M9 9 3 3"></path>
//                   </svg>
//                 </button>
//               </div>
//               <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Instant capture</h3>
//               <p className="text-sm text-slate-300 mt-1">Open a note anywhere. Works offline and syncs when you’re back.</p>
//               <div className="mt-4 overflow-hidden rounded-2xl">
//                 <img alt="workspace" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/9d1de9bd-4ff4-42aa-a3e3-8a2bb4281aac/0_0.png?w=800&q=80" />
//               </div>
//             </article>
//             <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
//               <div className="flex items-start justify-between">
//                 <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Built‑in</span>
//                 <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-4 w-4">
//                     <rect x="16" y="16" width="6" height="6" rx="1"></rect>
//                     <rect x="2" y="16" width="6" height="6" rx="1"></rect>
//                     <rect x="9" y="2" width="6" height="6" rx="1"></rect>
//                     <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
//                     <path d="M12 12V8"></path>
//                   </svg>
//                 </button>
//               </div>
//               <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Backlinks &amp; graph</h3>
//               <p className="text-sm text-slate-300 mt-1">Type to link ideas. See relationships with an instant graph.</p>
//               <div className="mt-4 overflow-hidden rounded-2xl">
//                 <img alt="abstract" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/57c7383f-0520-4ba3-b327-792c429bff72/0_0.png?w=800&q=80" />
//               </div>
//             </article>
//             <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
//               <div className="flex items-start justify-between">
//                 <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Private</span>
//                 <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-4 w-4">
//                     <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
//                   </svg>
//                 </button>
//               </div>
//               <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">AI summaries</h3>
//               <p className="mt-1 text-sm text-slate-300 font-sans">Turn long notes into crisp takeaways you can act on—locally processed.</p>
//               <div className="mt-4 overflow-hidden rounded-2xl">
//                 <img alt="minimal" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/abdd2d48-3bf3-4630-a8c3-3e28a7f6b4ff/0_0.png?w=800&q=80" />
//               </div>
//             </article>
//           </div>
//         </div>
//       </section>

//       <section className="relative z-10 mt-10">
//         <div className="max-w-5xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
//           <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
//             <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Start organizing your ideas today</h2>
//             <p className="mt-2 text-zinc-300">Free for individuals. Upgrade when you’re ready to scale.</p>
//             <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
//               <a href="#" className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" id="aura-emejxzjoj">
//                 Create your workspace
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
//                   <path d="M5 12h14"></path>
//                   <path d="m12 5 7 7-7 7"></path>
//                 </svg>
//               </a>
//               <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5">
//                 Compare plans
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-4 w-4">
//                   <rect width="20" height="14" x="2" y="5" rx="2"></rect>
//                   <line x1="2" x2="22" y1="10" y2="10"></line>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Homefeaturethink;





import React from 'react';

const FeatureCard = ({ icon, title, description, badge, badgeColor, progress, submissions, confidence }) => (
  <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
    <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-neutral-300">{badge}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="text-sm leading-relaxed text-neutral-300">{description}</p>
      {progress && (
        <div className="mt-5">
          <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3.5 w-3.5 text-white">
                    <path d="M4 3h16v6H4zm0 8h16v10H4z"/>
                  </svg>
                </span>
                <p className="text-sm font-medium text-white">MCQ batch</p>
              </div>
              <span className="text-xs text-slate-400">{submissions} submissions</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${badgeColor}`} style={{width: `${progress}%`}}></div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">{progress}% auto-graded</span>
              <span className="text-emerald-300 inline-flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3 w-3">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
                {confidence}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const CapabilityCard = ({ icon, title, description, onClick }) => (
  <div 
    className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 border-r border-white/10 last:border-r-0 md:border-b-0 border-b"
    onClick={onClick}
  >
    <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-lg text-white">{title}</h3>
    <p className="mt-1 text-sm text-zinc-400">{description}</p>
  </div>
);

const Homefeaturethink = () => {
  const handleCardClick = (e) => {
    // Simple animation effect
    e.currentTarget.style.transform = 'scale(0.98)';
    setTimeout(() => {
      e.currentTarget.style.transform = 'scale(1)';
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900">
      {/* What can you do with Nova AI? */}
      <section className="relative z-10 mt-10 mb-20 pt-0 pb-0">
        <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
          <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight text-center">
            What can you do with Nova AI?
          </h2>
          <div className="ring-1 ring-white/10 bg-gradient-to-r from-blue-500/20 to-purple-500/10 rounded-2xl mt-10 backdrop-blur">
            {/* Top row */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-white/10 border-b">
              <CapabilityCard
                onClick={handleCardClick}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic h-5 w-5">
                    <path d="M12 19v3"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <rect x="9" y="2" width="6" height="13" rx="3"></rect>
                  </svg>
                }
                title="Transform speech to text"
                description="in seconds with AI precision"
              />
              <CapabilityCard
                onClick={handleCardClick}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-5 w-5">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                }
                title="Create structured content"
                description="from messy brainstorms"
              />
              <CapabilityCard
                onClick={handleCardClick}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check-2 h-5 w-5">
                    <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="m3 15 2 2 4-4"></path>
                  </svg>
                }
                title="Extract insights and tasks"
                description="from complex discussions"
              />
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <CapabilityCard
                onClick={handleCardClick}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-5 w-5">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                }
                title="Chat with your notes"
                description="to find and organize information"
              />
              <CapabilityCard
                onClick={handleCardClick}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-5 w-5">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                }
                title="Save your own"
                description="custom prompts"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4.5 w-4.5 text-indigo-300">
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
              }
              badge="Objective auto‑grading"
              title="Fast and accurate"
              description="Auto‑grade MCQs, coding tasks, and spreadsheet questions with rubric‑aware models. Explainable scoring and easy overrides."
              badgeColor="from-violet-500 to-indigo-600"
              progress={86}
              submissions={120}
              confidence="high confidence"
            />
            <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4.5 w-4.5 text-fuchsia-300">
                    <path d="m3 17 2 2 4-4"></path>
                    <path d="m3 7 2 2 4-4"></path>
                    <path d="M13 6h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 18h8"></path>
                  </svg>
                  <span className="text-sm text-neutral-300">Rubrics &amp; moderation</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">Consistent subjective grading</h2>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Draft rubrics with AI, calibrate with exemplars, and moderate outliers in one place. All changes tracked for audit.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
                    <p className="text-xs text-slate-400 mb-2">Rubric builder</p>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-xs text-slate-300">
                        <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 accent-violet-500" />
                        Criteria from prompt
                      </label>
                      <label className="flex items-center gap-2 text-xs text-slate-300">
                        <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 accent-violet-500" />
                        Level descriptors
                      </label>
                      <label className="flex items-center gap-2 text-xs text-slate-300">
                        <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 accent-violet-500" />
                        Exemplars
                      </label>
                    </div>
                  </div>
                  <div className="rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
                    <p className="text-xs text-slate-400 mb-2">Moderation</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Outliers flagged</span>
                      <span className="text-amber-300">4</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/5 overflow-hidden ring-1 ring-white/10">
                      <div className="h-full w-[35%] bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3 w-3">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      2 reviewers assigned
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4.5 w-4.5 text-emerald-300">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-neutral-300">Integrity &amp; release</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">Trust, then publish</h2>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Proctoring signals, similarity, and AI‑writing indicators feed a single risk view. Release grades in waves with holdbacks.
                </p>
                <div className="mt-4 rounded-2xl bg-black/20 ring-1 ring-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 ring-1 ring-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3.5 w-3.5 text-white">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </span>
                      <span className="text-white">Release controls</span>
                    </div>
                    <span className="text-xs text-slate-400">Canvas sync</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <label className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 text-xs">
                      <span className="text-slate-300">Provisional</span>
                      <input type="checkbox" defaultChecked className="accent-violet-500 h-4 w-4" />
                    </label>
                    <label className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 text-xs">
                      <span className="text-slate-300">Feedback</span>
                      <input type="checkbox" defaultChecked className="accent-violet-500 h-4 w-4" />
                    </label>
                    <label className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 text-xs">
                      <span className="text-slate-300">Hold outliers</span>
                      <input type="checkbox" defaultChecked className="accent-violet-500 h-4 w-4" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-3.5 w-3.5 text-violet-300">
                <path d="m12 14 4-4"></path>
                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
              </svg>
              Try the AI rubric builder
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Reduce time‑to‑publish by 60%</h3>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-300">
              Import outcomes, generate criteria, and calibrate in minutes. Assesium keeps everything auditable and aligned to your policy.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full px-5 py-2.5 shadow-lg shadow-violet-900/25 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] transition">
                Build a rubric
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4 w-4">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 border-white/10 border rounded-full px-5 py-2.5 hover:bg-white/5 backdrop-blur">
                See examples
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4 w-4">
                  <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-8 pl-4">
          <div className="grid gap-10 pt-4 md:grid-cols-12 md:gap-8 md:pt-8">
            <div className="md:col-span-7 lg:col-span-8">
              <h1 className="leading-tight sm:text-6xl lg:text-7xl text-5xl font-semibold text-white tracking-tight font-sans">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3">Think clearly.</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3">Capture instantly.</span>
              </h1>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2 font-sans">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 text-violet-300">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                  Offline‑first
                </div>
                <div className="h-px w-24 bg-white/10"></div>
                <div className="flex items-center gap-2 font-sans">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 text-violet-300">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                  Private by default
                </div>
              </div>
            </div>
            <div className="md:col-span-5 lg:col-span-4">
              <p className="text-base leading-relaxed text-slate-300 font-sans">
                Capture ideas, link them with effortless backlinks, and recall anything in milliseconds—across devices, even offline.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75">
                  Start free trial
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-[16px] h-[16px]">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 border border-white/10">
                  Watch demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-4 w-4">
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
             <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
               <div className="flex items-start justify-between">
                 <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">New</span>
                 <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                   <svg xmlns="http:www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-expand h-4 w-4">
                     <path d="m15 15 6 6"></path>
                     <path d="m15 9 6-6"></path>
                     <path d="M21 16v5h-5"></path>
                     <path d="M21 8V3h-5"></path>
                     <path d="M3 16v5h5"></path>
                     <path d="m3 21 6-6"></path>
                     <path d="M3 8V3h5"></path>
                     <path d="M9 9 3 3"></path>
                   </svg>
                 </button>
               </div>
               <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Instant capture</h3>
               <p className="text-sm text-slate-300 mt-1">Open a note anywhere. Works offline and syncs when you’re back.</p>
               <div className="mt-4 overflow-hidden rounded-2xl">
                 <img alt="workspace" className="aspect-[3/4] w-full object-cover" src="https:cdn.midjourney.com/9d1de9bd-4ff4-42aa-a3e3-8a2bb4281aac/0_0.png?w=800&q=80" />
               </div>
             </article>
             <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
               <div className="flex items-start justify-between">
                 <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Built‑in</span>
                 <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                   <svg xmlns="http:www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-4 w-4">
                     <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                     <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                     <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                     <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                     <path d="M12 12V8"></path>
                   </svg>
                 </button>
               </div>
               <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Backlinks &amp; graph</h3>
               <p className="text-sm text-slate-300 mt-1">Type to link ideas. See relationships with an instant graph.</p>
               <div className="mt-4 overflow-hidden rounded-2xl">
                 <img alt="abstract" className="aspect-[3/4] w-full object-cover" src="https:cdn.midjourney.com/57c7383f-0520-4ba3-b327-792c429bff72/0_0.png?w=800&q=80" />
               </div>
             </article>
             <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
               <div className="flex items-start justify-between">
                 <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Private</span>
                 <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                   <svg xmlns="http:www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-4 w-4">
                     <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                     <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                   </svg>
                 </button>
               </div>
               <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">AI summaries</h3>
               <p className="mt-1 text-sm text-slate-300 font-sans">Turn long notes into crisp takeaways you can act on—locally processed.</p>
               <div className="mt-4 overflow-hidden rounded-2xl">
                 <img alt="minimal" className="aspect-[3/4] w-full object-cover" src="https:cdn.midjourney.com/abdd2d48-3bf3-4630-a8c3-3e28a7f6b4ff/0_0.png?w=800&q=80" />
               </div>
             </article>
           </div>
         </div>
       </section>
          {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">New</span>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-expand h-4 w-4">
                    <path d="m15 15 6 6"></path>
                    <path d="m15 9 6-6"></path>
                    <path d="M21 16v5h-5"></path>
                    <path d="M21 8V3h-5"></path>
                    <path d="M3 16v5h5"></path>
                    <path d="m3 21 6-6"></path>
                    <path d="M3 8V3h5"></path>
                    <path d="M9 9 3 3"></path>
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Instant capture</h3>
              <p className="text-sm text-slate-300 mt-1">Open a note anywhere. Works offline and syncs when you're back.</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] w-full bg-gradient-to-br from-violet-500/20 to-indigo-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-violet-300">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Built‑in</span>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-4 w-4">
                    <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                    <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                    <path d="M12 12V8"></path>
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Backlinks &amp; graph</h3>
              <p className="text-sm text-slate-300 mt-1">Type to link ideas. See relationships with an instant graph.</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] w-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-300">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="m21 12-6-3-6 3-6-3"></path>
                  </svg>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Private</span>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" aria-label="Open">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-4 w-4">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">AI summaries</h3>
              <p className="mt-1 text-sm text-slate-300 font-sans">Turn long notes into crisp takeaways you can act on—locally processed.</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] w-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l3 3-3 3H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-6c0-.552-.448-1-1-1h-9l-3-3z"></path>
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section> */}

      <section className="relative z-10 mt-10">
        <div className="max-w-5xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Start organizing your ideas today</h2>
            <p className="mt-2 text-zinc-300">Free for individuals. Upgrade when you're ready to scale.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75">
                Create your workspace
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5">
                Compare plans
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-4 w-4">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homefeaturethink;
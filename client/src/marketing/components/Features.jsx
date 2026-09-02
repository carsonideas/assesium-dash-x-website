import React from 'react';
import { 
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
  Expand,
  Network
} from 'lucide-react';

const Features = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-[#000000] to-[#0A0A11]">
      
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
                <h2 className="text-2xl font-semibold tracking-tight text-white">End‑to‑end encryption</h2>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Assesium secures your exams and data with end‑to‑end encryption. Keys stay on your devices, with continuous, zero‑knowledge sync—no manual steps required.
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
                      <p className="text-white font-medium">Assesium Sync Service</p>
                      <p className="text-[13px] text-neutral-400">P2P + Local‑first</p>
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
            <div className="ring-1 ring-white/10 shadow-black/40 bg-white/5 rounded-[28px] shadow-2xl backdrop-blur">
              <div className="sm:p-6 border-white/10 border-b pt-5 pr-5 pb-5 pl-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
                      <RefreshCcw className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                      Mark an Exam
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
                        Exam marked: <span className="text-white">Math Final Exam</span>
                      </p>
                      <p className="text-[13px] text-white/60">Encrypted and signed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
                    <Server className="w-4.5 h-4.5 text-sky-300 mt-0.5" />
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
                      <CheckCircle2 className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                      Sync across devices
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
                      Ready to use
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

export default Features;


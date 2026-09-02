import React from 'react';
import { 
  Asterisk, 
  Search, 
  Plus, 
  Settings, 
  User, 
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
  Server 
} from 'lucide-react';

const AppPreview = () => {
  return (
    <div className="relative sm:mt-16 mt-12">
      {/* Glow */}
      <div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-indigo-500/30 blur-2xl"></div>

      <section 
        className="relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/5 overflow-hidden text-white bg-white/5 border-slate-50/10 border rounded-2xl backdrop-blur-xl"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'
        }}
      >
        {/* Sidebar (icons only) */}
        <nav className="hidden sm:flex flex-col absolute inset-y-0 left-0 w-14 ring-1 ring-white/10 z-10 border-slate-50/0 border-r pt-4 pr-2 pb-4 pl-2 backdrop-blur items-center justify-between" aria-label="Primary">
          <div className="flex flex-col gap-3 items-center">
            <button type="button" className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20 shadow-lg shadow-violet-900/25 flex items-center justify-center" title="Home" aria-label="Home">
              <Asterisk className="w-5 h-5 text-white" />
            </button>
            <div className="h-px w-8 bg-white/10"></div>
            <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Search" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="New Exam" aria-label="New Exam">
              <Plus className="w-5 h-5" />
            </button>
            <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Settings" aria-label="Settings">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <button type="button" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Profile" aria-label="Profile">
              <User className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {/* Main content area */}
        <div className="sm:ml-14 min-h-[400px] sm:min-h-[500px] flex">
          {/* Note list */}
          <div className="w-full sm:w-80 border-r border-white/10 bg-white/[0.02] backdrop-blur">
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search exams..." 
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
            </div>
            
            <div className="p-2">
              <div className="space-y-1">
                <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white">Math Final Exam</h3>
                    <span className="text-xs text-white/60">2m ago</span>
                  </div>
                  <p className="text-xs text-white/70 line-clamp-2">Detailed analysis of student performance and recommendations for improvement.</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                      Active
                    </span>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/90">Assignment - English Essay - Marking Review</h3>
                    <span className="text-xs text-white/60">1h ago</span>
                  </div>
                  <p className="text-xs text-white/60 line-clamp-2">Reviewed AI marking results and teacher feedback for English essay assignments.</p>
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
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold text-white">Math Final Exam</h2>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Synced
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <div className="prose prose-invert max-w-none">
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-violet-500/20 text-violet-300 rounded text-xs font-medium">Q4</span>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-2">Key Objectives</h3>
                      <ul className="space-y-1 text-white/70">
                        <li>• Launch AI-powered note suggestions</li>
                        <li>• Implement real-time collaboration</li>
                        <li>• Mobile app performance optimization</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-violet-500/30 pl-4 py-2">
                    <p className="text-white/80 italic">
                      "Focus on user experience and seamless integration across all platforms"
                    </p>
                    <p className="text-xs text-white/50 mt-1">— Product Strategy Meeting</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span>Linked notes:</span>
                    <a href="#" className="text-violet-300 hover:text-violet-200 underline">Design System</a>
                    <span>•</span>
                    <a href="#" className="text-violet-300 hover:text-violet-200 underline">User Research</a>
                    <span>•</span>
                    <a href="#" className="text-violet-300 hover:text-violet-200 underline">Technical Specs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppPreview;


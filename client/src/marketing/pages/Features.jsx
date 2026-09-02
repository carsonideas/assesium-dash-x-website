

import { useState, useEffect } from 'react'
import '../App.css'
import { Sparkles, Bot, Search, Cloud, Shield, Lock, Eye, FileCheck, Zap, ArrowRight, LogIn, Sun, Moon, Users, FileText, Download, Mic, BarChart3, Slack, HardDrive, Calendar, Workflow, Clock, Gauge, TrendingUp, UserCheck } from 'lucide-react'

function Features() {
  const [isDark] = useState(() => (localStorage.getItem('theme') || 'dark') === 'dark')
  const [activeDemo, setActiveDemo] = useState('ai-writing')

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('dark', 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.className = 'antialiased text-zinc-100 bg-[#0a0a12]'
    } else {
      document.documentElement.classList.add('light')
      document.body.className = 'antialiased text-zinc-900 bg-white'
    }
  }, [isDark])


  const demoTabs = [
    { id: 'ai-writing', label: 'AI Writing' },
    { id: 'smart-search', label: 'Smart Search' },
    { id: 'backlinks', label: 'Backlinks' }
  ]

  return (
    <div className={`features-route antialiased ${isDark ? 'text-zinc-100 bg-[#0a0a12]' : 'text-zinc-900 bg-white'}`} style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial' }}>
      {/* Background glow - only show in dark mode */}
      {isDark && (
        <div className="pointer-events-none fixed inset-0 overflows-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
        </div>
      )}


      {/* Hero Section */}
      <section className="relative z-10 hero-section pt-20 pb-16">
        <div className="gradient-bg"></div>
        <div className="glass-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 rounded-full border ${isDark ? 'border-white/10 bg-white/5 text-zinc-200' : 'border-zinc-200 bg-zinc-100 text-zinc-700'} px-3 py-1 text-xs font-medium backdrop-blur`}>
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Powerful Features
              </span>
            </div>
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-6`}>
              Everything you need to<br />
              <span className="text-violet-400">think clearly</span>
            </h1>
            <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              Assesium combines the power of AI with intuitive design to create the ultimate exam marking and educational management experience. Discover features that revolutionize how you assess, teach, and learn.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative z-10 py-20 light-gradient-3 light-glass-orbs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* AI-Powered Notes */}
            <div className={`feature-card lg:col-span-2 relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              {isDark && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,transparent_70%)] opacity-50"></div>}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>AI-Powered Intelligence</h3>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Smart suggestions that understand context</p>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img src="/ai-powered-notes.png" alt="AI-powered note-taking interface" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>AI-Powered Marking</h4>
                      <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>AI suggests marking criteria and feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Performance Analytics</h4>
                      <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Analyze student performance and identify trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Search */}
            <div className={`feature-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div 
              // className="floating animate-[floating_6s_ease-in-out_infinite]"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img src="/instant-search.png" alt="Lightning-fast search interface" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Instant Search</h3>
              </div>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Find any exam, student, or report in milliseconds with our lightning-fast search engine.</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  Full-text search across all exams and reports
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  Smart filters and tags
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  Search by student, class, or date
                </div>
              </div>
            </div>

            {/* Cross-Platform Sync */}
            <div className={`feature-card lg:col-span-3 relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Seamless Sync</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your notes, everywhere you need them</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-6`}>
                    Access all your assessment data from any device with real-time synchronization. Whether you're on your phone, tablet, or computer, your records are always with you.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-100 border-zinc-200'} border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded bg-emerald-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className={`${isDark ? 'text-white' : 'text-zinc-900'} text-sm font-medium`}>Real-time</span>
                      </div>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-xs`}>Changes sync instantly across all devices</p>
                    </div>
                    <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-100 border-zinc-200'} border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.s3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className={`${isDark ? 'text-white' : 'text-zinc-900'} text-sm font-medium`}>Offline Access</span>
                      </div>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-xs`}>Work without internet, sync later</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video lg:aspect-auto rounded-2xl overflow-hidden">
                  <img src="/cross-platform-sync.png" alt="Cross-platform synchronization demo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Security & Privacy */}
            <div className={`feature-card lg:col-span-2 relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Security & Privacy</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your data is safe and secure</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-6`}>
                    End-to-end encryption ensures your exam data remains private. We use industry-standard security practices to protect all sensitive assessment information.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Lock className="h-4 w-4 text-green-400" />
                      </div>
                      <span className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Zero-knowledge architecture</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src="/security-shield.png" alt="Security and privacy features" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className={`feature-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img src="/performance-metrics.png" alt="Performance analytics dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Gauge className="h-5 w-5 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Performance</h3>
              </div>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Lightning-fast performance with real-time analytics.</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                  Sub-100ms search results
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                  Real-time collaboration
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                  99.9% uptime guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Privacy */}
      <section className="relative z-10 py-20 light-gradient-4 animated-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`feature-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Enterprise-Grade Security</h3>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Protecting your data with advanced measures</p>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img src="/security-shield.png" alt="Security shield icon" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center mt-1">
                    <Lock className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>End-to-End Encryption</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your notes are encrypted from creation to storage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-pink-500/20 flex items-center justify-center mt-1">
                    <FileCheck className="h-4 w-4 text-pink-400" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Regular Security Audits</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Independent experts verify our security protocols</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`feature-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Privacy by Design</h3>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your data, your control</p>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img src="/company-culture.png" alt="Privacy by design illustration" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center mt-1">
                    <Zap className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Zero-Knowledge Architecture</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>We can't access your encrypted data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-red-500/20 flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>GDPR & CCPA Compliant</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Adhering to global privacy regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="relative z-10 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
        Advanced Features
      </h2>
      <p className="text-zinc-400 max-w-2xl mx-auto">
        Discover powerful tools to enhance your note-taking experience with seamless integration and advanced capabilities.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {/* Rich Media Support */}
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img 
              // src="https://support.cc/images/blog/social-media-customer-service.png?v=1682512742702523116" 
              // src="https://chatra.com/books/ultimate-guide-to-customer-service-channels/images/social-media-support.png" 
              src="https://chatra.com/books/ultimate-guide-to-customer-service-channels/images/ultimate-guide-to-customer-service-channels.png?4" 



              alt="Rich Media Support" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 w-full md:w-3/5">
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
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img 
              // src="https://ungoti.com/wp-content/uploads/Migrate-fileshare-to-sharepoint-2.png" 
              // src="https://cdn.dribbble.com/userupload/23944449/file/original-fe38fefdc048e41504cc9d5f0dad282d.gif" 
              src="https://engineering.fb.com/wp-content/uploads/2019/11/Data_PortabilityPrivacy_BANNER_003.gif" 
              
              
              
              alt="Export & Share" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 w-full md:w-3/5">
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
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img 
              src="https://static01.nyt.com/images/2024/03/03/fashion/23VOICE-NOTES/23VOICE-NOTES-videoLarge.jpg"
              // src="https://cdn.dribbble.com/userupload/21823231/file/original-72afa7b9b91b506e7eeee3d53447120c.gif" 
              
              



              alt="Voice Notes" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 w-full md:w-3/5">
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
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img 
              src="https://www.inspirisys.com/uploads/general_image/Employee-Performance-Management.jpg" 
              alt="Performance Metrics" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 w-full md:w-3/5">
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
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img 
              src="https://mondo.com/wp-content/uploads/2023/08/areas-of-business-that-could-benefit-from-integrated-technologies-2023.jpg" 
              alt="Integrations" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 w-full md:w-3/5">
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
      <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
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

      {/* Demo Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Experience Assesium in Action</h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>See how Assesium's powerful features can transform your workflow.</p>
          </div>

          <div className={`flex justify-center mb-8 p-1 rounded-full ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-100'}`}>
            {demoTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDemo(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDemo === tab.id
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg'
                    : `${isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={`relative rounded-3xl overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} backdrop-blur p-6 lg:p-12`}>
            {activeDemo === 'ai-writing' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>AI-Powered Writing Assistant</h3>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-6`}>
                    Let Assesium's AI help you craft perfect notes, summaries, and even creative content. From grammar checks to idea generation, our AI is your intelligent co-pilot.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Intelligent Summarization</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Condense long articles into key takeaways.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Grammar & Style Correction</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Refine your writing with AI-powered suggestions.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Idea Generation</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Brainstorm new concepts with AI prompts.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src="/ai-powered-notes.png" alt="AI writing assistant demo" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeDemo === 'smart-search' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Smart Search & Organization</h3>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-6`}>
                    Never lose track of an idea again. Assesium's intelligent search understands context, allowing you to find notes instantly, even if you can't remember the exact keywords.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Semantic Search</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Find notes based on meaning, not just keywords.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Automated Tagging</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>AI automatically categorizes and tags your notes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Cross-Reference Linking</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Discover hidden connections between your ideas.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src="/instant-search.png" alt="Smart search demo" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeDemo === 'backlinks' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Backlinks & Knowledge Graph</h3>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-6`}>
                    Build a powerful personal knowledge graph with Assesium's automatic backlinks. See how your ideas connect and discover new insights as your knowledge base grows.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Automatic Backlinking</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Connect related notes effortlessly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                          <path d="M20 6 9 17 părin5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Interactive Knowledge Graph</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Visualize the relationships between your ideas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Contextual Discovery</h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Uncover new insights based on connected concepts.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src="/global-presence.png" alt="Knowledge graph demo" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

       {/* Integrations Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
              Integrate with Your Favorite Tools
            </h2>
            <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              Assesium plays well with others. Connect your essential apps for a seamless workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integration 1: Slack */}
            <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                  <Slack className="h-5 w-5 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Slack Integration</h3>
              </div>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Share notes and collaborate with your team directly from Slack.</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Send notes to channels
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Receive notifications for updates
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Create notes from Slack messages
                </div>
              </div>
            </div>

            {/* Integration 2: Google Drive */}
            <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <HardDrive className="h-5 w-5 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Google Drive Sync</h3>
              </div>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Keep your notes backed up and accessible in your Google Drive.</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Automatic backups
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Access notes from Drive
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Seamless file management
                </div>
              </div>
            </div>

            {/* Integration 3: Calendar Sync */}
            <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Calendar Integration</h3>
              </div>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Link your notes to events and appointments for better organization.</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Attach notes to events
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Create events from notes
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Event reminders with note links
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 sm:p-16 text-center`}>
            {isDark && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,transparent_70%)] opacity-50" />}
            <div className="relative z-10">
              <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
                Ready to Transform Your Notes?
              </h2>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} max-w-2xl mx-auto mb-8`}>
                Join thousands of users who are already experiencing the power of Assesium. Start your free trial today!
              </p>
              <button type="button" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{ backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)' }}>
                <span className={`flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium ${isDark ? 'bg-[#0b0f17]' : 'bg-white'} rounded-md pt-2 pr-4 pb-2 pl-4`}>
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section> */}


      <section className="relative z-10 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
        Integrate with Your Favorite Tools
      </h2>
      <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
        Assesium plays well with others. Connect your essential apps for a seamless workflow.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Integration 1: Slack */}
      <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-0 backdrop-blur transition-all duration-300 group hover:shadow-[0_0_25px_5px_rgba(139,92,246,0.4)] h-72`}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
              alt="Slack Integration" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.5 16.5c0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7zm2.7-10.8c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7zm10.8 2.7c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7zm-10.8 0c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7zm10.8 0c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Slack Integration</h3>
            </div>
            <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Share notes and collaborate with your team directly from Slack.</p>
            <div className="space-y-2">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Send notes to channels
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Receive notifications for updates
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Create notes from Slack messages
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration 2: Google Drive */}
      <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-0 backdrop-blur transition-all duration-300 group hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)] h-72`}>
        <div className="flex flex-col md:flex-row-reverse h-full">
          <div className="md:w-2/5">
            <img 
              src="https://www.prosperops.com/wp-content/uploads/2024/01/GCP-blog-featured-image-01-1.jpg" 
              alt="Google Drive Sync" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.62 0l-3.6 6.3L0 6.3l7.62 13.7L12 13.7 7.62 6.3 12 6.3 7.62 0zM24 6.3l-7.62 13.7L12 13.7l4.38-7.4L12 6.3l4.38-6.3L24 6.3z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Google Drive Sync</h3>
            </div>
            <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Keep your notes backed up and accessible in your Google Drive.</p>
            <div className="space-y-2">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Automatic backups
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Access notes from Drive
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Seamless file management
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration 3: Calendar Sync */}
      <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-0 backdrop-blur transition-all duration-300 group hover:shadow-[0_0_25px_5px_rgba(34,197,94,0.4)] h-72`}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5">
            <img 
              src="https://www.taskade.com/blog/wp-content/uploads/2021/03/taskade-google-calendar-2-way-sync-1024x732.png" 
              alt="Calendar Integration" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7v-5z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Calendar Integration</h3>
            </div>
            <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Link your notes to events and appointments for better organization.</p>
            <div className="space-y-2">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Attach notes to events
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Create events from notes
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Event reminders with note links
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration 4: Trello */}
      <div className={`integration-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-0 backdrop-blur transition-all duration-300 group hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] h-72`}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
              alt="Trello Integration" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 2v8h4V6H6zm6 0v12h4V6h-4z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Trello Integration</h3>
            </div>
            <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Organize your projects by linking notes to Trello boards and cards.</p>
            <div className="space-y-2">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                Create Trello cards from notes
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                Sync tasks with boards
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                Track project progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative rounded-3xl p-8 sm:p-12 overflow-hidden ${isDark ? 'bg-gradient-to-br from-violet-600 to-indigo-700' : 'bg-gradient-to-br from-violet-500 to-indigo-600'} text-white`}>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Ready to Transform Your Notes?</h2>
              <p className="text-lg mb-8 opacity-90">Start using Assesium today and experience the future of intelligent note-taking.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-violet-700 bg-white hover:bg-violet-50 transition-colors"
                >
                  Get Started Free
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-full shadow-sm text-white hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* Background elements for CTA */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer */}
      {/* <footer className={`relative mt-16 sm:mt-20 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="text-white h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6v12"></path>
                  <path d="M17.196 9 6.804 15"></path>
                  <path d="m6.804 9 10.392 6"></path>
                </svg>
              </span>
              <span>© 2025 Assesium Labs</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Privacy</a>
              <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Terms</a>
              <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Status</a>
            </div>
          </div>
        </div>
      </footer> */}

      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
        }
      `}</style>
    </div>
  )
}

export default Features
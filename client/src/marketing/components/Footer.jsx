

import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Shield,
  Zap,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 'dark';
      const isDarkMode = theme === 'dark' || document.documentElement.className === 'dark';
      setIsDark(isDarkMode);
    };

    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`assesium-footer relative border-t ${isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-zinc-50 border-zinc-200'} backdrop-blur-sm`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Assesium</span>
            </div>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Transforming education through intelligent AI-powered exam marking, comprehensive reporting, and seamless educational management.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com/assesium" 
                aria-label="Twitter" 
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'}`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/assesium" 
                aria-label="LinkedIn" 
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'}`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/assesium" 
                aria-label="GitHub" 
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'}`}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className={`font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              <Zap className="h-4 w-4 text-violet-500" />
              Platform
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/features" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  AI Exam Marking
                </Link>
              </li>
              <li>
                <Link to="/features" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Comprehensive Reports
                </Link>
              </li>
              <li>
                <Link to="/features" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Scheduling System
                </Link>
              </li>
              <li>
                <Link to="/features" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Tutoring Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={`font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              <Users className="h-4 w-4 text-violet-500" />
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  About Assesium
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Educational Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Contact Support
                </Link>
              </li>
              <li>
                <a href="#careers" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className={`font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              <BookOpen className="h-4 w-4 text-violet-500" />
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#documentation" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  API Reference
                </a>
              </li>
              <li>
                <a href="#help" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#status" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <ArrowRight className="h-3 w-3" />
                  System Status
                </a>
              </li>
              <li>
                <a href="#security" className={`flex items-center gap-2 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                  <Shield className="h-3 w-3" />
                  Security & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Stay updated with Assesium
              </h3>
              <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Get the latest updates on AI-powered education and new features.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 lg:w-64 px-4 py-2 rounded-lg text-sm transition-colors ${isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-500' : 'bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400'} border focus:outline-none focus:ring-2 focus:ring-violet-500/50`}
              />
              <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-violet-600 hover:to-indigo-700 transition-colors flex items-center gap-2">
                Subscribe
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${isDark ? 'border-white/10 bg-zinc-900/80' : 'border-zinc-200 bg-zinc-100/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-3">
                <img src="/assesium-logo.png" alt="Assesium Logo" className="h-8" />
                <span className={`flex items-center gap-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  © {new Date().getFullYear()} Assesium, Inc. Made with 
                  <Heart className="h-4 w-4 text-red-500" /> 
                  for educators worldwide
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#terms" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                Terms of Service
              </a>
              <a href="#privacy" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                Privacy Policy
              </a>
              <a href="#cookies" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
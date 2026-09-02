

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Asterisk, Sun, Moon, LogIn, Menu, X } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <header className="assesium-header relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
      <div className="max-w-7xl sm:px-6 lg:px-8 border-slate-50/5 mr-auto ml-auto pr-4 pl-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assesium-logo.png" alt="Assesium Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 border-slate-50/5 border rounded-full px-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-white bg-white/10 rounded-full'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 items-center">
            <button 
              id="theme-toggle" 
              type="button" 
              role="button" 
              aria-label="Toggle theme" 
              onClick={toggleTheme}
              className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full p-1 items-center justify-center"
              style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}}
            >
              <span className="flex items-center justify-center w-2.5 h-2.5 transition-colors duration-300 group-hover:bg-transparent">
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </span>
            </button>
            
            <Link
              to="/login"
              className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center"
              style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}}
            >
              <span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md pt-2 pr-4 pb-2 pl-4">
                <LogIn className="h-3 w-2.5" />
                <span>Login</span>
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-zinc-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 py-4">
        <div className="gradient-bg"></div>

            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive(item.path)
                      ? 'text-white bg-white/10'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-2 mt-2">
                <Link
                  to="/get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-600 rounded-md text-center"
                >
                  Get Started
                </Link>
              </div>
            </nav>
            
          </div>
          
        )}
      </div>
    </header>
  );
};

export default Header;
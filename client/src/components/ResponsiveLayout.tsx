// Shared Assesium shell: mirror the Dashboard's rounded surface, anchored sidebar cards, and purple/orange top-bar hierarchy across every routed page.
// Interactions in this file intentionally stay local and frontend-only: route navigation, theme cycling, mail support, profile actions, and modal opening.
// @ts-nocheck
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Brain,
  Building2,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  GraduationCap,
  Menu,
  MoreVertical,
  Settings,
  Upload,
  User,
  Users,
  UsersRound,
  X,
  BookOpen,
  Headphones,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import FloatingAIChat, { openFloatingAIChat } from './FloatingAIChat';
import { useModalStore } from '../stores/useModalStore';

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { path: '/institutions', label: 'Institutions', icon: Building2 },
  { path: '/ai-processing', label: 'AI Processing', icon: Brain },
  { path: '/students', label: 'Students', icon: Users },
  { path: '/teachers', label: 'Teachers', icon: GraduationCap },
  { path: '/teacher-schedule', label: 'Schedule', icon: Calendar },
  { path: '/reports', label: 'Reports', icon: FileText },
  { path: '/tutoring', label: 'Tutoring', icon: BookOpen },
  { path: '/community-groups', label: 'Community/Groups', icon: UsersRound },
  { path: '/payments', label: 'Payments', icon: CreditCard },
  { path: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const pageTitles: Record<string, string> = {
  '/dashboard/settings': 'Settings',
  '/dashboard/profile': 'Settings',
  '/institutions': 'Institutions',
  '/ai-processing': 'AI Processing',
  '/students': 'Students',
  '/teachers': 'Teachers',
  '/teacher-schedule': 'Schedule',
  '/reports': 'Reports',
  '/tutoring': 'Tutoring',
  '/community-groups': 'Community & Groups',
  '/payments': 'Payments',
  '/enhanced-payments': 'Payments',
  '/settings': 'Settings',
  '/profile': 'Settings',
  '/realtime-marking': 'Realtime Marking',
};

export default function ResponsiveLayout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { openModal } = useModalStore();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarProfileOpen, setIsSidebarProfileOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  // Use the full navigation on laptop/desktop screens; keep the compact rail on smaller layouts.
  const isSmallScreen = typeof window !== 'undefined' && window.screen.width < 1024;
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth < 1024;
  });
  const [, forceUpdate] = useState({});

  const userName = localStorage.getItem('userName') || 'Teacher Admin';
  const userAvatar = localStorage.getItem('userAvatar');
  const initials = userName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const pageTitle = useMemo(() => {
    if (location.pathname.startsWith('/students/')) return 'Student Details';
    if (location.pathname.startsWith('/teachers/')) return 'Teacher Details';
    return pageTitles[location.pathname] || 'Assesium';
  }, [location.pathname]);

  useEffect(() => {
    const handleAvatarUpdate = () => forceUpdate({});
    window.addEventListener('avatarUpdated', handleAvatarUpdate);
    setIsMobileSidebarOpen(false);
    setIsProfileOpen(false);
    setIsSidebarProfileOpen(false);
    return () => window.removeEventListener('avatarUpdated', handleAvatarUpdate);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const openSupport = () => openFloatingAIChat();

  const logOut = () => {
    setIsProfileOpen(false);
    setIsSidebarProfileOpen(false);
    navigate('/student-login');
  };

  return (
    <div className="app-shell h-screen w-screen overflow-hidden p-2 md:p-4 transition-colors duration-300 box-border">
      <div className="glass-effect h-full w-full rounded-[40px] p-4 md:p-6 shadow-2xl relative overflow-hidden flex flex-col">
        <div className="floating-dots" aria-hidden="true">
          <div className="dot w-3 h-3 top-10 left-10" />
          <div className="dot w-2 h-2 top-20 right-20" />
          <div className="dot w-4 h-4 bottom-20 left-1/4" />
          <div className="dot w-2 h-2 top-1/3 right-1/3" />
        </div>

        {isMobileSidebarOpen && (
          <button
            aria-label="Close navigation"
            className="fixed inset-0 z-40 bg-slate-950/50 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        <div className="relative z-10 flex h-full min-h-0 gap-6">
          <aside
            className={`route-sidebar h-full min-h-0 shrink-0 flex-col transition-all duration-300 ${
              isMobileSidebarOpen
                ? 'fixed inset-y-2 left-2 z-[9999] translate-x-0 rounded-3xl p-3 shadow-2xl w-20 bg-white dark:bg-gray-900 overflow-hidden max-h-[calc(100vh-1rem)] flex flex-col items-center pointer-events-auto'
                : isSidebarCollapsed
                ? 'hidden md:flex md:w-20 p-3'
                : 'hidden md:flex md:w-64 p-4'
            }`}
          >
            <div className={`mb-8 flex items-center ${isMobileSidebarOpen || isSidebarCollapsed ? 'justify-center px-0 w-full' : 'gap-3 px-2'}`}>
              <Link
                to="/"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label="Go to the Assesium website homepage"
                title="Assesium website homepage"
              >
                <img
                  src="/assesium-logo.png"
                  alt="Assesium"
                  className={`relative shrink-0 rounded-lg bg-[#111827] object-contain p-1 ${isMobileSidebarOpen || isSidebarCollapsed ? 'h-10 w-10 object-cover object-left' : 'h-10 w-28'}`}
                />
              </Link>
              <button className="hidden md:flex ml-auto rounded-xl p-1.5 text-gray-400 hover:bg-purple-100 dark:hover:bg-white/10" onClick={() => setIsSidebarCollapsed((c) => !c)} aria-label="Toggle sidebar width" title="Toggle sidebar">
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isSidebarCollapsed ? '-rotate-90' : 'rotate-90'}`} />
              </button>
            </div>
            {isMobileSidebarOpen && (
              <button className="mb-4 rounded-xl p-2 text-gray-400 hover:bg-purple-100 dark:hover:bg-white/10" onClick={() => setIsMobileSidebarOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
            )}

            <nav className="flex-1 min-h-0 overflow-y-auto space-y-2 w-full pr-0.5" aria-label="Main menu">
              {navigationItems.map(({ path, label, icon: Icon }) => (
                <button
                  key={path}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMobileSidebarOpen(false);
                    navigate(path);
                  }}
                  title={label}
                  className={`sidebar-item flex w-full items-center ${isMobileSidebarOpen || isSidebarCollapsed ? 'justify-center px-0 py-3.5' : 'gap-4 px-5 py-3.5'} rounded-2xl transition-all cursor-pointer ${isActive(path) ? 'active' : 'text-gray-600 dark:text-gray-300 hover:bg-purple-100/70 dark:hover:bg-white/10'}`}
                >
                  <Icon className="h-5 w-5 shrink-0 pointer-events-none" />
                  {!isMobileSidebarOpen && !isSidebarCollapsed && <span className="font-medium truncate pointer-events-none">{label}</span>}
                </button>
              ))}
            </nav>

            <div className="mt-auto shrink-0 space-y-5 pt-8 w-full flex flex-col items-center sticky bottom-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
              <button
                onClick={() => openModal('import', { type: 'students', title: 'Upload New Exam Paper' })}
                title={isMobileSidebarOpen || isSidebarCollapsed ? 'Upload New Exam Paper' : undefined}
                className={`flex w-full items-center ${isMobileSidebarOpen || isSidebarCollapsed ? 'justify-center p-3' : 'gap-3 p-4'} rounded-2xl border border-gray-100 bg-white text-left text-gray-800 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30"><Upload className="h-5 w-5" /></span>
                {!isMobileSidebarOpen && !isSidebarCollapsed && (
                  <span><span className="block text-sm font-semibold">Upload New</span><span className="block text-xs opacity-70">Exam Paper</span></span>
                )}
              </button>

              <div className={`relative border-t border-gray-200 pt-5 dark:border-gray-700 w-full flex flex-col items-center`}>
                <button
                  onClick={() => navigate('/profile')}
                  title={isMobileSidebarOpen || isSidebarCollapsed ? 'Dr. Sarah Chen - Dept. Chair' : undefined}
                  className={`flex w-full items-center ${isMobileSidebarOpen || isSidebarCollapsed ? 'justify-center p-2' : 'gap-3 p-3 pr-11'} ${isSmallScreen && isSidebarCollapsed ? 'flex-col gap-1' : ''} rounded-2xl bg-gray-50 text-left transition hover:bg-purple-50 dark:bg-gray-800 dark:hover:bg-gray-700`}
                >
                  <div className="relative shrink-0">
                    {userAvatar ? <img src={userAvatar} alt="Dr. Sarah Chen" className="h-10 w-10 rounded-full border-2 border-purple-500 object-cover" /> : <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-500 bg-purple-600 font-semibold text-white">{initials || 'TA'}</div>}
                  </div>
                  {!isMobileSidebarOpen && !isSidebarCollapsed && (
                    <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-gray-800 dark:text-white">Dr. Sarah Chen</span><span className="block truncate text-xs text-gray-500 dark:text-gray-400">Dept. Chair</span></span>
                  )}
                  {!isMobileSidebarOpen && isSmallScreen && isSidebarCollapsed && (
                    <span className="w-full min-w-0 text-center leading-tight">
                      <span className="block truncate whitespace-nowrap text-[10px] font-semibold text-gray-800 dark:text-white">Dr. Sarah Chen</span>
                      <span className="block truncate whitespace-nowrap text-[9px] text-gray-500 dark:text-gray-400">Dept. Chair</span>
                    </span>
                  )}
                </button>
                {!isMobileSidebarOpen && !isSidebarCollapsed && (
                  <button onClick={() => { setIsProfileOpen(false); setIsSidebarProfileOpen((open) => !open); }} aria-expanded={isSidebarProfileOpen} aria-haspopup="menu" aria-label="Open Teacher Admin menu" className="absolute right-2 top-8 rounded-xl p-2 text-gray-500 transition hover:bg-purple-100 dark:text-gray-300 dark:hover:bg-white/10">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                )}
                {isSidebarProfileOpen && (
                  <div role="menu" className="absolute bottom-20 left-0 z-50 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                    <button onClick={() => { setIsSidebarProfileOpen(false); navigate('/profile'); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-gray-700"><User className="h-4 w-4" />Update Profile</button>
                    <button onClick={() => { setIsSidebarProfileOpen(false); navigate('/settings'); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-gray-700"><Settings className="h-4 w-4" />Settings</button>
                    <button onClick={() => { setIsSidebarProfileOpen(false); openSupport(); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-gray-700"><Headphones className="h-4 w-4" />Contact Support</button>
                    <button onClick={logOut} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"><X className="h-4 w-4" />Log Out</button>
                  </div>
                )}
              </div>
            </div>
          </aside>

          <main className="min-w-0 flex-1 flex flex-col h-full min-h-0 overflow-hidden pr-2">
            <header className="shrink-0 mb-4 flex flex-wrap items-start justify-between gap-4 px-1">
              <div className="flex items-start gap-3">
                <button onClick={() => setIsMobileSidebarOpen(true)} className="rounded-xl p-2 text-gray-600 hover:bg-purple-100 dark:text-gray-200 dark:hover:bg-white/10 md:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{pageTitle}</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <ThemeToggle />
                <button className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:shadow-xl sm:flex"><Calendar className="h-4 w-4" />Apr - Jun 2026</button>
                <button onClick={openSupport} className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-purple-100 dark:text-gray-300 dark:hover:bg-white/10 lg:flex"><Headphones className="h-4 w-4" />Support</button>
                <div className="relative">
                  <button onClick={() => { setIsSidebarProfileOpen(false); setIsProfileOpen((open) => !open); }} className="flex items-center gap-2 rounded-xl px-2 py-2 transition hover:bg-purple-100 dark:hover:bg-white/10" aria-expanded={isProfileOpen} aria-haspopup="menu">
                    {userAvatar ? <img src={userAvatar} alt={userName} className="h-9 w-9 rounded-full object-cover" /> : <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">{initials || 'TA'}</span>}
                    <span className="hidden text-sm font-semibold text-gray-700 dark:text-gray-200 lg:block">Teacher Admin</span>
                    <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                  </button>
                  {isProfileOpen && (
                    <div role="menu" className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                      <button onClick={() => { setIsProfileOpen(false); navigate('/profile'); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-gray-700"><User className="h-4 w-4" />Update Profile</button>
                      <button onClick={() => { setIsProfileOpen(false); navigate('/settings'); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-gray-700"><Settings className="h-4 w-4" />Settings</button>
                      <button onClick={() => { setIsProfileOpen(false); openSupport(); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-gray-700"><Headphones className="h-4 w-4" />Contact Support</button>
                      <button onClick={logOut} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"><X className="h-4 w-4" />Log Out</button>
                    </div>
                  )}
                </div>
                <button onClick={() => { setIsSidebarProfileOpen(false); setIsProfileOpen((open) => !open); }} className="rounded-xl p-2 text-gray-500 transition hover:bg-purple-100 dark:text-gray-300 dark:hover:bg-white/10" aria-label="Open account menu"><MoreVertical className="h-5 w-5" /></button>
              </div>
            </header>

            <div className={`${location.pathname === '/student-login' || location.pathname === '/student-dashboard' ? 'route-page-content' : 'route-page-surface'} flex-1 min-w-0 min-h-0 overflow-y-auto overscroll-contain pr-1`}>
              {children}
            </div>
          </main>
        </div>
      </div>
      <FloatingAIChat />
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../stores/useThemeStore';
import { useModalStore } from '../stores/useModalStore';
import Chart from 'chart.js/auto';
import {
  Home,
  FileText,
  Users,
  Building2,
  Zap,
  Calendar,
  Settings,
  LogOut,
  Sun,
  Moon,
  Sparkles,
  MoreVertical,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Lock,
  TrendingUp,
  GraduationCap,
  Brain,
  BarChart3,
  BookOpen,
  UsersRound,
  CreditCard,
  Headphones,
  User,
  Eye,
  Download,
} from 'lucide-react';
import { institutions } from '../data/institutions';
import { generateReport } from '../components/ReportGenerator';

interface ExamResult {
  id: string;
  student: string;
  studentImage: string;
  studentId: string;
  institution: string;
  subject: string;
  score: number;
  grade: string;
  status: 'completed' | 'under-review' | 'pending';
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  status: 'online' | 'away' | 'offline';
}

interface PendingReview {
  id: string;
  title: string;
  description: string;
  icon: 'alert' | 'clipboard' | 'check';
  urgency?: 'urgent' | 'normal';
}

const examData: ExamResult[] = [
  {
    id: '1',
    student: 'Shan McCartney',
    studentImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    studentId: 'S10045',
    institution: 'Cambridge High School',
    subject: 'Mathematics',
    score: 87,
    grade: 'A',
    status: 'completed',
  },
  {
    id: '2',
    student: 'Alice Johnson',
    studentImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    studentId: 'S10046',
    institution: 'Cambridge High School',
    subject: 'English Literature',
    score: 92,
    grade: 'A+',
    status: 'completed',
  },
  {
    id: '3',
    student: 'Michael Williams Jr',
    studentImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    studentId: 'S10047',
    institution: 'Oxford Academy',
    subject: 'Physics',
    score: 78,
    grade: 'B+',
    status: 'completed',
  },
  {
    id: '4',
    student: 'Emily Williams',
    studentImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    studentId: 'S10048',
    institution: 'Stanford University',
    subject: 'Chemistry',
    score: 65,
    grade: 'C',
    status: 'under-review',
  },
  {
    id: '5',
    student: 'Robert Brown',
    studentImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    studentId: 'S10049',
    institution: 'Oxford Academy',
    subject: 'History',
    score: 72,
    grade: 'B',
    status: 'pending',
  },
];

const teamMembers = [
  {
    id: 'T101',
    name: 'Dr. James Wilson',
    role: 'Physics Lead',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    status: 'online',
  },
  {
    id: 'T102',
    name: 'Prof. Maria Garcia',
    role: 'Chemistry Dept',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    status: 'offline',
  },
  {
    id: 'T103',
    name: 'Dr. David Kim',
    role: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    status: 'away',
  },
];

const pendingReviews = [
  {
    id: '1',
    title: 'Math Final Exam',
    description: '12 papers need verification',
    icon: 'alert',
    urgency: 'urgent',
    route: '/ai-processing',
  },
  {
    id: '2',
    title: 'Physics Mid-term',
    description: 'AI marking in progress',
    icon: 'clipboard',
    route: '/ai-processing',
  },
  {
    id: '3',
    title: 'Chemistry Quiz',
    description: 'Ready for publishing',
    icon: 'check',
    route: '/reports',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { theme, cycleTheme } = useThemeStore();
  const { openModal } = useModalStore();
  const isDarkMode = theme !== 'light';
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || 'Dr. Sarah Chen');
  const [userAvatar, setUserAvatar] = useState(() => localStorage.getItem('userAvatar') || '');
  const [heroBackgroundMode, setHeroBackgroundMode] = useState<'original' | 'status' | 'peach'>(() => {
    const storedMode = localStorage.getItem('dashboard-hero-background');
    return storedMode === 'status' || storedMode === 'peach' ? storedMode : 'original';
  });
  const [summaryMetricSurfaceMode, setSummaryMetricSurfaceMode] = useState<'ready' | 'white' | 'dark'>(() => {
    const storedMode = localStorage.getItem('dashboard-summary-metrics-surface');
    const defaultsMigrated = localStorage.getItem('dashboard-summary-metrics-default-v2') === 'true';
    if (!defaultsMigrated) {
      localStorage.setItem('dashboard-summary-metrics-default-v2', 'true');
      localStorage.setItem('dashboard-summary-metrics-surface', 'white');
      return 'white';
    }
    return storedMode === 'ready' || storedMode === 'dark' ? storedMode : 'white';
  });

  const toggleHeroBackground = () => {
    const nextMode = heroBackgroundMode === 'original'
      ? 'status'
      : heroBackgroundMode === 'status'
        ? 'peach'
        : 'original';
    setHeroBackgroundMode(nextMode);
    localStorage.setItem('dashboard-hero-background', nextMode);
  };

  const toggleSummaryMetricSurface = () => {
    const nextMode = summaryMetricSurfaceMode === 'ready' ? 'white' : summaryMetricSurfaceMode === 'white' ? 'dark' : 'ready';
    setSummaryMetricSurfaceMode(nextMode);
    localStorage.setItem('dashboard-summary-metrics-surface', nextMode);
  };

  useEffect(() => {
    const handleAvatarUpdate = () => {
      setUserName(localStorage.getItem('userName') || 'Dr. Sarah Chen');
      setUserAvatar(localStorage.getItem('userAvatar') || '');
    };
    window.addEventListener('avatarUpdated', handleAvatarUpdate);
    return () => window.removeEventListener('avatarUpdated', handleAvatarUpdate);
  }, []);
  const [metrics, setMetrics] = useState({
    totalStudents: 2147733,
    papersMarked: 847,
    aiAccuracy: 94,
    pendingReview: 12,
  });
  const [performanceView, setPerformanceView] = useState('Monthly');
  const [timeRange, setTimeRange] = useState('Last 7 Days');
  const [subjectPeriod, setSubjectPeriod] = useState('This Term');
  const [selectedInstitution, setSelectedInstitution] = useState('All Institutions');

  const logOut = () => {
    setIsProfileMenuOpen(false);
    navigate('/student-login');
  };
  const performanceChartRef = useRef<Chart | null>(null);
  const subjectChartRef = useRef<Chart | null>(null);
  const performanceCanvasRef = useRef<HTMLCanvasElement>(null);
  const subjectCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMetrics((previous) => ({
        totalStudents: previous.totalStudents + Math.floor(Math.random() * 5) + 1,
        papersMarked: previous.papersMarked + Math.floor(Math.random() * 3) + 1,
        aiAccuracy: Math.min(99, previous.aiAccuracy + (Math.random() > 0.8 ? 1 : 0)),
        pendingReview: Math.max(0, previous.pendingReview + (Math.random() > 0.65 ? 1 : -1)),
      }));
    }, 120000);

    return () => window.clearInterval(interval);
  }, []);

  const performanceSeries = {
    Monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      average: [78, 82, 80, 85, 83, 87],
      pass: [85, 88, 84, 89, 91, 92],
    },
    Weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      average: [78, 81, 79, 84, 82, 87, 89],
      pass: [86, 88, 87, 91, 90, 93, 95],
    },
    Yearly: {
      labels: ['2022', '2023', '2024', '2025', '2026'],
      average: [68, 73, 78, 82, 86],
      pass: [76, 81, 85, 90, 94],
    },
  } as const;
  const selectedPerformanceSeries = performanceSeries[performanceView as keyof typeof performanceSeries] ?? performanceSeries.Monthly;
  const timeRangeOffset = timeRange === 'Last 30 Days' ? 2 : timeRange === 'Last 90 Days' ? 4 : 0;
  const subjectPeriodOffset = subjectPeriod === 'Last Term' ? -3 : subjectPeriod === 'This Year' ? 4 : 0;
  const subjectDistribution = selectedInstitution === 'All Institutions'
    ? [35 + subjectPeriodOffset, 25 - subjectPeriodOffset, 20, 12, 8]
    : [42 - timeRangeOffset + subjectPeriodOffset, 23 + timeRangeOffset - subjectPeriodOffset, 18, 10, 7];

  useEffect(() => {
    // Initialize charts
    if (performanceCanvasRef.current) {
      const ctx = performanceCanvasRef.current.getContext('2d');
      if (ctx) {
        performanceChartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [...selectedPerformanceSeries.labels],
            datasets: [
              {
                label: 'Average Score',
                data: selectedPerformanceSeries.average.map((value) => Math.max(0, value - timeRangeOffset)),
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                tension: 0.3,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
              {
                label: 'Pass Rate',
                data: selectedPerformanceSeries.pass.map((value) => Math.min(100, value + Math.floor(timeRangeOffset / 2))),
                borderColor: '#f72585',
                backgroundColor: 'rgba(247, 37, 133, 0.1)',
                tension: 0.3,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 20,
                  usePointStyle: true,
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.8)',
                  font: {
                    size: 12,
                    family: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  },
                },
              },
              tooltip: {
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(0, 0, 0, 0.8)',
                titleColor: 'rgba(255, 255, 255, 1)',
                bodyColor: 'rgba(255, 255, 255, 0.9)',
                padding: 12,
                titleFont: {
                  size: 14,
                  weight: 'bold',
                  family: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                },
                bodyFont: {
                  size: 13,
                  family: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                },
                cornerRadius: 4,
                displayColors: true,
                borderWidth: 1,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
                  font: {
                    size: 12,
                    family: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  },
                },
              },
              y: {
                grid: {
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)',
                },
                ticks: {
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
                  font: {
                    size: 12,
                    family: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  },
                },
              },
            },
          },
        });
      }
    }

    if (subjectCanvasRef.current) {
      const ctx = subjectCanvasRef.current.getContext('2d');
      if (ctx) {
        subjectChartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
            datasets: [
              {
                data: subjectDistribution,
                backgroundColor: ['#8b5cf6', '#ec4899', '#f59e0b', '#a78bfa', '#fb923c'],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  usePointStyle: true,
                  padding: 15,
                  font: {
                    size: 11,
                  },
                  color: isDarkMode ? '#d1d5db' : '#6b7280',
                },
              },
            },
          },
        });
      }
    }

    return () => {
      performanceChartRef.current?.destroy();
      subjectChartRef.current?.destroy();
    };
    }, [theme, selectedPerformanceSeries, subjectDistribution, timeRangeOffset]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'under-review':
        return 'text-orange-600';
      case 'pending':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'under-review':
        return 'bg-orange-500';
      case 'pending':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade === 'C') return isDarkMode ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-700';
    return isDarkMode ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700';
  };

  const getStatusBadgeColor = (status: ExamResult['status']) => {
    if (status === 'completed') return isDarkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800';
    if (status === 'under-review') return isDarkMode ? 'bg-yellow-900/40 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
    return isDarkMode ? 'bg-red-900/40 text-red-300' : 'bg-red-100 text-red-800';
  };

  const getStatusLabel = (status: ExamResult['status']) => {
    if (status === 'under-review') return 'Under Review';
    if (status === 'completed') return 'Completed';
    return 'Pending';
  };

  const handleDownloadReport = (exam: ExamResult) => {
    generateReport({
      studentName: exam.student,
      studentId: exam.studentId,
      institution: exam.institution,
      subjects: [{ name: exam.subject, score: exam.score, date: '14 April 2026' }],
    });
  };

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-pink-600" />;
      case 'clipboard':
        return <FileText className="w-5 h-5 text-purple-600" />;
      case 'check':
        return <CheckCircle className="w-5 h-5 text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 min-w-0 space-y-6">
              {/* Hero Banner */}
              <div className={`hero-gradient ${heroBackgroundMode === 'status' ? 'bg-gradient-to-br from-purple-500 to-purple-600' : heroBackgroundMode === 'peach' ? 'hero-peach-rose-plum' : ''} rounded-3xl p-8 mb-6 relative overflow-hidden mt-0`}>
                <button
                  type="button"
                  onClick={toggleHeroBackground}
                  className="absolute top-5 right-5 z-20 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                  aria-label={`Switch welcome background to ${heroBackgroundMode === 'original' ? 'AI System Status' : heroBackgroundMode === 'status' ? 'Peach Rose Plum' : 'original purple'} gradient`}
                  title={`Switch to ${heroBackgroundMode === 'original' ? 'AI System Status' : heroBackgroundMode === 'status' ? 'Peach Rose Plum' : 'original purple'} gradient`}
                >
                  <Sparkles className="h-4 w-4" />
                  <span className="hidden sm:inline">{heroBackgroundMode === 'original' ? 'AI Status Gradient' : heroBackgroundMode === 'status' ? 'Peach Rose Plum' : 'Original Purple'}</span>
                </button>
                <div className="decorative-circle w-64 h-64 -top-20 -right-20"></div>
                <div className="decorative-circle w-48 h-48 -bottom-10 -left-10"></div>

                <div className="flex items-center relative z-10">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Welcome back, Dr. Sarah</h2>
                    <p className="text-white/80 text-sm max-w-md leading-relaxed">
                      You have 12 exams pending review. AI has marked 847 papers this week with 94% accuracy. 3 exams require manual verification.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div className="px-4 py-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <span className="text-white font-semibold">End-to-end encrypted</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-64 h-48 relative">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop" alt="Teacher" className="rounded-2xl object-cover w-full h-full opacity-90" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="relative mb-8">
                <button
                  type="button"
                  onClick={toggleSummaryMetricSurface}
                  className="metric-theme-toggle absolute -top-11 right-0 z-10 rounded-lg px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  aria-label={`Switch summary metric cards to ${summaryMetricSurfaceMode === 'ready' ? 'plain white' : summaryMetricSurfaceMode === 'white' ? 'dark colors' : 'Ready Surface'}`}
                  title={`Switch to ${summaryMetricSurfaceMode === 'ready' ? 'plain white' : summaryMetricSurfaceMode === 'white' ? 'dark colors' : 'Ready Surface'}`}
                >
                  Theme: {summaryMetricSurfaceMode === 'ready' ? 'Ready Surface' : summaryMetricSurfaceMode === 'white' ? 'Plain White' : 'Dark Colors'}
                </button>
                <div className="grid grid-cols-4 gap-4">
                <button type="button" data-metric="Total Students" onClick={() => navigate('/students')} className={`metric-card ${summaryMetricSurfaceMode === 'ready' ? 'metric-surface-ready' : summaryMetricSurfaceMode === 'white' ? 'metric-surface-white' : 'metric-surface-dark-colors'} w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`}>

                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-xs font-medium trend-up flex items-center gap-1"><TrendingUp className="w-3 h-3" />12%</span>
                  </div>
                  <h4 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{metrics.totalStudents.toLocaleString()}</h4>
                  <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Students</p>
                </button>

                <button type="button" data-metric="Papers Marked" onClick={() => navigate('/ai-processing')} className={`metric-card ${summaryMetricSurfaceMode === 'ready' ? 'metric-surface-ready' : summaryMetricSurfaceMode === 'white' ? 'metric-surface-white' : 'metric-surface-dark-colors'} w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center"><FileText className="w-5 h-5 text-pink-600" /></div>
                    <span className="text-xs font-medium trend-up flex items-center gap-1"><TrendingUp className="w-3 h-3" />8%</span>
                  </div>
                  <h4 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{metrics.papersMarked.toLocaleString()}</h4>
                  <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Papers Marked</p>
                </button>

                <button type="button" data-metric="AI Accuracy" onClick={() => navigate('/ai-processing')} className={`metric-card ${summaryMetricSurfaceMode === 'ready' ? 'metric-surface-ready' : summaryMetricSurfaceMode === 'white' ? 'metric-surface-white' : 'metric-surface-dark-colors'} w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
                    <span className="text-xs font-medium trend-up flex items-center gap-1"><TrendingUp className="w-3 h-3" />3%</span>
                  </div>
                  <h4 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{metrics.aiAccuracy}%</h4>
                  <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>AI Accuracy</p>
                </button>

                <button type="button" data-metric="Pending Review" onClick={() => navigate('/reports')} className={`metric-card ${summaryMetricSurfaceMode === 'ready' ? 'metric-surface-ready' : summaryMetricSurfaceMode === 'white' ? 'metric-surface-white' : 'metric-surface-dark-colors'} w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center"><AlertCircle className="w-5 h-5 text-orange-600" /></div>
                    <span className="text-xs font-medium trend-down flex items-center gap-1"><TrendingUp className="w-3 h-3 rotate-180" />2%</span>
                  </div>
                  <h4 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{metrics.pendingReview}</h4>
                  <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending Review</p>
                </button>
                              </div>
              </div>
              {/* Charts Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className={`rounded-3xl p-6 shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Performance Trends</h3>
                    <div className="flex items-center gap-3">
                      <select
                        value={performanceView}
                        onChange={(event) => setPerformanceView(event.target.value)}
                        className={`dashboard-select ${isDarkMode ? 'dashboard-select-dark' : ''}`}
                        aria-label="Performance chart view"
                      >
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Yearly</option>
                      </select>
                      <select
                        value={timeRange}
                        onChange={(event) => setTimeRange(event.target.value)}
                        className={`dashboard-select ${isDarkMode ? 'dashboard-select-dark' : ''}`}
                        aria-label="Performance trend time range"
                      >
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                      </select>
                    </div>
                  </div>
                  <div className="chart-container">
                    <canvas ref={performanceCanvasRef}></canvas>
                  </div>
                </div>

                <div className={`rounded-3xl p-6 shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Subject Distribution</h3>
                    <div className="flex items-center gap-3">
                      <select
                        value={subjectPeriod}
                        onChange={(event) => setSubjectPeriod(event.target.value)}
                        className={`dashboard-select ${isDarkMode ? 'dashboard-select-dark' : ''}`}
                        aria-label="Subject distribution period"
                      >
                        <option>This Term</option>
                        <option>Last Term</option>
                        <option>This Year</option>
                      </select>
                      <select
                        value={selectedInstitution}
                        onChange={(event) => setSelectedInstitution(event.target.value)}
                        className={`dashboard-select ${isDarkMode ? 'dashboard-select-dark' : ''}`}
                        aria-label="Subject distribution institution"
                      >
                        <option>All Institutions</option>
                        {institutions.map((institution) => <option key={institution.id}>{institution.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="chart-container flex items-center justify-center">
                    <canvas ref={subjectCanvasRef}></canvas>
                  </div>
                </div>
              </div>

              {/* Recent Exam Results */}
              <div className={`rounded-3xl p-6 shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Recent Exam Results</h3>
                  <button type="button" onClick={() => navigate('/students')} className="text-sm text-purple-600 font-medium hover:text-purple-700">View All</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`text-left text-xs border-b ${isDarkMode ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-100'}`}>
                        <th className="pb-3 font-medium">Student</th>
                        <th className="pb-3 font-medium">ID</th>
                        <th className="pb-3 font-medium">Institution</th>
                        <th className="pb-3 font-medium">Subject</th>
                        <th className="pb-3 font-medium">Score</th>
                        <th className="pb-3 font-medium">Grade</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {examData.map((exam) => (
                        <tr key={exam.id} onClick={() => navigate(`/students/${exam.studentId}`)} className={`exam-row border-b cursor-pointer ${isDarkMode ? 'border-gray-700' : 'border-gray-50'}`}>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <img src={exam.studentImage} alt={exam.student} className="w-8 h-8 rounded-full object-cover" />
                              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{exam.student}</span>
                            </div>
                          </td>
                          <td className={`py-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exam.studentId}</td>
                          <td className={`py-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exam.institution}</td>
                          <td className={`py-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exam.subject}</td>
                          <td className={`py-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{exam.score}/100</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getGradeColor(exam.grade)}`}>
                              {exam.grade}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={`inline-flex items-center px-2 py-1 text-[10px] font-medium rounded-full ${getStatusBadgeColor(exam.status)}`}>
                              {getStatusLabel(exam.status)}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(event) => { event.stopPropagation(); navigate(`/students/${exam.studentId}`); }}
                                className={`p-1 transition-colors ${isDarkMode ? 'text-blue-300 hover:text-blue-100' : 'text-blue-600 hover:text-blue-800'}`}
                                title="View Details"
                                aria-label={`View details for ${exam.student}`}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={(event) => { event.stopPropagation(); handleDownloadReport(exam); }}
                                className={`p-1 transition-colors ${isDarkMode ? 'text-blue-300 hover:text-blue-100' : 'text-blue-600 hover:text-blue-800'}`}
                                title="Download Report"
                                aria-label={`Download report for ${exam.student}`}
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        <div className="w-full xl:w-80 flex-shrink-0 space-y-6">
          <div className="space-y-6">
              {/* Profile Header */}
              <div className="relative flex justify-between items-center mb-6">
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>My Profile</h3>
                <button
                  onClick={() => setIsProfileMenuOpen((open) => !open)}
                  aria-expanded={isProfileMenuOpen}
                  aria-haspopup="menu"
                  aria-label="Open Teacher Admin menu"
                  className={`rounded-xl p-2 transition-colors ${isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-400 hover:bg-purple-100'}`}
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Profile Card */}
              <div className={`rounded-3xl p-6 shadow-sm border mb-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                <p className={`text-xs mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>94% AI Accuracy Rate</p>
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-purple-400 to-purple-600">
                      {userAvatar ? (
                        <img
                          src={userAvatar}
                          alt={userName}
                          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                        />
                      ) : (
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
                          alt={userName}
                          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                        />
                      )}
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full"></div>
                    <div className="absolute top-0 -right-3 w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-purple-300 rounded-full"></div>
                    <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <div className="absolute -top-2 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                  </div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{userName}</h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Dept. Chair, Sciences</p>
                  <p className="text-xs text-purple-600 mt-1">sarah.chen@assesium.edu</p>
                </div>
              </div>

              {/* Pending Reviews */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Pending Reviews</h3>
                  <button type="button" onClick={() => navigate('/ai-processing')} className={`text-xs hover:text-purple-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {pendingReviews.map((review) => (
                    <div
                      key={review.id}
                      className={`rounded-2xl p-4 shadow-sm border flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${review.icon === 'alert' ? 'bg-pink-100 dark:bg-pink-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                        {getIconComponent(review.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className={`font-semibold text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {review.title}
                        </h5>
                        <p className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {review.description}
                        </p>
                      </div>
                      {review.urgency === 'urgent' ? (
                        <span className="text-xs font-semibold text-pink-600">Urgent</span>
                      ) : (
                        <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Status */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI System Status</h4>
                    <p className="text-xs text-white/80">All systems operational</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Processing Queue</span>
                    <span className="font-semibold">23 exams</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Avg. Wait Time</span>
                    <span className="font-semibold">~4 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Today's Marked</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Department</h3>
                  <button type="button" onClick={() => navigate('/teachers')} className={`text-xs hover:text-purple-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="team-avatar">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className={`status-dot status-${member.status}`}></div>
                      </div>
                      <div className="flex-1">
                        <h5 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {member.name}
                        </h5>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

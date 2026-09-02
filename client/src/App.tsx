import React, { Suspense, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './components/ThemeProvider';
import ResponsiveLayout from './components/ResponsiveLayout';
import ModalProvider from './components/ModalProvider';
import Dashboard from './pages/Dashboard';
import Institutions from './pages/Institutions';
import AIProcessing from './pages/AIProcessing';
import Students from './pages/Students';
import Reports from './pages/Reports';
import Tutoring from './pages/Tutoring';
import CommunityGroups from './pages/CommunityGroups';
import StudentDetails from './pages/StudentDetails';
import Settings from './pages/Settings';
import Teachers from './pages/Teachers';
import TeacherDetails from './pages/TeacherDetails';
import TeacherEdit from './pages/TeacherEdit';
import TeacherSchedule from './pages/TeacherSchedule';
import StudentSection from './pages/StudentSection';
import StudentLogin from './pages/StudentLogin';
import StudentDashboard from './pages/StudentDashboard';
import Payments from './pages/Payments';
import RealtimeMarking from './pages/RealtimeMarking';
import EnhancedPayments from './pages/EnhancedPayments';
import MarketingApp from './marketing/MarketingApp.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state = { hasError: false, error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-purple-50 p-6">
          <div className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl">
            <h1 className="mb-3 text-2xl font-bold text-gray-900">Something went wrong</h1>
            <p className="mb-6 text-sm text-gray-600">{this.state.error?.message || 'Unknown error'}</p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
    </div>
  );
}

function ShellRoute({ children }: { children: ReactNode }) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<MarketingApp />} />
                <Route path="/dashboard" element={<ShellRoute><Dashboard /></ShellRoute>} />
                
                <Route path="/dashboard/institutions" element={<ShellRoute><Institutions /></ShellRoute>} />
                <Route path="/dashboard/ai-processing" element={<ShellRoute><AIProcessing /></ShellRoute>} />
                <Route path="/dashboard/students" element={<ShellRoute><Students /></ShellRoute>} />
                <Route path="/dashboard/students/:id" element={<ShellRoute><StudentDetails /></ShellRoute>} />
                <Route path="/dashboard/student-details/:id" element={<ShellRoute><StudentDetails /></ShellRoute>} />
                <Route path="/dashboard/reports" element={<ShellRoute><Reports /></ShellRoute>} />
                <Route path="/dashboard/tutoring" element={<ShellRoute><Tutoring /></ShellRoute>} />
                <Route path="/dashboard/community-groups" element={<ShellRoute><CommunityGroups /></ShellRoute>} />
                <Route path="/dashboard/payments" element={<ShellRoute><Payments /></ShellRoute>} />
                <Route path="/dashboard/enhanced-payments" element={<ShellRoute><EnhancedPayments /></ShellRoute>} />
                <Route path="/dashboard/settings" element={<ShellRoute><Settings /></ShellRoute>} />
                <Route path="/dashboard/profile" element={<ShellRoute><Settings /></ShellRoute>} />
                <Route path="/dashboard/teachers" element={<ShellRoute><Teachers /></ShellRoute>} />
                <Route path="/dashboard/teachers/:teacherId/edit" element={<ShellRoute><TeacherEdit /></ShellRoute>} />
                <Route path="/dashboard/teachers/:teacherId" element={<ShellRoute><TeacherDetails /></ShellRoute>} />
                <Route path="/dashboard/teacher-schedule" element={<ShellRoute><TeacherSchedule /></ShellRoute>} />
                <Route path="/dashboard/study-materials" element={<StudentSection />} />
                <Route path="/dashboard/timetable" element={<StudentSection />} />
                <Route path="/dashboard/progress" element={<StudentSection />} />
                <Route path="/dashboard/realtime-marking" element={<ShellRoute><RealtimeMarking /></ShellRoute>} />
                <Route path="/dashboard/student-login" element={<StudentLogin />} />
                <Route path="/dashboard/student-dashboard" element={<StudentDashboard />} />

                {/* Original dashboard paths remain available for existing navigation and deep links. */}
                <Route path="/institutions" element={<ShellRoute><Institutions /></ShellRoute>} />
                <Route path="/ai-processing" element={<ShellRoute><AIProcessing /></ShellRoute>} />
                <Route path="/students" element={<ShellRoute><Students /></ShellRoute>} />
                <Route path="/students/:id" element={<ShellRoute><StudentDetails /></ShellRoute>} />
                <Route path="/student-details/:id" element={<ShellRoute><StudentDetails /></ShellRoute>} />
                <Route path="/reports" element={<ShellRoute><Reports /></ShellRoute>} />
                <Route path="/tutoring" element={<ShellRoute><Tutoring /></ShellRoute>} />
                <Route path="/community-groups" element={<ShellRoute><CommunityGroups /></ShellRoute>} />
                <Route path="/payments" element={<ShellRoute><Payments /></ShellRoute>} />
                <Route path="/enhanced-payments" element={<ShellRoute><EnhancedPayments /></ShellRoute>} />
                <Route path="/settings" element={<ShellRoute><Settings /></ShellRoute>} />
                <Route path="/profile" element={<ShellRoute><Settings /></ShellRoute>} />
                <Route path="/teachers" element={<ShellRoute><Teachers /></ShellRoute>} />
                <Route path="/teachers/:teacherId/edit" element={<ShellRoute><TeacherEdit /></ShellRoute>} />
                <Route path="/teachers/:teacherId" element={<ShellRoute><TeacherDetails /></ShellRoute>} />
                <Route path="/teacher-schedule" element={<ShellRoute><TeacherSchedule /></ShellRoute>} />
                <Route path="/study-materials" element={<StudentSection />} />
                <Route path="/timetable" element={<StudentSection />} />
                <Route path="/progress" element={<StudentSection />} />
                <Route path="/realtime-marking" element={<ShellRoute><RealtimeMarking /></ShellRoute>} />
                <Route path="/student-login" element={<StudentLogin />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <ModalProvider />
            </BrowserRouter>
          </Suspense>
          <Toaster position="top-right" />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

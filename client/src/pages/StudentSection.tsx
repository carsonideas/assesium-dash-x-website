import { ArrowLeft, BookOpen, CalendarDays, ChartNoAxesCombined } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const sections = {
  '/study-materials': {
    title: 'Study Materials',
    description: 'Your curated learning resources will appear here once they are assigned by your institution.',
    icon: BookOpen,
  },
  '/timetable': {
    title: 'Timetable',
    description: 'Your upcoming classes and assessment schedule will appear here.',
    icon: CalendarDays,
  },
  '/progress': {
    title: 'Progress',
    description: 'Your performance trends and learning progress will appear here.',
    icon: ChartNoAxesCombined,
  },
} as const;

export default function StudentSection() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const section = sections[pathname as keyof typeof sections] ?? sections['/progress'];
  const Icon = section.icon;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate('/student-dashboard')}
          className="mb-8 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Student Dashboard
        </button>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{section.title}</h1>
          <p className="mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-300">{section.description}</p>
          <div className="mt-8 rounded-2xl bg-purple-50 p-5 text-sm text-purple-900 dark:bg-purple-950/40 dark:text-purple-200">
            This route is connected to the unified application router and is ready for live student data.
          </div>
        </section>
      </div>
    </main>
  );
}

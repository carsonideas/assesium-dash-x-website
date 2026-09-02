// @ts-nocheck
import React, { useState } from 'react';
import { Calendar, Clock, Plus, Edit, Trash2, Check, X, BookOpen, Users, Bell, Megaphone, ClipboardList, LayoutGrid } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  status: 'pending' | 'completed' | 'incomplete';
  type: 'class' | 'meeting' | 'grading' | 'other';
  priority: 'low' | 'medium' | 'high';
}

interface Schedule {
  id: string;
  day: string;
  time: string;
  subject: string;
  class: string;
  room: string;
}

export default function TeacherSchedule() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Grade Mathematics Exam Papers',
      description: 'Grade final exam papers for Grade 10 Mathematics',
      date: '2025-08-06',
      time: '14:00',
      status: 'pending',
      type: 'grading',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Parent-Teacher Meeting',
      description: 'Meeting with Sarah Johnson\'s parents',
      date: '2025-08-07',
      time: '15:30',
      status: 'pending',
      type: 'meeting',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Prepare Chemistry Lab',
      description: 'Set up equipment for tomorrow\'s chemistry experiment',
      date: '2025-08-06',
      time: '16:00',
      status: 'completed',
      type: 'class',
      priority: 'medium'
    }
  ]);

  const [schedule, setSchedule] = useState<Schedule[]>([
    { id: '1', day: 'Monday', time: '08:00-09:00', subject: 'Mathematics', class: 'Grade 10A', room: 'Room 101' },
    { id: '2', day: 'Monday', time: '09:00-10:00', subject: 'Physics', class: 'Grade 11B', room: 'Lab 1' },
    { id: '3', day: 'Monday', time: '11:00-12:00', subject: 'Mathematics', class: 'Grade 10B', room: 'Room 101' },
    { id: '4', day: 'Tuesday', time: '08:00-09:00', subject: 'Physics', class: 'Grade 11A', room: 'Lab 1' },
    { id: '5', day: 'Tuesday', time: '10:00-11:00', subject: 'Mathematics', class: 'Grade 10A', room: 'Room 101' },
    { id: '6', day: 'Wednesday', time: '09:00-10:00', subject: 'Physics', class: 'Grade 11B', room: 'Lab 1' },
    { id: '7', day: 'Wednesday', time: '14:00-15:00', subject: 'Mathematics', class: 'Grade 10B', room: 'Room 101' },
    { id: '8', day: 'Thursday', time: '08:00-09:00', subject: 'Mathematics', class: 'Grade 10A', room: 'Room 101' },
    { id: '9', day: 'Thursday', time: '11:00-12:00', subject: 'Physics', class: 'Grade 11A', room: 'Lab 1' },
    { id: '10', day: 'Friday', time: '09:00-10:00', subject: 'Mathematics', class: 'Grade 10B', room: 'Room 101' },
    { id: '11', day: 'Friday', time: '15:00-16:00', subject: 'Physics', class: 'Grade 11B', room: 'Lab 1' }
  ]);

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [composer, setComposer] = useState<null | 'announcement' | 'assignment'>(null);
  const [composerTitle, setComposerTitle] = useState('');
  const [currentView, setCurrentView] = useState<'timetable' | 'calendar' | 'tasks' | 'announcements' | 'assignments'>('timetable');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);
  const [notifications, setNotifications] = useState([]);

  const [newSchedule, setNewSchedule] = useState<Partial<Schedule>>({
    day: 'Monday',
    time: '08:00-09:00',
    subject: '',
    class: '',
    room: ''
  });

  const announcements = [
    { id: 'a1', title: 'Mid-term marking window', audience: 'All faculty', date: '2026-04-16', body: 'Please submit marking plans before the Friday review meeting.', tone: 'purple' },
    { id: 'a2', title: 'Science department briefing', audience: 'Science department', date: '2026-04-18', body: 'Room 204 is reserved for the curriculum alignment session.', tone: 'orange' },
    { id: 'a3', title: 'Campus maintenance notice', audience: 'Cambridge High School', date: '2026-04-20', body: 'The north entrance will be closed between 07:30 and 09:00.', tone: 'blue' },
  ];

  const assignments = [
    { id: 'as1', title: 'Review Mathematics final exams', subject: 'Mathematics', owner: 'Dr. Sarah Chen', due: '2026-04-16', progress: 72, status: 'In progress' },
    { id: 'as2', title: 'Publish Physics mid-term feedback', subject: 'Physics', owner: 'Dr. James Wilson', due: '2026-04-18', progress: 46, status: 'Needs review' },
    { id: 'as3', title: 'Prepare Chemistry revision pack', subject: 'Chemistry', owner: 'Prof. Maria Garcia', due: '2026-04-22', progress: 24, status: 'Not started' },
  ];

  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    date: selectedDate,
    time: '',
    status: 'pending',
    type: 'other',
    priority: 'medium'
  });

  const handleAddTask = () => {
    if (newTask.title && newTask.date && newTask.time) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title!,
        description: newTask.description || '',
        date: newTask.date!,
        time: newTask.time!,
        status: newTask.status as Task['status'],
        type: newTask.type as Task['type'],
        priority: newTask.priority as Task['priority']
      };
      setTasks([...tasks, task]);
      setNewTask({
        title: '',
        description: '',
        date: selectedDate,
        time: '',
        status: 'pending',
        type: 'other',
        priority: 'medium'
      });
      setShowTaskModal(false);
      setNotifications([...notifications, {
        id: Date.now(),
        type: 'success',
        message: 'Task added successfully!',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  const handleAddSchedule = () => {
    if (newSchedule.subject && newSchedule.class && newSchedule.room) {
      const scheduleItem: Schedule = {
        id: Date.now().toString(),
        day: newSchedule.day!,
        time: newSchedule.time!,
        subject: newSchedule.subject!,
        class: newSchedule.class!,
        room: newSchedule.room!
      };
      setSchedule([...schedule, scheduleItem]);
      setNewSchedule({
        day: 'Monday',
        time: '08:00-09:00',
        subject: '',
        class: '',
        room: ''
      });
      setShowScheduleModal(false);
      setNotifications([...notifications, {
        id: Date.now(),
        type: 'success',
        message: 'Schedule item added successfully!',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  const handleEditSchedule = (scheduleItem: Schedule) => {
    setEditingSchedule(scheduleItem);
    setNewSchedule({
      day: scheduleItem.day,
      time: scheduleItem.time,
      subject: scheduleItem.subject,
      class: scheduleItem.class,
      room: scheduleItem.room
    });
    setShowScheduleModal(true);
  };

  const handleUpdateSchedule = () => {
    if (editingSchedule && newSchedule.subject && newSchedule.class && newSchedule.room) {
      const updatedSchedule = schedule.map(item =>
        item.id === editingSchedule.id
          ? {
              ...item,
              day: newSchedule.day!,
              time: newSchedule.time!,
              subject: newSchedule.subject!,
              class: newSchedule.class!,
              room: newSchedule.room!
            }
          : item
      );
      setSchedule(updatedSchedule);
      setEditingSchedule(null);
      setNewSchedule({
        day: 'Monday',
        time: '08:00-09:00',
        subject: '',
        class: '',
        room: ''
      });
      setShowScheduleModal(false);
      setNotifications([...notifications, {
        id: Date.now(),
        type: 'success',
        message: 'Schedule updated successfully!',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  const handleDeleteSchedule = (scheduleId: string) => {
    setSchedule(schedule.filter(item => item.id !== scheduleId));
    setNotifications([...notifications, {
      id: Date.now(),
      type: 'success',
      message: 'Schedule item deleted successfully!',
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleUpdateTaskStatus = (taskId: string, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status } : task
    ));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const getTasksForDate = (date: string) => {
    return tasks.filter(task => task.date === date);
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
      case 'incomplete': return 'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400';
      default: return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      default: return 'border-l-green-500';
    }
  };

  const getTypeIcon = (type: Task['type']) => {
    switch (type) {
      case 'class': return <BookOpen className="h-4 w-4" />;
      case 'meeting': return <Users className="h-4 w-4" />;
      case 'grading': return <Edit className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '14:00-15:00', '15:00-16:00'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Teacher Schedule</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your classes, tasks, and schedule</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'timetable', label: 'Timetable', icon: LayoutGrid },
            { key: 'calendar', label: 'Calendar', icon: Calendar },
            { key: 'tasks', label: 'Tasks', icon: Clock },
            { key: 'announcements', label: 'Announcements', icon: Megaphone },
            { key: 'assignments', label: 'Tasks & Assignments', icon: ClipboardList },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCurrentView(key)}
              className={`px-4 py-2 rounded-xl border transition-colors ${
                currentView === key
                  ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/70 dark:bg-gray-700/70 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-300 hover:text-purple-700 dark:hover:text-purple-200'
              }`}
            >
              <Icon className="h-4 w-4 inline mr-2" />
              {label}
            </button>
          ))}
          <button
            onClick={() => setShowTaskModal(true)}
            className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Add Task
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {currentView === 'calendar' && (
        <div className="grid lg:grid-cols-[1.35fr_.8fr] gap-6">
          <section className="bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Planning view</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">April 2026</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">A visual overview of classes, reviews, and announcements.</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setSelectedDate('2026-04-14')} className="px-3 py-2 rounded-xl border border-purple-200 text-purple-700 dark:text-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20">Today</button>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="px-3 py-2 rounded-xl" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-400">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => <span key={day}>{day}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 30 }, (_, index) => index + 1).map((day) => {
                const dateKey = `2026-04-${String(day).padStart(2, '0')}`;
                const dayTasks = getTasksForDate(dateKey);
                const selected = selectedDate === dateKey;
                return (
                  <button key={dateKey} onClick={() => setSelectedDate(dateKey)} className={`min-h-20 rounded-2xl border p-2 text-left transition-all ${selected ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-md' : 'border-gray-100 dark:border-gray-700 hover:border-purple-300 bg-white/60 dark:bg-gray-800/40'}`}>
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${selected ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-200'}`}>{day}</span>
                    {dayTasks.length > 0 && <span className="mt-3 block text-[11px] font-medium text-orange-600">{dayTasks.length} task{dayTasks.length > 1 ? 's' : ''}</span>}
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
            <p className="text-sm text-white/70">Selected date</p>
            <h3 className="mt-1 text-2xl font-bold">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</h3>
            <div className="mt-6 space-y-3">
              {getTasksForDate(selectedDate).length === 0 ? (
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/75">No tasks scheduled. Use Add Task to create a planning item.</div>
              ) : getTasksForDate(selectedDate).map((task) => (
                <div key={task.id} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex items-center justify-between gap-2"><span className="font-semibold">{task.title}</span><span className="text-xs text-white/70">{task.time}</span></div>
                  <p className="mt-1 text-sm text-white/70">{task.description}</p>
                  <button onClick={() => handleUpdateTaskStatus(task.id, 'completed')} className="mt-3 text-xs font-semibold text-orange-200 hover:text-white">Mark complete</button>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* Tasks View */}
      {currentView === 'tasks' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Open tasks', value: tasks.filter((task) => task.status === 'pending').length, tone: 'purple' },
              { label: 'Completed', value: tasks.filter((task) => task.status === 'completed').length, tone: 'green' },
              { label: 'High priority', value: tasks.filter((task) => task.priority === 'high').length, tone: 'orange' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-5 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
                <p className={`mt-2 text-3xl font-bold ${metric.tone === 'green' ? 'text-green-600' : metric.tone === 'orange' ? 'text-orange-500' : 'text-purple-600'}`}>{metric.value}</p>
              </div>
            ))}
          </div>
          <section className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">Work queue</p><h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks to move forward</h3></div>
              <button onClick={() => setShowTaskModal(true)} className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"><Plus className="h-4 w-4 inline mr-2" />New task</button>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className={`group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-700/50 p-4 ${getPriorityColor(task.priority)}`}>
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-1 rounded-xl bg-purple-100 dark:bg-purple-900/30 p-2 text-purple-600">{getTypeIcon(task.type)}</div>
                    <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h4 className="font-semibold text-gray-900 dark:text-white">{task.title}</h4><span className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(task.status)}`}>{task.status}</span></div><p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{task.description}</p><p className="mt-2 text-xs text-gray-500 dark:text-gray-400"><Calendar className="h-3.5 w-3.5 inline mr-1" />{new Date(task.date).toLocaleDateString()} · {task.time}</p></div>
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-auto">
                    {task.status === 'pending' && <button onClick={() => handleUpdateTaskStatus(task.id, 'completed')} className="rounded-xl bg-green-100 p-2 text-green-700 hover:bg-green-200" title="Mark as completed"><Check className="h-4 w-4" /></button>}
                    <button onClick={() => handleDeleteTask(task.id)} className="rounded-xl bg-red-100 p-2 text-red-700 hover:bg-red-200" title="Delete task"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Announcements View */}
      {currentView === 'announcements' && (
        <div className="grid lg:grid-cols-[1fr_.8fr] gap-6">
          <section className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Communication</p><h3 className="text-2xl font-bold text-gray-900 dark:text-white">Announcements</h3></div><button onClick={() => { setComposer('announcement'); setComposerTitle(''); }} className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"><Plus className="h-4 w-4 inline mr-2" />New announcement</button></div>
            <div className="space-y-3">{announcements.map((announcement) => <article key={announcement.id} className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-700/40 p-5"><div className="flex items-start justify-between gap-3"><div><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${announcement.tone === 'orange' ? 'bg-orange-100 text-orange-700' : announcement.tone === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{announcement.audience}</span><h4 className="mt-3 font-semibold text-gray-900 dark:text-white">{announcement.title}</h4></div><span className="text-xs text-gray-500 dark:text-gray-400">{new Date(`${announcement.date}T12:00:00`).toLocaleDateString()}</span></div><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{announcement.body}</p><button onClick={() => setNotifications([...notifications, { id: Date.now(), type: 'success', message: `Opened ${announcement.title}`, timestamp: 'Now' }])} className="mt-4 text-sm font-semibold text-purple-600 hover:text-purple-800">Open announcement <span aria-hidden>→</span></button></article>)}</div>
          </section>
          <aside className="rounded-3xl bg-gradient-to-br from-orange-500 to-pink-600 p-6 text-white shadow-xl"><Megaphone className="h-8 w-8" /><h3 className="mt-5 text-2xl font-bold">Reach the right room</h3><p className="mt-2 text-sm leading-6 text-white/80">Keep faculty updates, campus notices, and review windows in one dependable place.</p><div className="mt-8 space-y-3"><div className="rounded-2xl bg-white/15 p-4"><p className="text-2xl font-bold">3</p><p className="text-sm text-white/75">Active announcements</p></div><div className="rounded-2xl bg-white/15 p-4"><p className="text-2xl font-bold">100%</p><p className="text-sm text-white/75">Faculty coverage</p></div></div></aside>
        </div>
      )}

      {/* Tasks & Assignments View */}
      {currentView === 'assignments' && (
        <section className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">Team delivery</p><h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks & Assignments</h3><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Coordinate shared work across departments and review owners.</p></div><button onClick={() => { setComposer('assignment'); setComposerTitle(''); }} className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"><Plus className="h-4 w-4 inline mr-2" />Assign work</button></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead><tr className="border-b border-gray-200 dark:border-gray-700 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"><th className="pb-3">Assignment</th><th className="pb-3">Owner</th><th className="pb-3">Due</th><th className="pb-3">Progress</th><th className="pb-3">Status</th></tr></thead><tbody>{assignments.map((assignment) => <tr key={assignment.id} className="border-b border-gray-100 dark:border-gray-700/70"><td className="py-4"><p className="font-semibold text-gray-900 dark:text-white">{assignment.title}</p><p className="text-xs text-gray-500 dark:text-gray-400">{assignment.subject}</p></td><td className="py-4 text-sm text-gray-700 dark:text-gray-300">{assignment.owner}</td><td className="py-4 text-sm text-gray-700 dark:text-gray-300">{new Date(`${assignment.due}T12:00:00`).toLocaleDateString()}</td><td className="py-4"><div className="flex items-center gap-3"><div className="h-2 w-24 rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-2 rounded-full bg-purple-600" style={{ width: `${assignment.progress}%` }} /></div><span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{assignment.progress}%</span></div></td><td className="py-4"><span className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-semibold text-purple-700">{assignment.status}</span></td></tr>)}</tbody></table></div>
        </section>
      )}

      {/* Timetable View */}
      {currentView === 'timetable' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weekly Timetable</h3>
            <button
              onClick={() => setShowScheduleModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 inline mr-2" />
              Add Schedule
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold">
                    Time
                  </th>
                  {daysOfWeek.map((day) => (
                    <th key={day} className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((timeSlot) => (
                  <tr key={timeSlot}>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-700 font-medium text-gray-900 dark:text-white">
                      {timeSlot}
                    </td>
                    {daysOfWeek.map((day) => {
                      const classForSlot = schedule.find(s => s.day === day && s.time === timeSlot);
                      return (
                        <td key={`${day}-${timeSlot}`} className="border border-gray-300 dark:border-gray-600 p-3">
                          {classForSlot ? (
                            <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg relative group">
                              <div className="font-semibold text-blue-900 dark:text-blue-300 text-sm">
                                {classForSlot.subject}
                              </div>
                              <div className="text-blue-700 dark:text-blue-400 text-xs">
                                {classForSlot.class}
                              </div>
                              <div className="text-blue-600 dark:text-blue-500 text-xs">
                                {classForSlot.room}
                              </div>
                              <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                <button
                                  onClick={() => handleEditSchedule(classForSlot)}
                                  className="p-1 text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-800 rounded"
                                  title="Edit schedule"
                                >
                                  <Edit className="h-3 w-3" />
                                </button>
                                <button
                                  onClick={() => handleDeleteSchedule(classForSlot.id)}
                                  className="p-1 text-red-600 hover:bg-red-200 dark:hover:bg-red-800 rounded"
                                  title="Delete schedule"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div 
                              className="h-16 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer flex items-center justify-center"
                              onClick={() => {
                                setNewSchedule({
                                  day,
                                  time: timeSlot,
                                  subject: '',
                                  class: '',
                                  room: ''
                                });
                                setShowScheduleModal(true);
                              }}
                            >
                              <Plus className="h-4 w-4 text-gray-400 opacity-0 hover:opacity-100" />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Announcement / Assignment Composer */}
      {composer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-gray-800 p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Quick composer</p><h3 className="text-xl font-bold text-gray-900 dark:text-white">{composer === 'announcement' ? 'New announcement' : 'Assign work'}</h3></div><button onClick={() => setComposer(null)} className="rounded-xl p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><X className="h-5 w-5" /></button></div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
            <input autoFocus value={composerTitle} onChange={(e) => setComposerTitle(e.target.value)} placeholder={composer === 'announcement' ? 'Announcement title' : 'Assignment title'} className="w-full rounded-xl px-3 py-3 mb-6" />
            <div className="flex justify-end gap-3"><button onClick={() => setComposer(null)} className="rounded-xl px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</button><button onClick={() => { if (!composerTitle.trim()) return; setNotifications([...notifications, { id: Date.now(), type: 'success', message: `${composer === 'announcement' ? 'Announcement' : 'Assignment'} saved: ${composerTitle.trim()}`, timestamp: 'Now' }]); setComposer(null); }} className="rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">Save {composer === 'announcement' ? 'announcement' : 'assignment'}</button></div>
          </div>
        </div>
      )}

      {/* Add Task Modal */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Task</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newTask.title || ''}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter task title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={newTask.description || ''}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter task description"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={newTask.date || ''}
                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    value={newTask.time || ''}
                    onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Type
                  </label>
                  <select
                    value={newTask.type || 'other'}
                    onChange={(e) => setNewTask({ ...newTask, type: e.target.value as Task['type'] })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="class">Class</option>
                    <option value="meeting">Meeting</option>
                    <option value="grading">Grading</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Priority
                  </label>
                  <select
                    value={newTask.priority || 'medium'}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as Task['priority'] })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowTaskModal(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {editingSchedule ? 'Edit Schedule' : 'Add Schedule'}
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Day
                  </label>
                  <select
                    value={newSchedule.day || 'Monday'}
                    onChange={(e) => setNewSchedule({ ...newSchedule, day: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {daysOfWeek.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <select
                    value={newSchedule.time || '08:00-09:00'}
                    onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={newSchedule.subject || ''}
                  onChange={(e) => setNewSchedule({ ...newSchedule, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Class
                </label>
                <input
                  type="text"
                  value={newSchedule.class || ''}
                  onChange={(e) => setNewSchedule({ ...newSchedule, class: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter class"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Room
                </label>
                <input
                  type="text"
                  value={newSchedule.room || ''}
                  onChange={(e) => setNewSchedule({ ...newSchedule, room: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter room"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowScheduleModal(false);
                  setEditingSchedule(null);
                  setNewSchedule({
                    day: 'Monday',
                    time: '08:00-09:00',
                    subject: '',
                    class: '',
                    room: ''
                  });
                }}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={editingSchedule ? handleUpdateSchedule : handleAddSchedule}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingSchedule ? 'Update' : 'Add'} Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="notification-gradient p-4 rounded-2xl shadow-lg flex items-center justify-between min-w-80 backdrop-blur-md"
            >
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs opacity-75">{notification.timestamp}</p>
                </div>
              </div>
              <button
                onClick={() => dismissNotification(notification.id)}
                className="ml-4 text-[#7e224d] hover:text-[#4a1830]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


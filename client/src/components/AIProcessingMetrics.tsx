// @ts-nocheck
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, HardDrive, Network } from 'lucide-react';

interface MetricProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  surfaceMode: SurfaceMode;
}

type SurfaceMode = 'dark' | 'light-colors' | 'ready' | 'white';

const surfaceLabels: Record<SurfaceMode, string> = {
  dark: 'Dark Colors',
  'light-colors': 'Light Colors',
  ready: 'Ready Surface',
  white: 'Plain White',
};

const MetricCard = ({ label, value, icon, color, trend, trendValue, surfaceMode }: MetricProps) => {
  const [displayValue, setDisplayValue] = useState<number>(value);

  useEffect(() => {
    if (Math.abs(value - displayValue) < 0.1) {
      setDisplayValue(value);
      return;
    }

    if (Math.abs(value - displayValue) > 10) {
      setDisplayValue(value);
      return;
    }

    const duration = 4000;
    const steps = 120;
    const stepDuration = duration / steps;
    const increment = (value - displayValue) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setDisplayValue(prev => prev + increment);
        currentStep++;
      } else {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, displayValue]);

  const isLightSurface = surfaceMode === 'ready' || surfaceMode === 'white';
  const surfaceClass = surfaceMode === 'ready'
    ? 'metric-surface-ready'
    : surfaceMode === 'white'
      ? 'metric-surface-white'
      : surfaceMode === 'light-colors'
        ? 'metric-surface-light-colors'
        : `metric-surface-dark-colors bg-gradient-to-br ${color}`;

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      data-metric={label}
      className={`${surfaceClass} rounded-2xl shadow-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm font-medium ${isLightSurface ? 'metric-surface-label' : 'text-white/90'}`}>{label}</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={displayValue}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`text-2xl font-bold mt-1 ${isLightSurface ? 'metric-surface-value' : 'text-white'}`}
            >
              {Math.round(displayValue)}%
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="bg-white/20 p-2 rounded-lg">
          {icon}
        </div>
      </div>
      {trend && (
        <div className={`mt-1 flex items-center text-xs ${isLightSurface ? 'metric-surface-label' : 'text-white/90'}`}>
          <span className={`flex items-center ${isLightSurface ? 'metric-surface-trend' : trend === 'up' ? 'text-green-200' : trend === 'down' ? 'text-red-200' : 'text-blue-200'}`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default function AIProcessingMetrics() {
  const [surfaceMode, setSurfaceMode] = useState<SurfaceMode>(() => {
    const stored = localStorage.getItem('ai-processing-metrics-surface');
    const defaultsMigrated = localStorage.getItem('ai-processing-metrics-default-v2') === 'true';
    if (!defaultsMigrated) {
      localStorage.setItem('ai-processing-metrics-default-v2', 'true');
      localStorage.setItem('ai-processing-metrics-surface', 'light-colors');
      return 'light-colors';
    }
    return stored === 'light-colors' || stored === 'ready' || stored === 'white' ? stored : 'light-colors';
  });

  const toggleSurfaceMode = () => {
    const nextMode: SurfaceMode = surfaceMode === 'dark'
      ? 'light-colors'
      : surfaceMode === 'light-colors'
        ? 'ready'
        : surfaceMode === 'ready'
          ? 'white'
          : 'dark';
    setSurfaceMode(nextMode);
    localStorage.setItem('ai-processing-metrics-surface', nextMode);
  };

  const metrics: Omit<MetricProps, 'surfaceMode'>[] = [
    {
      label: 'CPU Usage', value: 58,
      icon: <Cpu className="h-5 w-5 text-white" />,
      color: 'from-blue-500 via-blue-600 to-indigo-700', trend: 'up', trendValue: '+5% from last hour'
    },
    {
      label: 'Memory Usage', value: 72,
      icon: <Brain className="h-5 w-5 text-white" />,
      color: 'from-purple-500 via-purple-600 to-fuchsia-700', trend: 'stable', trendValue: 'Optimal'
    },
    {
      label: 'Storage', value: 45,
      icon: <HardDrive className="h-5 w-5 text-white" />,
      color: 'from-pink-500 via-pink-600 to-rose-700', trend: 'down', trendValue: '-2% from last hour'
    },
    {
      label: 'Network', value: 32,
      icon: <Network className="h-5 w-5 text-white" />,
      color: 'from-cyan-500 via-cyan-600 to-teal-700', trend: 'stable', trendValue: 'Normal'
    }
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleSurfaceMode}
        className="metric-theme-toggle absolute -top-11 right-0 z-10 rounded-lg px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        aria-label={`Switch processing metrics cards to ${surfaceMode === 'dark' ? 'Light Colors' : surfaceMode === 'light-colors' ? 'Ready Surface' : surfaceMode === 'ready' ? 'Plain White' : 'Dark Colors'}`}
        title={`Switch to ${surfaceLabels[surfaceMode === 'dark' ? 'light-colors' : surfaceMode === 'light-colors' ? 'ready' : surfaceMode === 'ready' ? 'white' : 'dark']}`}
      >
        Theme: {surfaceLabels[surfaceMode]}
      </button>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} surfaceMode={surfaceMode} />
        ))}
      </div>
    </div>
  );
}

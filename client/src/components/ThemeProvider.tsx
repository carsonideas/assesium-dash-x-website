// @ts-nocheck
import { ReactNode, useEffect, useState } from 'react';
import { applyThemeToDocument, useThemeStore } from '../stores/useThemeStore';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore((state) => state.theme);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    applyThemeToDocument(theme);
    setIsInitialized(true);
  }, [theme]);

  if (!isInitialized) {
    return (
      <div className="theme-loading min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="theme-loading-spinner animate-spin rounded-full h-10 w-10 mx-auto" />
          <p className="mt-4 text-sm">Loading Assesium theme...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
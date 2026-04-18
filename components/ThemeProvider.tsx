'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  palette: 'ambient' | 'dusk';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPalette] = useState<'ambient' | 'dusk'>('ambient');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const stored = localStorage.getItem('portfolio:palette');
    const initialPalette = (stored ? JSON.parse(stored) : 'ambient') as 'ambient' | 'dusk';
    setPalette(initialPalette);
    document.documentElement.setAttribute('data-palette', initialPalette);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('portfolio:palette', JSON.stringify(palette));
  }, [palette, mounted]);

  const toggleTheme = () => {
    setPalette((prev) => (prev === 'ambient' ? 'dusk' : 'ambient'));
  };


  return (
    <ThemeContext.Provider value={{ palette, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

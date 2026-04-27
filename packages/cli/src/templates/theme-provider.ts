import type { SupportedFramework } from '../utils';

export function generateThemeProvider(
  framework: SupportedFramework,
  isTypeScript: boolean = true
): string {
  if (framework === 'tanstack-start') {
    return `'use client';

import React from 'react';${isTypeScript ? `
import type { PropsWithChildren } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = PropsWithChildren;

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}` : `
`}

const STORAGE_KEY = 'rizzui-theme';
${isTypeScript ? `const ThemeContext = React.createContext<ThemeContextValue | null>(null);` : `const ThemeContext = React.createContext(null);`}

function getSystemTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme${isTypeScript ? ': Theme' : ''}) {
  if (typeof document === 'undefined') {
    return;
  }
  const resolved = theme === 'system' ? getSystemTheme() : theme;
  document.documentElement.setAttribute('data-theme', resolved);
}

export function ThemeProvider({ children }${isTypeScript ? ': ThemeProviderProps' : ''}) {
  const [theme, setThemeState] = React.useState${isTypeScript ? '<Theme>' : ''}('system');

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const next = saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
    setThemeState(next${isTypeScript ? ' as Theme' : ''});
    applyTheme(next${isTypeScript ? ' as Theme' : ''});
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined' || theme !== 'system') {
      return;
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => applyTheme('system');
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [theme]);

  const setTheme = React.useCallback((value${isTypeScript ? ': Theme' : ''}) => {
    setThemeState(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    applyTheme(value);
  }, []);

  const contextValue = React.useMemo(() => ({ theme, setTheme }), [setTheme, theme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}`;
  }

  return `'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';${isTypeScript ? `
import type { PropsWithChildren } from 'react';

interface ThemeProviderProps extends PropsWithChildren {}` : ''}

export function ThemeProvider({ children }${isTypeScript ? ': ThemeProviderProps' : ''}) {
  return (
    <NextThemeProvider
      attribute="data-theme"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}`;
}
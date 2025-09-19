export function generateThemeProvider(isTypeScript: boolean = true): string {
  const extension = isTypeScript ? 'tsx' : 'jsx';

  return `'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';${isTypeScript ? `
import type { PropsWithChildren } from 'react';

interface ThemeProviderProps extends PropsWithChildren {}` : ''}

export function ThemeProvider({ children }${isTypeScript ? ': ThemeProviderProps' : ''}) {
  return (
    <NextThemeProvider
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}`;
}
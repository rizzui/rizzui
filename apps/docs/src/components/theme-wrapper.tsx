'use client';

import React from 'react';
import { RizzUIThemeProvider } from '@site/src/contexts/rizzui-theme-context';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <RizzUIThemeProvider>{children}</RizzUIThemeProvider>;
}


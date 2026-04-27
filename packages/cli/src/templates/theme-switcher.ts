import type { SupportedFramework } from '../utils';

export function generateThemeSwitcher(framework: SupportedFramework): string {
  const useThemeImport =
    framework === 'next'
      ? "import { useTheme } from 'next-themes';"
      : "import { useTheme } from './theme-provider';";

  return `'use client';

import React from 'react';
import { ActionIcon } from './action-icon';
import { Dropdown } from './dropdown';
${useThemeImport}

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <ActionIcon variant="outline">
          <span aria-hidden className="text-base leading-none dark:hidden">☀️</span>
          <span aria-hidden className="absolute text-base leading-none hidden dark:block">🌙</span>
          <span className="sr-only">Toggle theme</span>
        </ActionIcon>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setTheme('light')}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme('dark')}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme('system')}>System</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;
}

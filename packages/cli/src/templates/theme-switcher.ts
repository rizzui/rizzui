export function generateThemeSwitcher(isTypeScript: boolean = true): string {
  return `'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { ActionIcon, Dropdown } from 'rizzui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <ActionIcon variant="outline">
          <SunIcon className="h-5 w-5 dark:hidden" />
          <MoonIcon className="absolute h-5 w-5 hidden dark:block" />
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
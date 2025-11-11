"use client";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Dropdown } from "rizzui/dropdown";
import { ActionIcon } from "rizzui/action-icon";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <ActionIcon as="span" variant="outline">
          <SunIcon className="h-5 w-5 dark:hidden" />
          <MoonIcon className="absolute h-5 w-5 hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </ActionIcon>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setTheme("light")}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("system")}>System</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

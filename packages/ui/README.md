<br />
<br />

<div align="center">
  <a href="https://www.rizzui.com">
    <picture>
       <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/rizzui/rizzui/49fec65a37391aafc091d74ec14b6b27517fe9a0/apps/docs/static/img/rizzui-logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://www.rizzui.com/img/rizz-logo.svg">
    <img alt="RizzUI Logo" src="https://www.rizzui.com/img/rizz-logo.svg" height="72"/>
    </picture>
  </a>
</div>

<br />

<div align="center">
  <a href="https://www.npmjs.com/package/rizzui">
    <img alt="npm" src="https://img.shields.io/npm/dm/rizzui?color=16a679&label=npm&logo=npm" />
  </a>
  <a href="https://www.rizzui.com/docs/guide/getting-started">
    <img alt="Read the documentation" src="https://img.shields.io/badge/Docs-blue?style=flat&logo=readthedocs&labelColor=5c5c5c&color=16a679" height="20" width="auto" />
  </a>
</div>

<br />

<div align="center">
  <a href="https://www.rizzui.com/docs/guide/getting-started">Documentation</a> &bull;
  <a href="https://www.rizzui.com">Website</a>
</div>

<br />

A Modern and Minimal React UI Library built with TailwindCSS. Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application. We have carefully crafted each component to ensure that they are responsive, accessible and consistent across different devices and browsers.

<br />

<div align="center">

<img alt="Readme Banner" style='border-radius: 4px;' src="https://raw.githubusercontent.com/rizzui/rizzui/refs/heads/develop/apps/docs/static/img/banner.png" width="auto" />

</div>

## Install

```bash
npm i rizzui @headlessui/react @floating-ui/react
```

## Tailwind Configuration

```jsx
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // ⚠️ Required this line to compile RizzUI style
    ...// 💡​ configure your components, and any other source files path that contain Tailwind class names.
  ],
  darkMode: ["class", '[data-theme="dark"]'], // ⚠️ Required this line for dark mode implementation
  theme: {
    extend: {
      colors: {
        /*
        * body, modal, drawer background & ring-offset-color
        */
        background: 'rgb(var(--background) / <alpha-value>)',

        /*
        * body text color
        */
        foreground: 'rgb(var(--foreground) / <alpha-value>)',

        /*
        * border, default flat bg color for input components, tab & dropdown hover color
        */
        muted: 'rgb(var(--muted) / <alpha-value>)',

        /*
        * disable foreground color
        */
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',

        /*
        * primary colors
        */
        primary: {
          lighter: "rgb(var(--primary-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--primary-default) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },

        /*
        * secondary colors
        */
        secondary: {
          lighter: "rgb(var(--secondary-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--secondary-default) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },

        /*
        * danger colors
        */
        red: {
          lighter: "rgb(var(--red-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--red-default) / <alpha-value>)",
          dark: "rgb(var(--red-dark) / <alpha-value>)",
        },

        /*
        * warning colors
        */
        orange: {
          lighter: "rgb(var(--orange-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--orange-default) / <alpha-value>)",
          dark: "rgb(var(--orange-dark) / <alpha-value>)",
        },

        /*
        * info colors
        */
        blue: {
          lighter: "rgb(var(--blue-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--blue-default) / <alpha-value>)",
          dark: "rgb(var(--blue-dark) / <alpha-value>)",
        },

        /*
        * success colors
        */
        green: {
          lighter: "rgb(var(--green-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--green-default) / <alpha-value>)",
          dark: "rgb(var(--green-dark) / <alpha-value>)",
        },
      },
      ... // here goes your additional configuration
    },
  },
  plugins: [require("@tailwindcss/forms")], // ⚠️ Required @tailwindcss/forms plugin.
};
```

## Configure CSS

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* --------------------------------- */
  /* light theme */
  /* --------------------------------- */
  :root {
    --background: 255 255 255; /* #ffffff */
    --foreground: 72 72 72; /* #484848 */
    --muted: 227 227 227; /* #e3e3e3 */
    --muted-foreground: 146 146 146; /* #929292 */

    /*
    * primary colors
    */
    --primary-lighter: 227 227 227; /* #e3e3e3 */
    --primary-default: 34 34 34; /* #222222 */
    --primary-dark: 0 0 0; /* #000000 */
    --primary-foreground: 255 255 255; /* #ffffff */

    /*
    * secondary colors
    */
    --secondary-lighter: 221 227 255; /* #dde3ff */
    --secondary-default: 78 54 245; /* #4e36f5 */
    --secondary-dark: 67 42 216; /* #432ad8 */
    --secondary-foreground: 255 255 255; /* #ffffff */

    /*
    * danger colors
    */
    --red-lighter: 247 212 214; /* #f7d4d6 */
    --red-default: 238 0 0; /* #e00 */
    --red-dark: 197 0 0; /* #c50000 */

    /*
    * warning colors
    */
    --orange-lighter: 255 239 207; /* #ffefcf */
    --orange-default: 245 166 35; /* #f5a623 */
    --orange-dark: 171 87 10; /* #ab570a */

    /*
    * info colors
    */
    --blue-lighter: 211 229 255; /* #d3e5ff */
    --blue-default: 0 112 243; /* #0070f3 */
    --blue-dark: 7 97 209; /* #0761d1 */

    /*
    * success colors
    */
    --green-lighter: 185 249 207; /* #b9f9cf */
    --green-default: 17 168 73; /* #11a849 */
    --green-dark: 17 132 60; /* #11843c */
  }

  /* --------------------------------- */
  /* dark theme */
  /* --------------------------------- */
  [data-theme="dark"] {
    --background: 8 9 14; /* #08090e */
    --foreground: 223 223 223; /* #dfdfdf */
    --muted: 51 51 51; /* #333333 */
    --muted-foreground: 102 102 102; /* #666666 */

    /*
    * primary colors
    */
    --primary-lighter: 34 34 34; /* #222222 */
    --primary-default: 241 241 241; /* #f1f1f1 */
    --primary-dark: 255 255 255; /* #ffffff */
    --primary-foreground: 0 0 0; /* #000000 */

    /*
    * secondary colors
    */
    --secondary-lighter: 31 22 90; /* #1f165a */
    --secondary-dark: 193 203 255; /* #c1cbff */

    /*
    * danger colors
    */
    --red-lighter: 80 0 0; /* #500000 */
    --red-dark: 255 193 193; /* #ffc1c1 */

    /*
    * warning colors
    */
    --orange-lighter: 68 29 4; /* #441d04 */
    --orange-dark: 252 234 139; /* #fcea8b */

    /*
    * info colors
    */
    --blue-lighter: 13 51 94; /* #0d335e */
    --blue-dark: 181 233 255; /* #b5e9ff */

    /*
    * success colors
    */
    --green-lighter: 3 48 22; /* #033016 */
    --green-dark: 185 249 207; /* #b9f9cf */

    /* here you can customize other colors for dark theme if design required */
  }
}
```

## Usage

```jsx
import { Button } from 'rizzui/button';

export default function App() {
  return <Button>Button</Button>;
}
```

<br />

![RizzUI Button View](https://raw.githubusercontent.com/rizzui/rizzui/refs/heads/bugfix/apps/docs/static/img/example.png)

## Theme Provider

```jsx
"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  return (
    <NextThemeProvider
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
```

## Theme Switcher

```jsx
'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { ActionIcon, DropdownMenu } from 'rizzui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <ActionIcon variant="outline">
          <SunIcon className="h-5 w-5 dark:hidden" />
          <MoonIcon className="absolute hidden h-5 w-5 dark:block" />
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
}
```

## Community and Contribution

We are always looking for new ideas or other ways to improve RizzUI. If you have developed anything cool or found a bug, send us a pull request. Check out our [Contribution Guidelines](https://github.com/rizzui/rizzui/blob/bugfix/CONTRIBUTING.md).

## License

[MIT](https://choosealicense.com/licenses/mit/)

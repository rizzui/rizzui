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

## Requirements

- **React**: 19.1.0 or higher
- **Node.js**: 18.0.0 or higher
- **Package Manager**: pnpm 9.0.0+ (recommended), npm, or yarn

## Installation

Install RizzUI and its required peer dependencies:

```bash
# Using npm
npm install rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants

# Using pnpm (recommended)
pnpm add rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants

# Using yarn
yarn add rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants
```

## Tailwind CSS v4 Configuration

RizzUI 2.0 uses **Tailwind CSS v4** with CSS-first configuration. No `tailwind.config.js` needed!

Create or update your `app/globals.css` (or `src/app/globals.css` for Next.js):

```css
@import 'tailwindcss';
@source '../../node_modules/rizzui/dist';
@plugin '@tailwindcss/forms';

/* ⚠️ Required: Dark mode variant */
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

:root {
  /* ⚠️ Required: RizzUI color variables */
  --background: oklch(100% 0 0); /* #ffffff */
  --foreground: oklch(40.17% 0 0); /* #484848 */
  --muted: oklch(91.58% 0 0); /* #e3e3e3 */
  --muted-foreground: oklch(66% 0 0); /* #929292 */

  /* Border tokens */
  --border-radius: 0.5rem; /* 8px */
  --border-width: 0.0625rem; /* 1px */
  --border-color: oklch(90.37% 0 0); /* #dfdfdf */

  /* Text tokens */
  --text-primary: oklch(0% 0 0); /* #000000 */
  --text-secondary: oklch(40.17% 0 0); /* #484848 */

  /* Primary colors */
  --primary-lighter: oklch(91.58% 0 0); /* #e3e3e3 */
  --primary: oklch(17.76% 0 0); /* #111111 */
  --primary-dark: oklch(0% 0 0); /* #000000 */
  --primary-foreground: oklch(100% 0 0); /* #ffffff */

  /* Secondary colors */
  --secondary-lighter: oklch(91.99% 0.0386 276.02); /* #dde3ff */
  --secondary: oklch(50.51% 0.2633 276.95); /* #4e36f5 */
  --secondary-dark: oklch(45.41% 0.2431 277.06); /* #432ad8 */
  --secondary-foreground: oklch(100% 0 0); /* #ffffff */

  /* Danger colors */
  --red-lighter: oklch(89.99% 0.0393 14); /* #f7d4d6 */
  --red: oklch(59.6% 0.2445 29.23); /* #ee0000 */
  --red-dark: oklch(51.71% 0.2121 29.2338); /* #c50000 */

  /* Warning colors */
  --orange-lighter: oklch(95.67% 0.0452 84.5695); /* #ffefcf */
  --orange: oklch(78.37% 0.1587 72.99); /* #f5a623 */
  --orange-dark: oklch(54.83% 0.1339 53.95); /* #ab570a */

  /* Info colors */
  --blue-lighter: oklch(91.66% 0.0404 257.5078); /* #d3e5ff */
  --blue: oklch(57.31% 0.2144 258.25); /* #0070f3 */
  --blue-dark: oklch(51.58% 0.1888 258.27); /* #0761d1 */

  /* Success colors */
  --green-lighter: oklch(92.79% 0.086 155.61); /* #b9f9cf */
  --green: oklch(64.01% 0.1776 148.74); /* #11a849 */
  --green-dark: oklch(53.79% 0.1441 149.52); /* #11843c */
}

/* ⚠️ Required: Dark theme */
[data-theme='dark'] {
  --background: oklch(14.11% 0.0112 275.23); /* #08090e */
  --foreground: oklch(90.37% 0 0); /* #dfdfdf */
  --muted: oklch(32.11% 0 0); /* #333333 */
  --muted-foreground: oklch(51.03% 0 0); /* #666666 */

  --border-color: oklch(91.58% 0 0); /* #e3e3e3 */

  --text-primary: oklch(100% 0 0); /* #ffffff */
  --text-secondary: oklch(51.03% 0 0); /* #666666 */

  --primary-lighter: oklch(25.2% 0 0); /* #222222 */
  --primary: oklch(95.81% 0 0); /* #f1f1f1 */
  --primary-dark: oklch(100% 0 0); /* #ffffff */
  --primary-foreground: oklch(0% 0 0); /* #000000 */

  --secondary-lighter: oklch(26.35% 0.1154 280.96); /* #1f165a */
  --secondary-dark: oklch(85.2% 0.0733 276.238); /* #c1cbff */

  --red-lighter: oklch(27.08% 0.1111 29.23); /* #500000 */
  --red-dark: oklch(86.69% 0.0714 18.6304); /* #ffc1c1 */

  --orange-lighter: oklch(28.29% 0.0698 49.34); /* #441d04 */
  --orange-dark: oklch(93.15% 0.1175 98.83); /* #fcea8b */

  --blue-lighter: oklch(32.05% 0.0873 254.4); /* #0d335e */
  --blue-dark: oklch(90.53% 0.0611 225.72); /* #b5e9ff */

  --green-lighter: oklch(27.23% 0.0672 152.71); /* #033016 */
  --green-dark: oklch(92.79% 0.086 155.61); /* #b9f9cf */
}

/* ⚠️ Required: Map CSS variables to Tailwind colors */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  
  --border-radius: var(--border-radius);
  --color-border: var(--border-color);
  
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);

  --color-primary-lighter: var(--primary-lighter);
  --color-primary: var(--primary);
  --color-primary-dark: var(--primary-dark);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary-lighter: var(--secondary-lighter);
  --color-secondary: var(--secondary);
  --color-secondary-dark: var(--secondary-dark);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-red-lighter: var(--red-lighter);
  --color-red: var(--red);
  --color-red-dark: var(--red-dark);

  --color-orange-lighter: var(--orange-lighter);
  --color-orange: var(--orange);
  --color-orange-dark: var(--orange-dark);

  --color-blue-lighter: var(--blue-lighter);
  --color-blue: var(--blue);
  --color-blue-dark: var(--blue-dark);

  --color-green-lighter: var(--green-lighter);
  --color-green: var(--green);
  --color-green-dark: var(--green-dark);
}
```

### PostCSS Configuration

Update your `postcss.config.mjs`:

```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
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

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
  <a href="https://www.rizzui.com">Website</a> &bull;
  <a href="https://github.com/rizzui/rizzui">GitHub</a>
</div>

<br />
<br />

## Why RizzUI?

RizzUI is designed for developers who want **beautiful, accessible components** without the bloat. Built with React 19 and Tailwind CSS v4, it provides everything you need to ship faster:

- 🎨 **Modern Design** - Clean, minimal components that look great out of the box
- ⚡️ **Lightweight** - Tree-shakeable exports, import only what you need
- 🎯 **Type-Safe** - Full TypeScript support with excellent autocomplete
- ♿️ **Accessible** - Built with accessibility in mind, following WCAG guidelines
- 🎭 **Customizable** - Easy theming with CSS variables, no config files needed
- 🌙 **Dark Mode** - Built-in dark mode support that just works
- 📦 **Zero Config** - Works with Tailwind CSS v4's CSS-first approach
- 🚀 **React 19 Ready** - Built for the latest React features

<br />

## Quick Start

---

### Requirements

- **React**: 19.1.0 or higher
- **Node.js**: 18.0.0 or higher
- **Package Manager**: pnpm 9.0.0+ (recommended), npm, yarn, or bun

### Installation

Install RizzUI and its peer dependencies:

```bash
# Using pnpm (recommended)
pnpm add rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants

# Using npm
npm install rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants

# Using yarn
yarn add rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants

# Using bun
bun add rizzui @headlessui/react @floating-ui/react @tailwindcss/postcss tailwind-variants
```

### Configure Tailwind CSS v4

RizzUI 2.0 uses **Tailwind CSS v4** with CSS-first configuration. No `tailwind.config.js` needed! 🎉

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

/* ----------------------------------- */
/* Autofill Styles */
/* ----------------------------------- */
/* Override browser autofill background for all input components */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
textarea:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
  -webkit-text-fill-color: inherit !important;
  transition: background-color 5000s ease-in-out 0s;
  caret-color: inherit;
}

/* Firefox autofill */
input:-moz-autofill,
input:-moz-autofill:hover,
input:-moz-autofill:focus,
input:-moz-autofill:active,
textarea:-moz-autofill,
textarea:-moz-autofill:hover,
textarea:-moz-autofill:focus,
textarea:-moz-autofill:active {
  background-color: transparent !important;
  color: inherit !important;
  transition: background-color 5000s ease-in-out 0s;
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

That's it! You're ready to use RizzUI components. Import them individually for optimal tree-shaking:

```jsx
import { Button } from 'rizzui/button';
import { Input } from 'rizzui/input';
import { Card } from 'rizzui/card';

export default function App() {
  return (
    <div>
      <Button variant="solid" color="primary">
        Click me
      </Button>
      <Input placeholder="Enter your name" />
    </div>
  );
}
```

**💡 Tip**: Import from specific paths (e.g., `rizzui/button`) instead of the main entry point for better tree-shaking and smaller bundle sizes.

<br />

## Theme Support

---

### Theme Provider Setup

RizzUI works seamlessly with `next-themes` for theme switching:

```jsx
'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

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

### Theme Switcher Component

Here's a ready-to-use theme switcher:

```jsx
'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { ActionIcon } from 'rizzui/action-icon';
import { Dropdown } from 'rizzui/dropdown';
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

<br />

## Documentation

📚 **Full documentation available at [rizzui.com](https://www.rizzui.com/docs/guide/getting-started)**

Explore component APIs, examples, and best practices in our comprehensive docs.

## Contributing

We love contributions! Whether it's fixing bugs, adding features, or improving documentation, your help makes RizzUI better for everyone.

- 🐛 **Found a bug?** [Open an issue](https://github.com/rizzui/rizzui/issues)
- 💡 **Have an idea?** [Start a discussion](https://github.com/rizzui/rizzui/discussions)
- 🔧 **Want to contribute?** Check out our [Contributing Guidelines](https://github.com/rizzui/rizzui/blob/bugfix/CONTRIBUTING.md)

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/) - feel free to use RizzUI in your projects! 🎉

<br />
<br />

---

<br />
<div align="center">
  Made with ❤️ by the REDQ
</div>
<br />

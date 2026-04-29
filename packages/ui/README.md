<br />
<br />

<div align="center">
  <a href="https://www.rizzui.com">
    <img alt="RizzUI Logo" src="https://www.rizzui.com/img/rizz-logo.svg" height="72"/>
  </a>
</div>

<br />

<div align="center">
  <strong>rizzui</strong><br />
  React 19 + Tailwind CSS v4 components for production apps.
</div>

<br />

<div align="center">
  <a href="https://www.rizzui.com/docs/guide/getting-started">Docs</a> &bull;
  <a href="https://www.rizzui.com">Website</a> &bull;
  <a href="https://github.com/rizzui/rizzui">GitHub</a>
</div>

<br />
<br />

**React 19.1+**, **Node.js 18+**, **Tailwind CSS v4**. Install [Tailwind v4](https://tailwindcss.com/docs/installation) for your bundler first.

```bash
npm install rizzui @headlessui/react @floating-ui/react
```

Add to `app/globals.css` or `src/app/globals.css` (paths may vary):

```css
@import 'tailwindcss';
@source '../../node_modules/rizzui/dist';
@plugin '@tailwindcss/forms';

:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(40.17% 0 0);
  --muted: oklch(91.58% 0 0);
  --muted-foreground: oklch(66% 0 0);
  --border-radius: 0.5rem;
  --border-width: 0.0625rem;
  --border-color: oklch(90.37% 0 0);
  --text-primary: oklch(0% 0 0);
  --text-secondary: oklch(40.17% 0 0);
  --primary-lighter: oklch(91.58% 0 0);
  --primary: oklch(17.76% 0 0);
  --primary-dark: oklch(0% 0 0);
  --primary-foreground: oklch(100% 0 0);
  --secondary-lighter: oklch(91.99% 0.0386 276.02);
  --secondary: oklch(50.51% 0.2633 276.95);
  --secondary-dark: oklch(45.41% 0.2431 277.06);
  --secondary-foreground: oklch(100% 0 0);
  --red-lighter: oklch(89.99% 0.0393 14);
  --red: oklch(59.6% 0.2445 29.23);
  --red-dark: oklch(51.71% 0.2121 29.2338);
  --orange-lighter: oklch(95.67% 0.0452 84.5695);
  --orange: oklch(78.37% 0.1587 72.99);
  --orange-dark: oklch(54.83% 0.1339 53.95);
  --blue-lighter: oklch(91.66% 0.0404 257.5078);
  --blue: oklch(57.31% 0.2144 258.25);
  --blue-dark: oklch(51.58% 0.1888 258.27);
  --green-lighter: oklch(92.79% 0.086 155.61);
  --green: oklch(64.01% 0.1776 148.74);
  --green-dark: oklch(53.79% 0.1441 149.52);
}

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

`postcss.config.mjs`:

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
import { Input } from 'rizzui/input';
```

Prefer subpath imports (`rizzui/button`) for tree-shaking.

<br />

## More

Full setup (dark mode, autofill tweaks, advanced theming): [Getting started](https://www.rizzui.com/docs/guide/getting-started).

<br />

## Contributing

[Issues](https://github.com/rizzui/rizzui/issues) · [Discussions](https://github.com/rizzui/rizzui/discussions) · [Contributing](https://github.com/rizzui/rizzui/blob/main/CONTRIBUTING.md)

<br />

## License

[MIT](License)

# RizzUI CLI

Command-line tool to scaffold **RizzUI 2.x** in a **Next.js** app: Tailwind CSS v4 (PostCSS), OKLCH theme tokens, `@source` for scanning `rizzui/dist`, optional **next-themes** setup, and a small **`rizzui.config.json`** for your project.

## Requirements

- Node.js 18+
- A Next.js project (`next` in `package.json`)

## Installation

```bash
npm install -g rizzui-cli
# or
pnpm add -g rizzui-cli
```

## Commands

### `rizzui init`

Detects your Next.js app, updates `package.json` dependencies, writes:

- `postcss.config.mjs` (Tailwind v4 PostCSS plugin)
- **`app/globals.css`** or **`src/app/globals.css`** when the App Router directory exists; otherwise **`styles/globals.css`** or **`src/styles/globals.css`**
- **`rizzui.config.json`** — `{ version, globalsPath, darkMode, uiPreset }`
- With **light + dark**: `components/theme-provider` and `components/theme-switcher` (or under `src/components/`), plus `next-themes` and `@heroicons/react`

**Options**

- `-d, --default` — Light-only theme, non-interactive; patches the root layout import without prompting when the layout file exists.
- `--typescript` / `--no-typescript` — Reserved for future use; TS/JS is detected from the project today.
- `-s, --src-dir` / `--no-src-dir` — Reserved; `src/` is auto-detected.

**Layout import**

If `app/layout.tsx` (or `src/app/...`) exists, the CLI can insert:

```ts
import './globals.css';
```

Interactive runs ask for confirmation first; `--default` adds it without prompting.

**Peer / dev dependencies** (aligned with the `rizzui` package and example app):

- `rizzui@^2.1.0`, `react@^19.2.3`, `react-dom@^19.2.3`, `@headlessui/react@^2.2.9`, `@floating-ui/react@^0.27.16`
- Dev: `tailwindcss@^4.1.18`, `@tailwindcss/postcss@^4.1.18`, `postcss@^8.5.6`, `@tailwindcss/forms@^0.5.10`
- Dark mode: `next-themes@^0.4.6`, `@heroicons/react@^2.2.0`

Then run your package manager’s install (e.g. `pnpm install`).

**Theme provider**

Generated `ThemeProvider` uses `next-themes` with **`attribute="data-theme"`** so RizzUI’s `[data-theme='dark']` CSS and `dark:` variants work.

### `rizzui add`

Copies **RizzUI TypeScript source** bundled with **rizzui-cli** (`dist/ui-src`) into **`components/ui`** or **`src/components/ui`**, mirroring the library layout (`components/`, `lib/`) so relative imports keep working. No separate `rizzui` source install is required. Local imports are followed transitively (e.g. `button` pulls in `loader`, `lib/variants`, `lib/cn`, …).

**Interactive (recommended):** run with no arguments for a **multi-select** checklist (space to toggle, enter to confirm).

```bash
rizzui add
```

**Non-interactive:** pass one or more slugs (same names as `rizzui add` help / docs).

```bash
rizzui add button modal cn variants
```

**Print import lines only** (no files written): npm subpath imports and install hints.

```bash
rizzui add --print-imports
# or: rizzui add --all   (deprecated alias)
```

Requires a **built `rizzui-cli`** (the `build` script copies `packages/ui` sources into `dist/ui-src`). Example import after vendoring:

```ts
import { Button } from '@/components/ui/components/button';
```

## Generated CSS (summary)

- `@import 'tailwindcss';` and a computed **`@source`** to `node_modules/rizzui/dist`
- `@custom-variant dark` for `data-theme`
- `:root` and `[data-theme='dark']` OKLCH variables, `@theme inline`, `@plugin '@tailwindcss/forms'`, UI preset hooks, autofill resets — aligned with `packages/ui/src/styles/global.css` in this monorepo

## Optional HTML preset

Set on `<html>` or `<body>`:

`data-ui-preset="modern" | "minimal" | "bold" | "soft"`

## License

MIT

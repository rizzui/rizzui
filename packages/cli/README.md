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
  <strong>rizzui-cli</strong> — scaffold RizzUI in your app and vendor component source from the command line.
</div>

<br />

<div align="center">
  <a href="https://www.rizzui.com/docs/guide/getting-started">Documentation</a> &bull;
  <a href="https://www.rizzui.com">Website</a> &bull;
  <a href="https://github.com/rizzui/rizzui">GitHub</a>
</div>

<br />
<br />

## What it does

**rizzui-cli** helps you adopt [RizzUI](https://www.rizzui.com) in an existing **Next.js** or **TanStack Start** project. It scaffolds the files RizzUI expects for **Tailwind CSS v4** (PostCSS plugin, globals with OKLCH-oriented tokens), optional **dark mode** helpers (`theme-provider`, `theme-switcher`), and a small **`rizzui.config.json`**. The **`rizzui add`** command copies RizzUI TypeScript sources into your repo so you can own and customize components locally.

For installing the `rizzui` package, peer dependencies, and full styling reference, follow the [Getting started](https://www.rizzui.com/docs/guide/getting-started) guide after running `init`.

<br />

## Why use this CLI?

- **Framework-aware** — Detects Next.js or TanStack Start; override with `--framework` when needed.
- **Sensible defaults** — Use `rizzui init --default` for a non-interactive, light-theme-only setup.
- **Vendored UI** — `rizzui add` ships with bundled library sources, so you are not tied to `rizzui` publishing `src` in `node_modules`.
- **Clear layout** — Components under `components/ui` (or `src/components/ui`), shared helpers under `lib` (or `src/lib`), with existing lib files preserved where applicable.

<br />

## Quick start

From your **app root** (where `package.json` lives):

```bash
npx rizzui-cli init
```

Add components (interactive picker, or pass slugs):

```bash
npx rizzui-cli add
# or
npx rizzui-cli add button modal
```

Then install RizzUI and peers as described in the [documentation](https://www.rizzui.com/docs/guide/getting-started) if you have not already.

<br />

## Requirements

- **Node.js** 18 or later
- A supported app:
  - **Next.js** (with `next` installed), or
  - **TanStack Start** (`@tanstack/start` / `@tanstack/react-start`)

<br />

## Installation

### One-off (recommended to try)

```bash
npx rizzui-cli init
```

### Global install

```bash
npm install -g rizzui-cli
# or
pnpm add -g rizzui-cli
# or
yarn global add rizzui-cli
```

### Dev dependency (pin a version in the repo)

```bash
pnpm add -D rizzui-cli
pnpm rizzui init
```

The executable is available as both **`rizzui`** and **`rizzui-cli`**.

<br />

## Command reference

### `rizzui init`

Initializes RizzUI in an existing supported project.

**Writes or updates**

| Area                    | Details                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PostCSS                 | `postcss.config.mjs` (Tailwind v4 PostCSS plugin)                                                                                                                                                  |
| Globals                 | **Next.js:** `app/globals.css` or `src/app/globals.css` (App Router), else `styles/globals.css` or `src/styles/globals.css`. **TanStack Start:** `styles/globals.css` or `src/styles/globals.css`. |
| Config                  | `rizzui.config.json` (`version`, `globalsPath`, `darkMode`, `uiPreset`)                                                                                                                            |
| Dark mode (when chosen) | `components/theme-provider` and `components/theme-switcher` (or under `src/components`)                                                                                                            |
| Entry wiring            | **Next.js:** globals import on App Router layout. **TanStack Start:** globals on root route and ThemeProvider wiring attempted in `routes/__root.tsx`.                                             |

**Options**

- `-d, --default` — Light-only defaults, non-interactive
- `-f, --framework <next|tanstack-start>` — Override auto-detection
- `--typescript` / `--no-typescript` — Reserved (auto-detected today)
- `-s, --src-dir` / `--no-src-dir` — Reserved (auto-detected today)

**Examples**

```bash
rizzui init
rizzui init --default
rizzui init --framework tanstack-start
```

### `rizzui add [components...]`

Copies bundled RizzUI TypeScript sources into your project.

- UI files: `components/ui` or `src/components/ui`
- Shared utils (`cn`, `variants`, etc.): `lib` or `src/lib` (existing destination files in `lib` are preserved)

**Modes**

- Interactive: `rizzui add`
- Explicit slugs: `rizzui add button modal lib`
- List slugs: `rizzui add --list`
- Framework hint: `rizzui add button --framework next`

**Examples**

```bash
rizzui add
rizzui add button modal
rizzui add --list
rizzui add button --framework tanstack-start
```

<br />

## How `rizzui add` resolves sources

When `rizzui-cli` is installed from npm, **`rizzui add`** resolves files in this order:

1. **Bundled sources** inside the package (`dist/ui-src` next to the CLI build)
2. **Fallback:** `node_modules/rizzui/src` (handy in monorepos or local development)

So published installs can vendor components **without** relying on the `rizzui` package shipping `src`.

<br />

## Troubleshooting

- **No `package.json` found** — Run commands from the project root.
- **Unsupported project** — Use Next.js or TanStack Start, then run `rizzui init` again.
- **Ambiguous framework detection** — Pass `--framework next` or `--framework tanstack-start`.
- **Bundled source missing** — Reinstall `rizzui-cli`, or from the monorepo run `pnpm --filter rizzui-cli build` and `pnpm --filter rizzui-cli verify:ui-src`.
- **List available slugs** — Run `rizzui add --list`.

<br />

## License

MIT. See [LICENSE](LICENSE) in this package.

<br />

<details>
<summary><strong>Maintainers — release checklist</strong></summary>

Before publishing:

- `pnpm --filter rizzui-cli build`
- `pnpm --filter rizzui-cli verify:ui-src`
- Confirm `npm pack` contains `dist/cli.js`, `dist/ui-src/components`, and `dist/ui-src/lib`

The `prepack` script runs build and source verification automatically.

</details>

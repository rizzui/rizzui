# RizzUI CLI

Professional CLI for scaffolding RizzUI in Next.js or TanStack Start and vendoring RizzUI component source into your app.

## Requirements

- Node.js 18+
- A supported TypeScript app:
  - Next.js (`next` dependency), or
  - TanStack Start (`@tanstack/start` / `@tanstack/react-start`)

## Install

### One-off via npx

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

### Local dev dependency

```bash
pnpm add -D rizzui-cli
pnpm rizzui init
```

The binary is available as both `rizzui` and `rizzui-cli`.

## Command Reference

### `rizzui init`

Initializes RizzUI in an existing supported project (Next.js or TanStack Start).

Writes/updates:
- `postcss.config.mjs` (Tailwind v4 PostCSS plugin)
- globals stylesheet:
  - Next.js: `app/globals.css` or `src/app/globals.css` (App Router), else `styles/globals.css` or `src/styles/globals.css`
  - TanStack Start: `styles/globals.css` or `src/styles/globals.css`
- `rizzui.config.json` (`{ version, globalsPath, darkMode, uiPreset }`)
- for dark mode setup: `components/theme-provider` + `components/theme-switcher` (or under `src/components`)
- root entry patching:
  - Next.js: adds globals import to App Router layout
  - TanStack Start: adds globals import to root route and attempts ThemeProvider wrapping in `routes/__root.tsx`

Options:
- `-d, --default` light-only mode, non-interactive
- `-f, --framework <next|tanstack-start>` framework override (auto-detect by default)
- `--typescript` / `--no-typescript` reserved for future use (auto-detected today)
- `-s, --src-dir` / `--no-src-dir` reserved for future use (auto-detected today)

Examples:

```bash
rizzui init
rizzui init --default
rizzui init --framework tanstack-start
```

### `rizzui add [components...]`

Copies bundled RizzUI TypeScript source files into your project.

- UI components go to `components/ui` or `src/components/ui`
- Shared utils (`cn`, `variants`, etc.) go to `lib` or `src/lib`
- Existing files in the destination lib folder are preserved

Modes:
- interactive picker: `rizzui add`
- explicit slugs: `rizzui add button modal lib`
- list all slugs: `rizzui add --list`
- framework override: `rizzui add button --framework next`

Examples:

```bash
rizzui add
rizzui add button modal
rizzui add --list
rizzui add button --framework tanstack-start
```

## Standalone npm Publishing Behavior

`rizzui add` is designed to work when `rizzui-cli` is installed as a standalone npm package.

Source resolution order:
1. bundled sources inside `rizzui-cli` (`dist/ui-src`)
2. fallback to `node_modules/rizzui/src` (useful in monorepo/local development setups)

This means published CLI users can vendor components from the CLI package itself, without depending on `rizzui/src` being present.

## Troubleshooting

- **No `package.json` found**  
  Run the command from your app root.

- **Unsupported project**  
  Use Next.js or TanStack Start, then rerun `rizzui init`.

- **Ambiguous framework auto-detection**  
  Pass an explicit override:
  - `rizzui init --framework next`
  - `rizzui init --framework tanstack-start`

- **Bundled source missing error**  
  Reinstall `rizzui-cli` or rebuild before publishing:
  - `pnpm --filter rizzui-cli build`
  - `pnpm --filter rizzui-cli verify:ui-src`

- **Need list of supported add slugs**  
  Run `rizzui add --list`.

## Maintainer Release Notes

Before `npm publish`, ensure:
- `pnpm --filter rizzui-cli build`
- `pnpm --filter rizzui-cli verify:ui-src`
- `npm pack` includes `dist/ui-src/components` and `dist/ui-src/lib`

`prepack` runs build + source verification automatically.

## License

MIT

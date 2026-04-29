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
  <strong>rizzui-cli</strong><br />
  Scaffold <a href="https://www.rizzui.com">RizzUI</a> in Next.js or TanStack Start and vendor components into your repo.
</div>

<br />

<div align="center">
  <a href="https://www.rizzui.com/docs/guide/getting-started">Docs</a> &bull;
  <a href="https://www.rizzui.com">Website</a> &bull;
  <a href="https://github.com/rizzui/rizzui">GitHub</a>
</div>

<br />
<br />

Use the CLI from your **project root** (where `package.json` is). **Node.js 18+** and **Next.js** or **TanStack Start** required.

After `init`, add the `rizzui` npm package and peers — see [Getting started](https://www.rizzui.com/docs/guide/getting-started).

<br />

## init

Initialize Tailwind v4 scaffolding (PostCSS, globals, `rizzui.config.json`), optional dark-mode helpers, and framework wiring for Next.js or TanStack Start.

```bash
npx rizzui-cli@latest init
```

**Options**

| Flag | Description |
|------|-------------|
| `-d`, `--default` | Non-interactive, light theme only |
| `-f`, `--framework` | `next` or `tanstack-start` (override detection) |

<br />

## add

Copy RizzUI component sources into `components/ui` or `src/components/ui` (shared utils under `lib` / `src/lib`). Interactive picker, or pass component slugs.

```bash
npx rizzui-cli@latest add
```

```bash
npx rizzui-cli@latest add button modal
```

```bash
npx rizzui-cli@latest add --list
```

**Options**

| Flag | Description |
|------|-------------|
| `--list` | List available component slugs |
| `--framework` | `next` or `tanstack-start` (hint when adding) |

**Resolve order for sources:** bundled CLI package first, then `node_modules/rizzui/src` (e.g. monorepos).

<br />

<details>
<summary><strong>Install CLI in the project</strong></summary>

```bash
npm install --save-dev rizzui-cli
npx rizzui-cli init
npx rizzui-cli add
```

Global install: `npm i -g rizzui-cli` — then run `rizzui` or `rizzui-cli` (same binary).

</details>

<details>
<summary><strong>What <code>init</code> touches</strong></summary>

| Area | Output |
|------|--------|
| PostCSS | `postcss.config.mjs` |
| Globals | Next.js: `app/globals.css` / `src/app/…` or `styles/globals.css`; TanStack Start: `styles/globals.css` |
| Config | `rizzui.config.json` |
| Dark mode (optional) | `theme-provider`, `theme-switcher` under `components` or `src/components` |
| Wiring | Next.js App Router layout import; TanStack Start root route / `routes/__root.tsx` |

</details>

<details>
<summary><strong>Troubleshooting</strong></summary>

| Issue | Fix |
|-------|-----|
| No `package.json` | Run from repo root |
| Unsupported framework | Use Next.js or TanStack Start |
| Wrong framework detected | `init` / `add` with `--framework next` or `tanstack-start` |
| Missing bundled UI sources | Reinstall `rizzui-cli`; maintainers: `pnpm --filter rizzui-cli build && pnpm --filter rizzui-cli verify:ui-src` |

</details>

<br />

## License

MIT — see [LICENSE](LICENSE).

<details>
<summary>Maintainers — release</summary>

- `pnpm --filter rizzui-cli build`
- `pnpm --filter rizzui-cli verify:ui-src`
- `npm pack` should include `dist/cli.js`, `dist/ui-src/components`, `dist/ui-src/lib`

</details>

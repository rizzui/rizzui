<br />
<br />

<div align="center">
  <a href="https://www.rizzui.com">
    <img alt="RizzUI Logo" src="https://www.rizzui.com/img/rizz-logo.svg" height="72"/>
  </a>
</div>

<br />

<div align="center">
  <strong>RizzUI</strong><br />
  React 19 + Tailwind CSS v4 components — accessible, typed, themeable with CSS variables.
</div>

<br />

<div align="center">
  <a href="https://www.rizzui.com/docs/guide/getting-started">Docs</a> &bull;
  <a href="https://www.rizzui.com">Website</a> &bull;
  <a href="https://github.com/rizzui/rizzui">GitHub</a>
</div>

<br />
<br />

**React 19.1+**, **Node.js 18+**, **Tailwind CSS v4**. APIs and examples: [Getting started](https://www.rizzui.com/docs/guide/getting-started).

<br />

## npm package

Install from the registry and import from `rizzui/…` (tree-shakeable subpaths). Tailwind v4 globals and PostCSS: [packages/ui/README.md](packages/ui/README.md).

```bash
npm install rizzui @headlessui/react @floating-ui/react
```

```jsx
import { Button } from 'rizzui/button';
```

<br />

## CLI

Scaffold **Next.js** or **TanStack Start**, vendor component source into your repo. Commands and options: [packages/cli/README.md](packages/cli/README.md).

```bash
npx rizzui-cli@latest init
```

```bash
npx rizzui-cli@latest add
```

After `init`, add the `rizzui` package and peers (see Getting started above).

<br />

<details>
<summary><strong>Contributing to this repo</strong></summary>

[CONTRIBUTING.md](CONTRIBUTING.md) — issues, PRs, and local monorepo workflow (`pnpm install`, `pnpm build`, etc.).

</details>

<br />

## License

[MIT](https://choosealicense.com/licenses/mit/)

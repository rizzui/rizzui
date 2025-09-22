# RizzUI CLI

A command-line interface tool to configure RizzUI with Next.js applications seamlessly, featuring **Tailwind CSS v4** support.

## Installation

```bash
npm install -g rizzui-cli
# or
yarn global add rizzui-cli
# or
pnpm add -g rizzui-cli
```

## Usage

### Initialize RizzUI in your Next.js project

```bash
rizzui init
```

This command will:
- Detect your Next.js project configuration
- Install required dependencies (including **Tailwind CSS v4**)
- Generate PostCSS configuration for Tailwind CSS v4
- Set up global styles with modern `@import` and `@theme` syntax
- Configure dark mode support (optional)
- Create theme components (if dark mode is enabled)

### Options

- `--default` - Use default configuration without prompts
- `--typescript` - Force TypeScript configuration (auto-detected by default)
- `--no-typescript` - Force JavaScript configuration
- `--src-dir` - Force src directory structure (auto-detected by default)
- `--no-src-dir` - Force root directory structure

### Examples

```bash
# Interactive setup with prompts
rizzui init

# Quick setup with defaults (light mode only)
rizzui init --default

# Force TypeScript setup
rizzui init --typescript
```

### Add Components (Coming Soon)

```bash
rizzui add [components...]
rizzui add button input modal
rizzui add --all
```

## Features

- ✅ **Tailwind CSS v4** support with modern configuration
- ✅ Automatic Next.js project detection
- ✅ TypeScript/JavaScript detection
- ✅ Package manager detection (npm, yarn, pnpm, bun)
- ✅ Interactive color scheme selection
- ✅ Dark mode configuration with CSS-first approach
- ✅ PostCSS configuration generation
- ✅ Global styles with `@import` and `@theme` blocks
- ✅ Theme provider components
- 🔄 Component installation (coming soon)

## Requirements

- Node.js 18.0.0 or later
- Next.js project
- TailwindCSS (will be installed if not present)

## Color Customization

When using interactive mode, you can customize colors for:
- Primary colors
- Secondary colors
- Danger/Error colors
- Warning colors
- Info colors
- Success colors

All colors are based on Tailwind CSS color palette and support both light and dark modes.

## Generated Files

### Light Mode Only
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4
- `styles/globals.css` or `src/styles/globals.css` - Global styles with `@import` and `@theme`

### With Dark Mode
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4
- `styles/globals.css` or `src/styles/globals.css` - Global styles with CSS variables and dark mode
- `components/theme-provider.tsx` - Next.js theme provider
- `components/theme-switcher.tsx` - Theme toggle component

## What's New in Tailwind CSS v4

- **Simplified Installation**: Fewer dependencies, zero configuration
- **CSS-First Configuration**: Use `@theme` blocks instead of `tailwind.config.js`
- **Modern Import Syntax**: Single `@import "tailwindcss";` replaces multiple directives
- **Performance**: Up to 5x faster builds, 100x faster incremental builds
- **Modern CSS Features**: Built on cascade layers and registered custom properties

## License

MIT
# RizzUI CLI

A command-line interface tool to configure RizzUI with Next.js applications seamlessly.

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
- Install required dependencies
- Generate Tailwind CSS configuration
- Set up global styles
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

- ✅ Automatic Next.js project detection
- ✅ TypeScript/JavaScript detection
- ✅ Package manager detection (npm, yarn, pnpm, bun)
- ✅ Interactive color scheme selection
- ✅ Dark mode configuration
- ✅ Tailwind CSS setup
- ✅ Global styles generation
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
- `tailwind.config.js` - Tailwind configuration
- `styles/globals.css` or `src/styles/globals.css` - Global styles

### With Dark Mode
- `tailwind.config.js` - Tailwind configuration with dark mode
- `styles/globals.css` or `src/styles/globals.css` - Global styles with CSS variables
- `components/theme-provider.tsx` - Next.js theme provider
- `components/theme-switcher.tsx` - Theme toggle component

## License

MIT
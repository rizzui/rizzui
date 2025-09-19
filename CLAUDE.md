# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RizzUI is a modern React UI library built with TailwindCSS. The project uses a monorepo structure with Turborepo for build orchestration and pnpm as the package manager.

## Architecture

This is a monorepo with the following structure:

- **packages/ui/**: Core UI library package - contains all React components and utilities
- **packages/tsconfig/**: Shared TypeScript configurations
- **apps/docs/**: Docusaurus documentation website
- **apps/next/**: Next.js example application

## Common Commands

### Root Level Commands
- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Run TypeScript checks across all packages
- `pnpm test` - Run tests across all packages
- `pnpm clean` - Clean all build artifacts and node_modules

### UI Package Commands (packages/ui/)
- `pnpm build` - Build the UI library using tsup
- `pnpm dev` - Watch mode for development
- `pnpm lint` - TypeScript type checking
- `pnpm test` - Run Jest tests with coverage
- `pnpm test:watch` - Run tests in watch mode

### Documentation Commands (apps/docs/)
- `pnpm dev` - Start Docusaurus development server
- `pnpm build` - Build documentation for production
- `pnpm serve` - Serve built documentation locally

## Key Technologies

- **React 19**: Core framework
- **TailwindCSS**: Styling framework
- **Turborepo**: Monorepo build system
- **pnpm**: Package manager with workspaces
- **TypeScript**: Type system
- **Jest**: Testing framework
- **Docusaurus**: Documentation platform
- **tsup**: Build tool for the UI library

## UI Library Structure

The core UI library (packages/ui/) follows this organization:

- **src/components/**: All React components organized by category
- **src/lib/**: Utility functions and hooks
- **src/icons/**: SVG icon components
- **src/styles/**: Global CSS styles
- **src/tests/**: Component tests

Components are organized into folders with:
- Main component file (e.g., `button.tsx`)
- Barrel export file (`index.ts`)
- Context files when needed

## Important Notes

- Uses React 19 with peer dependencies for @headlessui/react and @floating-ui/react
- TailwindCSS configuration requires specific setup for colors and forms plugin
- Components support dark mode through CSS custom properties
- Test coverage is maintained with Jest and React Testing Library
- Package uses tsup for building with both ESM and CJS outputs
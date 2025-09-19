import { defineConfig } from 'tsup';

export default defineConfig([
  // Library build
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    splitting: false,
    sourcemap: true,
    minify: false,
    target: 'node18',
  },
  // CLI build
  {
    entry: ['src/cli.ts'],
    format: ['cjs'],
    dts: true,
    clean: false,
    splitting: false,
    sourcemap: true,
    minify: false,
    target: 'node18',
    banner: {
      js: '#!/usr/bin/env node',
    },
  },
]);
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  treeshake: true,
  splitting: true,
  bundle: true,
  external: ['react'],
  // does not support with treeshake and splitting tsup v:7.2.0
  // esbuildOptions(options) {
  //   options.banner = {
  //     js: '"use client"',
  //   };
  // },
});
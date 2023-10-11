import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  splitting: true,
  treeshake: true,
  bundle: true,
  external: ['react', 'react-dom'],
  ...options,
  // does not support with splitting tsup v:7.2.0
  // esbuildOptions(options) {
  //   options.banner = {
  //     js: '"use client"',
  //   };
  // },
}));

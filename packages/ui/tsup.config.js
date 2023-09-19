import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  splitting: true,
  treeshake: 'recommended',
  bundle: true,
  external: ['react', 'react-dom'],
  // does not support with splitting tsup v:7.2.0
  // esbuildOptions(options) {
  //   options.banner = {
  //     js: '"use client"',
  //   };
  // },
});

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: true,
  clean: true,
  minify: true,
  splitting: true,
  treeshake: true,
  outDir: './dist',
  external: ['react', 'react-dom'],
  // does not support with splitting tsup v:7.2.0
  // esbuildOptions(options) {
  //   options.banner = {
  //     js: '"use client"',
  //   };
  // },
});

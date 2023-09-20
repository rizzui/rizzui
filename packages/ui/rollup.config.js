import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default defineConfig([
  {
    input: './src/index.tsx',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].js',
        entryFileNames: 'index.js',
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
        entryFileNames: 'index.mjs',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/stories/**', '**/tests/**', '**/styles/**'],
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
]);

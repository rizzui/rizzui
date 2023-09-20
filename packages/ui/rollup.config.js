import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

export default defineConfig([
  {
    input: './src/index.tsx',
    output: [
      {
        // file: './dist/index.cjs',
        dir: 'dist',
        format: 'cjs',
      },
      {
        // file: './dist/index.js',
        dir: 'dist',
        format: 'esm',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/stories/**', '**/tests/**', '**/styles**'],
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: './dist/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]);

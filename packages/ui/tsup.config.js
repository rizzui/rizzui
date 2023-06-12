export default {
  entryPoints: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  minify: process.env.NODE_ENV === 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  splitting: true,
  clean: true,
  bundleNodeModules: true,
  dts: true,
  watch: process.env.NODE_ENV !== 'production',
};

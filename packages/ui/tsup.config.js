export default {
  entryPoints: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  minify: true,
  splitting: true,
  clean: true,
  bundleNodeModules: true,
  dts: true,
};

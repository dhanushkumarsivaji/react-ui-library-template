import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';

const isAnalyze = process.env.ANALYZE === 'true';

const config = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', { modules: false, targets: '> 0.25%, not dead' }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    json(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
      minimize: true,
    }),
    terser({
      compress: { drop_console: true, drop_debugger: true },
      format: { comments: false },
    }),
    isAnalyze &&
      visualizer({
        filename: 'stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  external: ['react', 'react-dom', 'react/jsx-runtime', /^@mui\//, /^@emotion\//],
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
    warn(warning);
  },
};

export default config;

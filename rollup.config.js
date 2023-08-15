import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

import terser from '@rollup/plugin-terser'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import eslint from '@rollup/plugin-eslint'

import alias from '@rollup/plugin-alias'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      PeerDepsExternalPlugin(),

      resolve(),
      commonjs(),

      terser(),
      eslint({}),

      alias({
        entries: [{ find: '@', replacement: './src' }],
      }),
    ],
    external: ['react'],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
    plugins: [dts.default()],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
]

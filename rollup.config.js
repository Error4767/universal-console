import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
// 路径别名
import alias from '@rollup/plugin-alias';
// 压缩代码
import terser from '@rollup/plugin-terser';

export default {
  input: './src/main.js',
  output: {
    file: path.resolve('./dist', './index.js'),
    format: 'iife',
  },
  plugins: [
    alias({
      entries: {
        '@': './src'
      }
    }),
    babel(),
    resolve(),
    commonjs(),
    terser()
  ]
}

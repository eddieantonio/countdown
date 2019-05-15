import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import {terser} from 'rollup-plugin-terser';

const OUTDIR = 'dist';

export default {
  input: 'src/main.js',
  output: {
    file: `${OUTDIR}/bundle.js`,
    format: 'iife'
  },
  plugins: [
    svelte(),
    resolve(),
    copy({
      targets: ['./src/index.html'],
      outputFolder: OUTDIR
    }),
    terser(),
  ]
}

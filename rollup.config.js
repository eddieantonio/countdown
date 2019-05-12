import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/**/*.svelte',
    }),
    resolve()
  ]
}

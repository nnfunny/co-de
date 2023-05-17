import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'co-de',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});

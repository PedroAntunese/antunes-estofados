import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No GitHub Pages o site fica em /antunes-estofados/; localmente fica em /.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/antunes-estofados/' : '/',
});

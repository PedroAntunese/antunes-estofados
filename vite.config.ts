import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Caminhos relativos: o site funciona tanto em /antunes-estofados/ (GitHub Pages) quanto na raiz.
export default defineConfig({
  plugins: [react()],
  base: './',
});

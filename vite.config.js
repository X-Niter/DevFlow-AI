import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/devflow-dashboard/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});

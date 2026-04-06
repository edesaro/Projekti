import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/html/home.html'),
        bmi: resolve(__dirname, 'src/html/bmi.html'),
      },
    },
  },
  // Public base path could be set here too:
  //base: '/~ullamu/hyte/',
  base: './',
});

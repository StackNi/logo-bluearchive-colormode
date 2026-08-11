import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/logo-bluearchive-colormode/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: 'assets/ba-logo-[name]-[hash][extname]',
        entryFileNames: 'assets/ba-logo-[name]-[hash].js',
        chunkFileNames: 'assets/ba-logo-[name]-[hash].js',
      },
    },
  },
});

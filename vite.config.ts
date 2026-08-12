import { defineConfig } from 'vite';

export default defineConfig({
  base: '/logo-bluearchive-colormode/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/ba-logo-[name]-[hash][extname]',
        entryFileNames: 'assets/ba-logo-[name]-[hash].js',
        chunkFileNames: 'assets/ba-logo-[name]-[hash].js',
      },
    },
  },
});

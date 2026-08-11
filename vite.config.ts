import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/logo-bluearchive-colormode/',
  publicDir: 'public', // 确保 public 目录被使用
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // 保持图片在 assets/image/ 路径下
          if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return 'assets/image/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
    // 确保 assets 目录被复制
    assetsInlineLimit: 0, // 不将图片转为 base64
  },
  // 确保开发服务器也能正确代理资源
  server: {
    fs: {
      strict: false,
    },
  },
});

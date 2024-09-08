import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

const path = require('path');

export default {
  base: './',
  plugins: [viteCommonjs()],
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
};

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  // base: '/',
  server: {
    port: 3000,
    host: true,
  },
  publicDir: 'estaticos',
  build: {
    outDir: 'publico',
    assetsDir: 'recursos',
    // sourcemap: true,
  },
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
});

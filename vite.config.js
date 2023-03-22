import { defineConfig } from 'vite';

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
    sourcemap: true,
  },
});

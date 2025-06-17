import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@strudel/codemirror': resolve(__dirname, '../../packages/codemirror'),
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    }
  }
}); 
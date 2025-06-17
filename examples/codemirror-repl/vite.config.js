import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@strudel/codemirror': resolve(__dirname, '../../packages/codemirror'),
      '/doc.json': resolve(__dirname, '../../doc.json')
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    }
  }
}); 
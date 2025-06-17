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
    },
    rollupOptions: {
      external: ['/doc.json'],
      output: {
        globals: {
          '/doc.json': 'doc'
        }
      }
    }
  },
  publicDir: 'public',
  plugins: [
    {
      name: 'audioworklet',
      resolveId(id) {
        if (id.endsWith('?audioworklet')) {
          return id;
        }
      },
      load(id) {
        if (id.endsWith('?audioworklet')) {
          const realId = id.slice(0, -13);
          return `export default new URL('${realId}', import.meta.url).href;`;
        }
      }
    }
  ]
}); 
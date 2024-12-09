import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': { NODE_ENV: 'production' },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/elma.tsx'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`,
    },
  },
})

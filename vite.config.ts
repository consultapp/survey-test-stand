import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const libName = 'elmaSurveyLib'
const useHash = true

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
      name: libName,
      fileName: (format) =>
        `${libName}${useHash ? '-[hash]' : ''}.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: `${libName}${useHash ? '-[hash]' : ''}.[ext]`,
      },
    },
  },
})

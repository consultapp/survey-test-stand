import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const libName = 'surveyLib'
const useHash = false

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
      formats: ['umd'],
      fileName: (format) =>
        `${libName}${useHash ? '-[hash]' : ''}.${format}.js`,
    },

    rollupOptions: {
      // input: [path.join(process.cwd(), 'index.html')],
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: `${libName}${useHash ? '-[hash]' : ''}.[ext]`,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

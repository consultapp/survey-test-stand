import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: [
        path.join(process.cwd(), 'index.html'),
        path.join(process.cwd(), 'src', 'main.tsx'),
      ],
      preserveEntrySignatures: 'allow-extension',
    },
  },
})

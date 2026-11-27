import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(currentDir, 'src/index.ts'),
      name: 'SudokuUiLibrary',
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime']
    }
  }
})
const generateViteConfig = () => `import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  build: {
    sourcemap: isProduction ? false : true,
  },
  plugins: [
    dts({
      exclude: ['./node_modules', './dist', './tests', './coverage'],
      include: ['./src/**/*.ts', './src/**/*.tsx'],
    }),
    react(),
    tsconfigPaths(),
  ],
})`;

export default generateViteConfig;

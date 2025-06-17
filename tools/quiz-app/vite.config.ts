import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  base: "WDX-180/quiz-app",
  build: {
    outDir: "../../quiz-app/",
    emptyOutDir: true
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
})

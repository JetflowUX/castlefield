import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Trigger reload after car model scale correction
export default defineConfig({
  plugins: [react()],
})

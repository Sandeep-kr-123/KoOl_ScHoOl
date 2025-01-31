import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
        '^/api/v1/user': {
            target: 'https://kool-school-server.vercel.app/',
            changeOrigin: true,
            rewrite: (path) => path.replace('^/api/v1/user', ''),
        }
    }
  },
  build: { chunkSizeWarningLimit: 4000, },
})

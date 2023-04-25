import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/api/v1/auth/register': {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      },
      '/api/v1/auth/login': {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      },
      '/api/v1/tours/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        changeOrigin: true,
        headers: {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      },
      '/api/v1/reviews/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        changeOrigin: true,
        headers: {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      }
    }
  }
});

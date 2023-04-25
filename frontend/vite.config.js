import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/api/v1/auth/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization,origin,accept',
          'Access-Control-Allow-Credentials': 'true',
        },
         withCredentials: true,
      },
      '/api/v1/tours/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com/',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization,origin,accept',
          'Access-Control-Allow-Credentials': 'true'
        },
        withCredentials: true,
      },
      '/api/v1/reviews/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com/',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization,origin,accept',
          'Access-Control-Allow-Credentials': 'true',
        },
         withCredentials: true,
      },
      '/api/v1/users/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com/',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization,origin,accept',
          'Access-Control-Allow-Credentials': 'true',
        },
         withCredentials: true,
      }
      },
      '/api/v1/bookings/*': {
        target: 'https://ny-techno-travel-gz7u.onrender.com/',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://ny-techno-travel.vercel.app/',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization,origin,accept',
          'Access-Control-Allow-Credentials': 'true',
        },
         withCredentials: true,
      }
    }
  }
);

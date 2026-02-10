import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Import path untuk menangani alias

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Menambahkan alias '@' untuk folder 'src'
      '@': path.resolve(__dirname, './src'),
      // Menambahkan alias khusus untuk 'assets' (opsional tapi membantu)
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  base: '/', 
  build: {
    outDir: 'dist',
    // Menjamin aset statis diproses dengan benar ke folder assets di dist
    assetsDir: 'assets', 
  }
});
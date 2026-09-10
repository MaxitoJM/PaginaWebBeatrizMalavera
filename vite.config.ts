import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Rutas relativas: el sitio funciona igual en la raíz de un dominio que
  // dentro de una subcarpeta, sin recompilar. Necesario para hosting cPanel.
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

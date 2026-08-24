/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        // Azul profundo institucional: color base de la identidad
        ink: {
          50: '#f4f6f9',
          100: '#e6ebf2',
          200: '#c8d4e3',
          300: '#9bb0cb',
          400: '#6785ac',
          500: '#456591',
          600: '#345078',
          700: '#2b4062',
          800: '#233450',
          900: '#152238',
          950: '#0c1526',
        },
        // Dorado cálido: acento tomado de la fotografía institucional
        brass: {
          50: '#fbf8f1',
          100: '#f5eddc',
          200: '#e9d9b6',
          300: '#dbbf88',
          400: '#cba25c',
          500: '#bf8c42',
          600: '#a67236',
          700: '#89592f',
          800: '#71482d',
          900: '#5e3d29',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f3ede3',
          300: '#e8ddcd',
        },
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.9s ease-out both',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(12, 21, 38, 0.04), 0 8px 24px -12px rgba(12, 21, 38, 0.18)',
        lift: '0 2px 4px rgba(12, 21, 38, 0.05), 0 24px 48px -20px rgba(12, 21, 38, 0.28)',
      },
    },
  },
  plugins: [],
};

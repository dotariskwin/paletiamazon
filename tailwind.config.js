/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          100: '#E6EBF4',
          200: '#B3C2DE',
          300: '#8099C9',
          400: '#4D70B3',
          500: '#1A479E',
          600: '#1A3C7D',
          700: '#1A365D',
          800: '#19304D',
          900: '#172A3D',
        },
        orange: {
          500: '#F97316',
          600: '#EA580C',
        },
        teal: {
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
      },
    },
  },
  plugins: [],
};
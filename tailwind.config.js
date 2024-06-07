import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#facc15',
        'side': '#181818',
      },
      width: {
        '15': '60px'
      },
      fontFamily: {
        'nav': "Outfit",
        'head': "Comfortaa",
        'text': "Playpen Sans",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1'},
        }
      },
      animation: {
        'fade1': 'fadeIn 2s 1.5s backwards',
        'fade2': 'fadeIn 2s 1.75s backwards',
        'fade3': 'fadeIn 2s 2s backwards',
      },
    },
  },
  plugins: [],
}


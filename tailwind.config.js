/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Absolute
        absolute: {
          white: '#FFFFFF',
          black: '#000000',
        },

        // Purple Shades (4 levels)
        purple: {
          light: '#EAE7FD', // 95
          midLight: '#AEA1F7', // 80
          midDark: '#5E43EF', // 60
          dark: '#4A42ED', // 55
        },

        // Dark Shades (4 levels)
        dark: {
          light: '#3B3B45', // 25
          midLight: '#232329', // 15
          midDark: '#131316', // 08
          dark: '#070708', // 03
        },

        // Grey Shades (4 levels)
        grey: {
          light: '#F2F2F3', // 95
          midLight: '#CACACE', // 80
          midDark: '#797C86', // 50
          dark: '#62646C', // 40
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

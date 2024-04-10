/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dodger-blue': {
          DEFAULT: '#3B98F6',
          50: '#C1FCEE',
          100: '#B5FCF0',
          200: '#9DFAF7',
          300: '#84EEF9',
          400: '#6CD7F8',
          500: '#54BBF7',
          600: '#3B98F6',
          700: '#0B5AE4',
          800: '#082CA5',
          900: '#050E65',
          950: '#030546'
        },
      }
    },
  },
  plugins: [],
}


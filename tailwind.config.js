/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#EEF0FF',
          100: '#E0E3FF',
          200: '#C6CBFF',
          300: '#A5AAFC',
          400: '#8186F5',
          500: '#4F46E5',
          600: '#4338CA',
          700: '#372FA3',
          800: '#2D2782',
          900: '#242066'
        },
        marigold: {
          50: '#FFF8EB',
          100: '#FFECC2',
          200: '#FFDC8F',
          300: '#FDC64C',
          400: '#F8AE1E',
          500: '#F59E0B',
          600: '#D5820A',
          700: '#A9640C',
          800: '#7C4A0E',
          900: '#4E2E08'
        },
        ink: {
          50: '#F5F6F9',
          100: '#E9EBF2',
          200: '#CFD3E0',
          300: '#A9AFC4',
          400: '#767E9C',
          500: '#565E7C',
          600: '#3F4560',
          700: '#2C3047',
          800: '#1B1E2E',
          900: '#0F1117',
          950: '#0A0B10'
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 17, 23, 0.04), 0 8px 24px -8px rgba(15, 17, 23, 0.08)',
        softDark: '0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -8px rgba(0,0,0,0.5)'
      },
      borderRadius: {
        xl2: '1.1rem'
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        rise: 'rise 0.4s ease-out both'
      }
    }
  },
  plugins: []
}

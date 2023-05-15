/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(circle at 50% -70%, #191D3B, #191D3B, #191A23)'
      },
      // colors: {
      //   'bg-primary': '#191A23',
      //   'text-primary': '#EEEFFC',
      //   'border-color': '#2C2D3C',
      //   'text-secondary': '#D2D3E0',
      //   'bg-secondary': '#1F2130',
      //   'icon-color': '#858699',
      //   'bg-secondary-highlighted': '#26273B',
      //   'highlight-color': '#575BC7',
      //   'red': '#EB5757',
      //   'yellow': '#F2C94C',
      //   'green': '#4CB782'
      // },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px'
      },
      colors: {
        teal: '#00B2BF',
        red: '#EB5757',
        'red-light': '#FA6563',
        mustard: '#978200',
        yellow: '#F2C94C',
        orange: '#F2994A',
        purple: '#BB87FC',
        blue: '#4EA7FC',
        green: '#4CB782',
        'bg-primary': '#191A23',
        'text-primary': '#EEEFFC',
        'border-color': '#2C2D3C',
        'text-secondary': '#D2D3E0',
        'bg-secondary': '#1F2130',
        'icon-color': '#858699',
        'bg-secondary-highlighted': '#26273B',
        'highlight-color': '#575BC7',
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#2A2C6D'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0D131E'
        }
      }
    }
  },
  plugins: []
}

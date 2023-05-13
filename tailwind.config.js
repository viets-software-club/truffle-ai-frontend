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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'bg-primary': '#191A23',
        primary: '#EEEFFC',
        somecolor: '#2C2D3C',
        secondary: '#D2D3E0',
        secondary2: '#1F2130',
        'icon-color': '#858699',
        'secondary-highlighted': '#26273B',
        'highlight-color': '#575BC7',
        red: '#EB5757',
        yellow: '#F2C94C',
        green: '#4CB782'
      }
    }
  },
  plugins: []
}

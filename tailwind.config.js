/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'header': '0px -1px 0px 0px #F1F1F1 inset, 0px 1px 0px 0px #F1F1F1 inset'
      }
    },
    colors: {
        'dark-matter': '#000',
        'lunar': {
            50: '#FAFAFA',
            100: '#F1F1F1',
            200: '#EAECEE',
            300: '#D6DADE',
            400:'#A8B0B9',
            500: '#717D8A',
            600: '#4F5B67',
            700: '#373F47',
            800: '#242D35',
            900: '#0C1116'
        },
        'indi-go': {
            50: '#F7F7FB'
        },
        'green': '#66bb6a'
    }
  },
  plugins: [],
}

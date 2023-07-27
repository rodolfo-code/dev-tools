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
            600: '#4F5B67'
        },
        'green': '#66bb6a'
    }
  },
  plugins: [],
}

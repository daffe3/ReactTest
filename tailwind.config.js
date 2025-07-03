module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF7F50', 
        'secondary-orange': '#FF6347', 
        'text-dark': '#333333', 
        'bg-light': '#F5F5DC', 
        'accent-link': '#FF7F50', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
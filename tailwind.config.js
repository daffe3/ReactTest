/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B6B',    
        'secondary-orange': '#4ECDC4', 
        'bg-light': '#F7F7F7',          
        'text-dark': '#333333',       
        'bg-dark': '#2C3E50',        
        'accent-link': '#007BFF',      
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
};

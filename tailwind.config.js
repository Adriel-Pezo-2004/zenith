module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#6c757d',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [require("@shadcn/ui")],
};
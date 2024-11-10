module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // All files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // All files in the components directory
    './src/**/*.{js,ts,jsx,tsx}', // Include all relevant directories
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff', // Customize primary color
        secondary: '#ff69b4', // Customize secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add custom font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Example plugin for better form styling
    require('@tailwindcss/typography'), // Example plugin for improved typography
  ],
};

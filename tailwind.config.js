module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  darkMode: 'class', // Enable dark mode by class
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your components
  ],
  theme: {
    extend: {
      colors: {
        // You can extend the colors or use default Tailwind dark mode colors
        background: '#1a202c', // Dark background
        text: '#cbd5e0', // Light text for dark mode
      },
    },
  },
  plugins: [],
}
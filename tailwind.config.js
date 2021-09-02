module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  },
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          100: '#019ee0',
          200: '#00618a'
        }
      }
    },
    fontFamily: {
      body: ['Didact Gothic', 'sans-serif'],
      display: ['Didact Gothic', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

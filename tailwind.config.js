module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'nav': 'var(--nav)',
        'heading-1': 'var(--Heading1-size)',
        'heading-2': 'var(--Heading2-size)',
        'heading-3': 'var(--Heading3-size)',
        'body-regular-m': 'var(--BodyRegularM-size)',
        'heading-1-mobile': 'var(--Heading1Mobile-size)',
        'heading-2-mobile': 'var(--Heading2Mobile-size)',
        'heading-3-mobile': 'var(--Heading3Mobile-size)',
        'body-regular-r': 'var(--BodyRegularR-size)',
      },
      colors: {
        black: 'var(--black)',
        blacckk: '#000000',
        yellow: 'var(--yellow)',
        'deep-yellow': 'var(--deep-yellow)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
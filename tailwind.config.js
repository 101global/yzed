module.exports = {
  purge: [
    './components/**/*.js',
    './pages/**/*.js',
    './node_modules/tailwindcss-dark-mode/prefers-dark.js',
  ],
  whitelist: ['mode-dark'],
  theme: {
    extend: {
      padding: {
        dsk: '10%',
        nav: '4.7rem',
      },
      zIndex: {
        tenThous: '10000',
        thous: '1000',
        fiveHund: '500',
      },
      gridTemplateColumns: {
        experience: '1fr 2fr 1fr',
        chat: '40px 1fr',
        comment: '1fr 40px',
        userNav: '40px 1fr',
      },
    },
    colors: {
      transparentBlack: '#0d0d0df6',
      white: '#fff',
      black: '#0d0d0d',
      grey: '#7c7c7c',
      mediumGrey: '#8b8b8b',
      lightGrey: '#eaeaea',
      aqua: '#75cedb',
      purple: '#a891d9',
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
};

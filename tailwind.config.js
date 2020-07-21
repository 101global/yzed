module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  whitelist: ['mode-dark'],
  theme: {
    extend: {
      padding: {
        dsk: '10%',
        nav: '4.7rem',
        navHeight: '86px',
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
      linearGradients: {
        leftToRight: 'linear-gradient(to-right, #a891d9, #75cedb)',
      },
      lineHeights: {
        standard: '1.5',
      },
    },
    colors: {
      black: '#272727',
      mediumGrey: '#8b8b8b',
      grey: '#7c7c7c',
      lightGrey: '#eaeaea',
      vanillaGrey: '#f7f6f3',
      white: '#fff',
      aquaLight: '#B5EAE8',
      aqua: '#75cedb',
      purple: '#a891d9',
      transparentBlack: '#0d0d0df6',
      transparentWhite: '#ffffffcc'
      transparentPurple: '#A495D54C',
    },
  },
  variants: {},
  plugins: [],
};

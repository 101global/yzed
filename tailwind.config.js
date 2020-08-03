const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  whitelist: ['mode-dark'],
  theme: {
    fill: (theme) => ({ black: theme('colors.black'), white: theme('colors.white') }),
    extend: {
      padding: {
        dsk: '10%',
        nav: '4.7rem',
        navHeight: '86px',
        '10per': '10%',
        '15per': '15%',
        '20per': '20%',
        '25per': '25%',
        '30per': '30%',
        '40per': '40%',
        '50per': '50%',
        '60per': '60%',
        '70per': '70%',
        '80per': '80%',
        '90per': '90%',
        '100per': '100%',
      },
      gridTemplateColumns: {
        experience: '1fr 2fr 1fr',
        chat: '40px 1fr',
        comment: '1fr 40px',
        userNav: '40px 1fr',
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
        desktopNav: '86px',
        mobileNav: '60px',
        desktopFooter: '60px',
        desktopNavLogo: '26px',
        mobileNavLogo: '16px',
        desktopFooterLogo: '16px',
        mobileFooterLogo: '16px',
      },
      linearGradients: {
        leftToRight: 'linear-gradient(to-right, #a891d9, #75cedb)',
      },
      lineHeights: {
        standard: '1.5',
      },
      margin: {
        '10per': '10%',
        '15per': '15%',
        '20per': '20%',
        '25per': '25%',
        '30per': '30%',
        '40per': '40%',
        '50per': '50%',
        '60per': '60%',
        '70per': '70%',
        '80per': '80%',
        '90per': '90%',
        '100per': '100%',
      },
      width: {
        '10per': '10%',
        '15per': '15%',
        '20per': '20%',
        '25per': '25%',
        '30per': '30%',
        '40per': '40%',
        '50per': '50%',
        '60per': '60%',
        '70per': '70%',
        '80per': '80%',
        '90per': '90%',
        '100per': '100%',
        floatScroll: 'calc(50vw - 150px - 2rem)',
        mobileNavLogo: '100px',
      },
      zIndex: {
        tenThous: '10000',
        thous: '1000',
        fiveHund: '500',
      },
    },
    colors: {
      black: '#272727',
      mediumGrey: '#8b8b8b',
      grey: '#7c7c7c',
      lightGrey: '#eaeaea',
      vanillaGrey: '#f7f6f3',
      white: '#fff',
      aquaLight: '#b5eae8',
      aqua: '#75cedb',
      purple: '#a891d9',
      transparentBlack: '#272727f6',
      transparentWhite: '#fffffff6',
      transparentPurple: '#A495D54C',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'dark',
      'dark:hover',
      'dark:focus',
      'dark:group-hover',
      'focus-within',
      'dark:focus-within',
      'dark:active',
      'dark:disabled',
    ],
    borderStyle: ['responsive', 'dark'],
    fill: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
  },
  plugins: [require('@danestves/tailwindcss-darkmode')()],
};

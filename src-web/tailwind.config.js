module.exports = {
  purge: {
    enabled: false,
    content: [
      // './src/**/*.html',
      // './src/**/*.vue',
      // './src/**/*.jsx',

    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {

      '0': '0',

      '1/4': '25%',

      '1/2': '50%',

      '3/4': '75%',

      'full': '100%',
    },
    fontFamily: {
      'sans': 'Poppins',
      'serif': 'Lora',
      'body': 'Source Sans Pro',
      'code': 'Fira Code',
    },

    boxShadow: {
      '1': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      '2': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
      '3': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      '4': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      '5': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      '6': 'rgba(0, 0, 0, 0.08) 0px 3px 6px, rgba(0, 0, 0, 0.12) 0px 3px 6px',
      '65': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },

    colors: {
      'transparent': {
        '50': '#ffffffff',
        '100': '#fafafaff',
        '200': '#f0f0f0ff',
        '300': '#dededeff',
        '400': '#c9c9c9ff',
        '500': '#b5b5b5ff',
        '600': '#a1a1a1ff',
        '700': '#8f8f8fff',
        '800': '#858585ff',
        '900': '#808080ff',
      },

      'white': {
        '50': '#ffffff',
        '100': '#fafafa',
        '200': '#f0f0f0',
        '300': '#dedede',
        '400': '#c9c9c9',
        '500': '#b5b5b5',
        '600': '#a1a1a1',
        '700': '#8f8f8f',
        '800': '#858585',
        '900': '#808080',
      },
      'rose': {
        '50': '#fff0f1',
        '100': '#feebed',
        '200': '#fed7dc',
        '300': '#fcb6c0',
        '400': '#f98599',
        '500': '#f55676',
        '600': '#df113d',
        '700': '#b01139',
        '800': '#921134',
        '900': '#861336',
      },
      'pink': {
        '50': '#fdf2f8',
        '100': '#fce9f3',
        '200': '#f9d7e8',
        '300': '#f6b6d5',
        '400': '#f188b9',
        '500': '#ed5096',
        '600': '#da1b6e',
        '700': '#aa1855',
        '800': '#8c1746',
        '900': '#811840',
      },
      'fuchsia': {
        '50': '#fdf5ff',
        '100': '#fbebff',
        '200': '#f8d7fe',
        '300': '#f2b6fb',
        '400': '#ea88f7',
        '500': '#dd4def',
        '600': '#c419d7',
        '700': '#9418a0',
        '800': '#7a1881',
        '900': '#711a75',
      },
      'purple': {
        '50': '#faf5ff',
        '100': '#f8f0ff',
        '200': '#eedcfe',
        '300': '#e0befd',
        '400': '#cd98fb',
        '500': '#b568f8',
        '600': '#9c3eef',
        '700': '#7f19d2',
        '800': '#681ba7',
        '900': '#5f1e94',
      },
      'violet': {
        '50': '#f6f5ff',
        '100': '#f3f0ff',
        '200': '#e3dcfe',
        '300': '#d1c4fd',
        '400': '#b59dfb',
        '500': '#9c77f8',
        '600': '#8151f0',
        '700': '#6828e6',
        '800': '#581ec2',
        '900': '#5421a6',
      },
      'indigo': {
        '50': '#f0f4ff',
        '100': '#ebefff',
        '200': '#d7defe',
        '300': '#bbc5fb',
        '400': '#96a1f8',
        '500': '#727df3',
        '600': '#5158e6',
        '700': '#383bd6',
        '800': '#2f2d9f',
        '900': '#312d7c',
      },
      'blue': {
        '50': '#f0f6ff',
        '100': '#e6f0ff',
        '200': '#cde1fe',
        '300': '#a5c7fd',
        '400': '#7aa9fa',
        '500': '#5087f7',
        '600': '#2262ec',
        '700': '#1748ba',
        '800': '#18388c',
        '900': '#1b3479',
      },
      'light-blue': {
        '50': '#f0f9ff',
        '100': '#e6f5ff',
        '200': '#c8e8fe',
        '300': '#93d3fb',
        '400': '#59bbf7',
        '500': '#0e97ec',
        '600': '#0d78ba',
        '700': '#0b5e8e',
        '800': '#0b4e74',
        '900': '#0c476a',
      },
      'cyan': {
        '50': '#ebfeff',
        '100': '#dbfcff',
        '200': '#a4f5fe',
        '300': '#4be4fb',
        '400': '#06c8ea',
        '500': '#06a3c6',
        '600': '#0b84a2',
        '700': '#0f6580',
        '800': '#12576e',
        '900': '#164e64',
      },
      'teal': {
        '50': '#edfdf9',
        '100': '#dffbf5',
        '200': '#a7f6e6',
        '300': '#22ecc7',
        '400': '#0ec8a9',
        '500': '#09a590',
        '600': '#0c8375',
        '700': '#0d635a',
        '800': '#10514c',
        '900': '#124a46',
      },
      'emerald': {
        '50': '#edfdf5',
        '100': '#dffcef',
        '200': '#abf7d7',
        '300': '#3beda6',
        '400': '#13cd86',
        '500': '#0fa973',
        '600': '#0b845c',
        '700': '#08684a',
        '800': '#06553f',
        '900': '#064c39',
      },
      'green': {
        '50': '#f2fdf5',
        '100': '#e4fbeb',
        '200': '#b8f4cb',
        '300': '#69e893',
        '400': '#22ce5e',
        '500': '#1daa4e',
        '600': '#198641',
        '700': '#166a36',
        '800': '#13582e',
        '900': '#14522d',
      },
      'lime': {
        '50': '#f4fedd',
        '100': '#e9fcc0',
        '200': '#c7f66a',
        '300': '#9de713',
        '400': '#83c412',
        '500': '#6ba611',
        '600': '#568712',
        '700': '#436912',
        '800': '#395912',
        '900': '#355214',
      },
      'yellow': {
        '50': '#fefbdd',
        '100': '#fdf5c4',
        '200': '#fae485',
        '300': '#f7c82b',
        '400': '#e2a508',
        '500': '#c58607',
        '600': '#a3690a',
        '700': '#87520d',
        '800': '#76440f',
        '900': '#6e3d11',
      },
      'amber': {
        '50': '#fff9e0',
        '100': '#fff3d2',
        '200': '#fee1a0',
        '300': '#fbc560',
        '400': '#f89a0d',
        '500': '#d77e09',
        '600': '#ae5f0a',
        '700': '#924b0c',
        '800': '#7d3b0c',
        '900': '#76350f',
      },
      'red': {
        '50': '#fef1f1',
        '100': '#feecec',
        '200': '#fcd4d4',
        '300': '#fab8b8',
        '400': '#f68d8d',
        '500': '#f35959',
        '600': '#e11919',
        '700': '#ae1919',
        '800': '#8e1a1a',
        '900': '#811d1d',
      },


      'gray': {
        '50': '#969696',
        '100': '#949494',
        '200': '#8a8a8a',
        '300': '#787878',
        '400': '#666666',
        '500': '#525252',
        '600': '#404040',
        '700': '#2e2e2e',
        '800': '#242424',
        '900': '#212121',
      },


      'lightgray': {
        '50': '#f2f2f2',
        '100': '#f0f0f0',
        '200': '#e6e6e6',
        '300': '#d6d6d6',
        '400': '#c2c2c2',
        '500': '#b0b0b0',
        '600': '#9c9c9c',
        '700': '#8c8c8c',
        '800': '#828282',
        '900': '#808080',
      },
    },

    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['focus'],
      boxShadow: ['focus'],
    }
  },
  plugins: [],
}
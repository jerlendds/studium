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

    fontFamily: {
      'sans': 'Poppins',
      'serif': 'Lora',
      'body': 'Source Sans Pro'
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
      'blue': {
        DEFAULT: '#055D7A',
        '50': '#088FBC',
        '100': '#078AB5',
        '200': '#077FA6',
        '300': '#067397',
        '400': '#066889',
        '500': '#055D7A',
        '600': '#04475D',
        '700': '#03303F',
        '800': '#011A22',
        '900': '#000304'
      },

      'darkgray': {
        DEFAULT: '#262626',
        '50': '#545454',
        '100': '#4F4F4F',
        '200': '#454545',
        '300': '#3B3B3B',
        '400': '#303030',
        '500': '#262626',
        '600': '#1F1F1F',
        '700': '#171717',
        '800': '#0F0F0F',
        '900': '#080808'
      },

      'lightgray': {
        DEFAULT: '#7C7D7E',
        '50': '#FBFBFB',
        '100': '#EDEDED',
        '200': '#D1D1D2',
        '300': '#B4B5B6',
        '400': '#98999A',
        '500': '#7C7D7E',
        '600': '#6D6D6F',
        '700': '#5D5E5F',
        '800': '#4E4F50',
        '900': '#3F4040'
      },

      'white': {
        DEFAULT: '#DBDBDB',
        '50': '#FEFEFE',
        '100': '#FAFAFA',
        '200': '#F2F2F2',
        '300': '#EBEBEB',
        '400': '#E3E3E3',
        '500': '#DBDBDB',
        '600': '#D4D4D4',
        '700': '#CCCCCC',
        '800': '#C4C4C4',
        '900': '#BDBDBD'
      },

      'yellow': {
        DEFAULT: '#E3A808',
        '50': '#F8C537',
        '100': '#F8C330',
        '200': '#F7BE21',
        '300': '#F7BA12',
        '400': '#F2B308',
        '500': '#E3A808',
        '600': '#CF9A07',
        '700': '#BB8B06',
        '800': '#A87C06',
        '900': '#946E05'
      },

      'red': {
        DEFAULT: '#A30000',
        '50': '#FF4545',
        '100': '#FF3333',
        '200': '#FF0F0F',
        '300': '#EA0000',
        '400': '#C70000',
        '500': '#A30000',
        '600': '#840000',
        '700': '#660000',
        '800': '#470000',
        '900': '#290000'
      },

      'green': {
        DEFAULT: '#348500',
        '50': '#7CFF26',
        '100': '#71FF14',
        '200': '#5FF000',
        '300': '#51CC00',
        '400': '#43A800',
        '500': '#348500',
        '600': '#2E7500',
        '700': '#286600',
        '800': '#225700',
        '900': '#1C4700'
      },

      'curious-blue': {
        DEFAULT: '#34BDEF',
        '50': '#FFFFFF',
        '100': '#F1FAFE',
        '200': '#C2EBFA',
        '300': '#93DCF6',
        '400': '#64CCF2',
        '500': '#34BDEF',
        '600': '#12A8DE',
        '700': '#0E84AF',
        '800': '#0A6080',
        '900': '#073D50'
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

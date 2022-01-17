import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#663399',
  grey: '#333333',

  secondary: '#FF9933',
  teal: '#33cc99',
  red: '#cc3333',

  background: '#E5E5E5',
  primaryFaded: '#C2ADD6',
  black: '#000000',
  white: '#FFFFFF',

  borderColor: '#091C3F14',
  blueText: '#446BF3',

  skeletonColors: ['red', 'blue', 'green'],
};

export const SYMBOLS = {
  rupee: '\u20B9',
  dot: '\u2022',
  colon: '\u003a',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  title: { fontFamily: 'FredokaOne-Regular', fontSize: SIZES.h4 },

  body4: {
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.h4,
  },
  body5: {
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.h5,
  },
  body6: {
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.h6,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

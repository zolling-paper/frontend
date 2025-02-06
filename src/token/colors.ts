const PRIMITIVE_COLORS = {
  white: '#FFFFFF',
  black: '#282428',
  purple: {
    50: '#f4e8ff',
    100: '#e0c7fe',
    200: '#cba0fe',
    300: '#b575ff',
    400: '#a350fd',
    500: '#8f2bf3',
    600: '#8425ec',
    700: '#7519e3',
    800: '#6712db',
    900: '#5100cd',
  },
  pink: {
    50: '#ffe7ff',
    100: '#fec3fd',
    200: '#ff97fd',
    300: '#f968f8',
    400: '#ef41ee',
    500: '#e606e5',
    600: '#d409df',
    700: '#be00d8',
    800: '#ab00d2',
    900: '#8601c6',
  },
  gray: {
    50: '#fff9ff',
    100: '#faf4fa',
    200: '#f5eff5',
    300: '#e8e3e8',
    400: '#c6c0c8',
    500: '#a7a2a7',
    600: '#7e787e',
    700: '#696469',
    800: '#4a454a',
    900: '#282428',
  },
};

type Color = string;

export type ColorKey =
  | 'white'
  | 'background'
  | 'lightGray'
  | 'gray'
  | 'black'
  | 'primary'
  | 'primaryContainer'
  | 'secondary'
  | 'secondaryContainer';
export type GradientKey = 'primary' | 'primaryContainer' | 'secondary' | 'secondaryContainer';

export type ColorTokens = Record<ColorKey, Color>;
export type GradientTokens = Record<GradientKey, string>;

export const SEMANTIC_COLORS: ColorTokens = {
  white: PRIMITIVE_COLORS.white,
  background: PRIMITIVE_COLORS.gray[50],
  lightGray: PRIMITIVE_COLORS.gray[400],
  gray: PRIMITIVE_COLORS.gray[600],
  black: PRIMITIVE_COLORS.gray[800],

  primary: PRIMITIVE_COLORS.pink[200],
  primaryContainer: PRIMITIVE_COLORS.pink[50],
  secondary: PRIMITIVE_COLORS.purple[600],
  secondaryContainer: PRIMITIVE_COLORS.purple[200],
};

export const GRADIENT_COLORS: GradientTokens = {
  primary: `linear-gradient(180deg, ${SEMANTIC_COLORS.primaryContainer} 0%, ${SEMANTIC_COLORS.primary} 100%)`,
  primaryContainer: `linear-gradient(180deg, ${SEMANTIC_COLORS.white} 0%, ${SEMANTIC_COLORS.primaryContainer} 100%)`,
  secondary: `linear-gradient(180deg, ${SEMANTIC_COLORS.secondaryContainer} 0%, ${SEMANTIC_COLORS.secondary} 100%)`,
  secondaryContainer: `linear-gradient(180deg, ${SEMANTIC_COLORS.white} 0%, ${SEMANTIC_COLORS.secondaryContainer} 100%)`,
};

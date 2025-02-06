import {Global} from '@emotion/react';
import {GlobalStyle} from '@theme/GlobalStyle';
import {Theme} from '@theme/theme.type';
import {GRADIENT_COLORS, SEMANTIC_COLORS} from '@token/colors';
import {TYPOGRAPHY} from '@token/typography';
import {ZINDEX} from '@token/zIndex';
import React, {createContext, ReactNode, useContext, useMemo} from 'react';

interface ThemeContextProps {
  theme: Theme;
}

const defaultTheme: Theme = {
  colors: SEMANTIC_COLORS,
  gradients: GRADIENT_COLORS,
  typography: TYPOGRAPHY,
  zIndex: ZINDEX,
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const DesignProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const theme = useMemo(() => defaultTheme, []);

  return (
    <ThemeContext.Provider value={{theme}}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a DesignProvider');
  }
  return context;
};

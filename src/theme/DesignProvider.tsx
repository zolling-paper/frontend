import React, {createContext, useContext, useState, ReactNode, useMemo} from 'react';
import {Global} from '@emotion/react';

import {Theme} from '@theme/theme.type';
import {GlobalStyle} from '@theme/GlobalStyle';
import {COLORS} from '@token/colors';
import {TYPOGRAPHY} from '@token/typography';
import {ZINDEX} from '@token/zIndex';

interface ThemeContextProps {
  theme: Theme;
}

const defaultTheme: Theme = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  zIndex: ZINDEX,
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const DesignProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const theme = useMemo(() => defaultTheme, []);
  
  return (
    <ThemeContext.Provider value={{theme}}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a DesignProvider');
  }
  return context;
};

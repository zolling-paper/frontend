import React, { ReactNode, useMemo} from 'react';
import {Global, ThemeContext} from '@emotion/react';

import {Theme} from '@theme/theme.type';
import {GlobalStyle} from '@theme/GlobalStyle';
import {COLORS} from '@token/colors';
import {TYPOGRAPHY} from '@token/typography';
import {ZINDEX} from '@token/zIndex';

const defaultTheme: Theme = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  zIndex: ZINDEX,
};

export const DesignProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const theme = useMemo(() => defaultTheme, []);
  
  return (
    <ThemeContext.Provider value={{theme}}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeContext.Provider>
  );
};
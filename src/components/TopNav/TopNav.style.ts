import {css} from '@emotion/react';

import {Theme} from '@/theme/theme.type';

interface TopNavStyleProps {
  theme: Theme;
}

export const topNavStyle = ({theme}: TopNavStyleProps) => css`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.white};
`;

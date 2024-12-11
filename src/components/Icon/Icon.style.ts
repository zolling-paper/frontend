import {css} from '@emotion/react';

import {ColorKey} from '@token/colors';

import {IconColor, IconStylePropsWithTheme, IconType} from './Icon.type';

const ICON_DEFAULT_COLOR: Record<IconType, IconColor> = {
  inputDelete: 'gray',
};

export const iconStyle = ({iconType, theme, iconColor}: IconStylePropsWithTheme) => {
  return [
    css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    getIconColor({iconType, theme, iconColor}),
  ];
};

const getIconColor = ({iconType, theme, iconColor}: IconStylePropsWithTheme) => {
  if (iconColor) {
    return css({
      color: theme.colors[iconColor as ColorKey],
    });
  } else {
    return css({color: theme.colors[ICON_DEFAULT_COLOR[iconType]]});
  }
};

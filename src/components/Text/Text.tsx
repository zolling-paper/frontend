/** @jsxImportSource @emotion/react */
import type {TextProps} from './Text.type';

import React from 'react';

import {useTheme} from '@theme/useTheme';

import {getSizeStyling} from './Text.style';

export const Text: React.FC<TextProps> = ({
  size = 'body',
  textColor = 'black',
  children,
  responsive = false,
  ...attributes
}: TextProps) => {
  const {theme} = useTheme();
  return (
    <p css={getSizeStyling({size, textColor, theme, responsive})} {...attributes}>
      {children === '' ? '\u00A0' : children}
    </p>
  );
};

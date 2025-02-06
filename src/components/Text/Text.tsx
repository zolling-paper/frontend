/** @jsxImportSource @emotion/react */

import {useTheme} from '@theme/DesignProvider';
import React from 'react';

import {getSizeStyling} from './Text.style';

import type {TextProps} from './Text.type';

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

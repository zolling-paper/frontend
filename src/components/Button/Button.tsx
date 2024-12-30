/** @jsxImportSource @emotion/react */

import {useTheme} from '@theme/DesignProvider';
import React, {forwardRef} from 'react';


import {buttonStyle} from './Button.style';
import {ButtonProps} from './Button.type';


export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variants = 'primary', size = 'medium', disabled, children, isLoading, ...htmlProps}: ButtonProps,
  ref,
) {
  const {theme} = useTheme();
  return (
    <button
      css={buttonStyle({variants, size, theme})}
      ref={ref}
      {...htmlProps}
      disabled={isLoading ? true : disabled}
      aria-busy={isLoading}
      aria-label={isLoading ? "로딩 중" : htmlProps['aria-label']}
      //TODO: (@Todari) loading styling
    >
      {children}
    </button>
  );
});

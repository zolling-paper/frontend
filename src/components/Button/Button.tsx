/** @jsxImportSource @emotion/react */

import React, {forwardRef} from 'react';

import {useTheme} from '@theme/DesignProvider';

import {ButtonProps} from './Button.type';
import {buttonStyle} from './Button.style';


export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variants = 'primary', size = 'medium', disabled, children, ...htmlProps}: ButtonProps,
  ref,
) {
  const {theme} = useTheme();
  return (
    <button
      css={buttonStyle({variants, size, theme})}
      ref={ref}
      disabled={variants === 'loading' ? true : disabled}
      {...htmlProps}
    >
      {children}
    </button>
  );
});

export default Button;

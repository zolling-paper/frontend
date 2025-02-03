/** @jsxImportSource @emotion/react */

import {useTheme} from '@theme/DesignProvider';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';

import {buttonStyle} from './Button.style';
import {ButtonProps} from './Button.type';

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variants = 'primary', size = 'md', disabled, children, isLoading, ...htmlProps}: ButtonProps,
  ref,
) {
  const {theme} = useTheme();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => buttonRef.current!);

  return (
    <button
      css={buttonStyle({variants, size, theme})}
      ref={buttonRef}
      {...htmlProps}
      disabled={isLoading ? true : disabled}
      aria-busy={isLoading}
      aria-label={isLoading ? '로딩 중' : htmlProps['aria-label']}
      //TODO: (@Todari) loading styling
    >
      {children}
    </button>
  );
});

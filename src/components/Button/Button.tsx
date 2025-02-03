/** @jsxImportSource @emotion/react */

import {useTheme} from '@theme/DesignProvider';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';

import {buttonStyle} from './Button.style';
import {ButtonProps} from './Button.type';

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variants = 'primary', size = 'medium', disabled, children, isLoading, ...htmlProps}: ButtonProps,
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

('display:flex;justify-content:center;align-items:center;line-height:1;transition:0.2s;transition-timing-function:cubic-bezier(0.7, 0.62, 0.62, 1.16);white-space:nowrap;background:linear-gradient(180deg, #FFDCFF 0%, #FF97FE 100%);border:2px solid #C782FF;image-rendering:pixelated;&:focus-visible{outline:2px solid #bfff75;outline-offset:1px;}&:disabled{background:#F1F0F5;color:#FFFFFF;cursor:default;};;padding:0.5rem 0.75rem;border-radius:0.5rem;font-family:Pretendard;font-size:0.75rem;font-weight:400;;;:not(:disabled){&:hover{background:#ffffff;}&:active{background:#d9d9d9;}};;;');
('display:flex;justify-content:center;align-items:center;line-height:1;transition:0.2s;transition-timing-function:cubic-bezier(0.7, 0.62, 0.62, 1.16);white-space:nowrap;background:linear-gradient(180deg, #FFDCFF 0%, #FF97FE 100%);border:2px solid #C782FF;image-rendering:pixelated;&:focus-visible{outline:2px solid #bfff75;outline-offset:1px;}&:disabled{background:#F1F0F5;color:#FFFFFF;cursor:default;};;padding:1rem 1.5rem;border-radius:1rem;font-family:Pretendard;font-size:1.25rem;font-weight:700;;;background:#b575ff;color:#FFFFFF;;;:not(:disabled){&:hover{background:#c08aff;}&:active{background:#9a63d9;}};;;');

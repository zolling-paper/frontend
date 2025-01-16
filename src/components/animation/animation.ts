import {css} from '@emotion/react';

export const commonTransition = css({
  transition: '0.2s',
  transitionTimingFunction: 'cubic-bezier(0.7, 0.62, 0.62, 1.16)',
});

export const labelTextAnimationStyle = (hasFocus: boolean, hasValue: boolean) =>
  css({
    opacity: hasFocus || hasValue ? '1' : '0',

    ...commonTransition,
  });

export const errorTextAnimationStyle = (isError: boolean) =>
  css({
    opacity: isError ? '1' : '0',

    ...commonTransition,
  });

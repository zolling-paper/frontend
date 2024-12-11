import {css} from '@emotion/react';

import {Theme} from '@theme/theme.type';

export const inputLayoutStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  width: '100%',
});

export const labelLayoutStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  paddingInline: '0.5rem',
  margin: '0 0 0.375rem 0',
});

const getBorderStyle = (isFocus: boolean, theme: Theme, isError?: boolean) =>
  isError ? `0 0 0 1px ${theme.colors.error} inset` : isFocus ? `0 0 0 1px ${theme.colors.primary} inset` : 'none';

export const labelTextStyle = (theme: Theme, hasFocus: boolean, hasValue: boolean) =>
  css([
    {
      height: '1.125rem',
      color: theme.colors.gray,
    },
    labelTextAnimationStyle(hasFocus, hasValue),
  ]);

export const labelTextAnimationStyle = (hasFocus: boolean, hasValue: boolean) =>
  css({
    opacity: hasFocus || hasValue ? '1' : '0',

    transition: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0.7, 0.62, 0.62, 1.16)',
  });

export const errorTextStyle = (theme: Theme, isError: boolean) =>
  css({
    height: '1.125rem',
    color: theme.colors.onErrorContainer,

    opacity: isError ? '1' : '0',

    transition: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0.7, 0.62, 0.62, 1.16)',
  });

export const inputBoxStyle = (theme: Theme, isFocus: boolean, isError: boolean | undefined) =>
  css([
    {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '0.75rem 1rem',
      borderRadius: '1rem',
      backgroundColor: theme.colors.lightGrayContainer,
      boxSizing: 'border-box',
      boxShadow: getBorderStyle(isFocus, theme, isError),
    },
    inputBoxAnimationStyle(),
  ]);

export const inputBoxAnimationStyle = () =>
  css({
    transition: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0.7, 0.62, 0.62, 1.16)',
  });

export const inputStyle = (theme: Theme) =>
  css(
    {
      display: 'flex',
      width: '100%',
      color: theme.colors.black,

      '&:placeholder': {
        color: theme.colors.gray,
      },
    },
    {...theme.typography.body},
  );

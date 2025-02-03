import {css} from '@emotion/react';
import {Theme} from '@theme/theme.type';
import {setDarker, setLighter} from '@utils/colors';

import {ButtonStyleProps, ButtonSize, ButtonVariants} from './Button.type';

export const buttonStyle = (props: Required<ButtonStyleProps>) => {
  return css([
    getButtonDefaultStyle(props.theme),
    getButtonSizeStyle(props.size),
    getButtonVariantsStyle(props.variants, props.theme),
  ]);
};

const getButtonDefaultStyle = (theme: Theme) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1',
    transition: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0.7, 0.62, 0.62, 1.16)',
    whiteSpace: 'nowrap',

    

    '&:focus-visible': {
      outline: `2px solid ${theme.colors.complete}`,
      outlineOffset: '1px',
    },
    '&:disabled': {
      background: theme.colors.grayContainer,
      color: theme.colors.onPrimary,
      cursor: 'default',
    },
  });

const getHoverAndActiveBackground = (color: string) =>
  css({
    ':not(:disabled)': {
      '&:hover': {
        background: setLighter(color, 0.15),
      },
      '&:active': {
        background: setDarker(color, 0.15),
      },
    },
  });

const getButtonSizeStyle = (size: ButtonSize) => {
  const style = {
    small: css({
      padding: '0.5rem 0.75rem',
      borderRadius: '0.5rem',
      fontFamily: 'Pretendard',
      fontSize: '0.75rem',
      fontWeight: '400',
    }),
    medium: css({
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      fontFamily: 'Pretendard',
      fontSize: '1rem',
      fontWeight: '700',
    }),
    semiLarge: css({
      padding: '0.75rem 1rem',
      borderRadius: '1rem',
      fontFamily: 'Pretendard',
      fontSize: '1rem',
      fontWeight: '700',
      height: '3rem',
    }),
    large: css({
      padding: '1rem 1.5rem',
      borderRadius: '1rem',
      fontFamily: 'Pretendard',
      fontSize: '1.25rem',
      fontWeight: '700',
    }),
  };

  return style[size];
};

/* 배경 그라데이션 */
    background: 'linear-gradient(180deg, #FFDCFF 0%, #FF97FE 100%)',
    /* 테두리 스타일 */
    border: '2px solid #C782FF',

const getButtonVariantsStyle = (variants: ButtonVariants, theme: Theme) => {
  const style = {
    primary: [
      css({
        background: theme.colors.primary,
        color: theme.colors.onPrimary,
      }),
      getHoverAndActiveBackground(theme.colors.primary),
    ],
    secondary: [
      css({
        background: theme.colors.secondary,
        color: theme.colors.onSecondary,
      }),
      getHoverAndActiveBackground(theme.colors.secondary),
    ],
    tertiary: [
      css({
        background: theme.colors.tertiary,
        color: theme.colors.onTertiary,
      }),
      getHoverAndActiveBackground(theme.colors.tertiary),
    ],
    ghost: [getHoverAndActiveBackground(theme.colors.white)],
    destructive: [
      css({
        background: theme.colors.error,
        color: theme.colors.onPrimary,
      }),
      getHoverAndActiveBackground(theme.colors.error),
    ],
  };

  return style[variants];
};

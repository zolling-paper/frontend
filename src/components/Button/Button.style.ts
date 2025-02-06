import {css} from '@emotion/react';
import {Theme} from '@theme/theme.type';

import {ButtonStyleProps, ButtonSize, ButtonVariants, ButtonDisplay} from './Button.type';

import {setDarker, setLighter} from '@/utils/colors';

export const buttonContentStyle = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const buttonStyle = (props: Required<ButtonStyleProps>) => {
  return css([
    getButtonDefaultStyle(props.display),
    getButtonSizeStyle(props.size),
    getButtonVariantsStyle(props.variants, props.theme),
  ]);
};

const getButtonDefaultStyle = (display: ButtonDisplay) =>
  css({
    display: display === 'full' ? 'flex' : 'block',
    width: display === 'full' ? '100%' : 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1',
    transition: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0.7, 0.62, 0.62, 1.16)',
    whiteSpace: 'nowrap',

    '&:disabled': {
      opacity: 0.32,
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
    sm: css({
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: '0.75rem',
      fontWeight: '600',
    }),
    md: css({
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '700',
    }),
    lg: css({
      padding: '1rem 1.25rem',
      borderRadius: '0.625rem',
      fontSize: '1.25rem',
      fontWeight: '700',
    }),
  };

  return style[size];
};

const getButtonVariantsStyle = (variants: ButtonVariants, theme: Theme) => {
  const style = {
    primary: [
      css({
        background: theme.gradients.primary,
        boxShadow: `0 0 0 2px ${theme.colors.secondary}`,
        color: theme.colors.secondary,
      }),
      getHoverAndActiveBackground(theme.colors.primary),
    ],
    secondary: [
      css({
        background: theme.gradients.secondaryContainer,
        boxShadow: `0 0 0 2px ${theme.colors.secondary}`,
        color: theme.colors.secondary,
      }),
      getHoverAndActiveBackground(theme.colors.secondary),
    ],
    ghost: [getHoverAndActiveBackground(theme.colors.white)],
  };

  return style[variants];
};

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

    '&:disabled': {
      background: theme.colors.lightGray,
      border: 'none',
      color: theme.colors.white,
      cursor: 'default',
    },
  });

const getHoverAndActiveBackground = (color: string) =>
  css({
    // ':not(:disabled)': {
    //   '&:hover': {
    //     background: setLighter(color, 0.15),
    //   },
    //   '&:active': {
    //     background: setDarker(color, 0.15),
    //   },
    // },
  });

const getButtonSizeStyle = (size: ButtonSize) => {
  const style = {
    sm: css({
      padding: '0.5rem 0.75rem',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: '600',
    }),
    md: css({
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '700',
    }),
    lg: css({
      padding: '1rem 1.5rem',
      borderRadius: '1rem',
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
        color: theme.colors.secondary,
        border: `2px solid ${theme.colors.secondary}`,
      }),
      getHoverAndActiveBackground(theme.colors.primary),
    ],
    secondary: [
      css({
        background: theme.gradients.secondaryContainer,
        color: theme.colors.secondary,
        border: `2px solid ${theme.colors.secondary}`,
      }),
      getHoverAndActiveBackground(theme.colors.secondary),
    ],
    ghost: [getHoverAndActiveBackground(theme.colors.white)],
  };

  return style[variants];
};

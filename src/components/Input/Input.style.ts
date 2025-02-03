import {errorTextAnimationStyle, labelTextAnimationStyle} from './../animation/animation';
import {css} from '@emotion/react';
import {Theme} from '@theme/theme.type';
import {commonTransition} from '../animation/animation';

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

interface InputStyleProps {
  isFocus: boolean;
  theme: Theme;
  isError?: boolean;
}

const getBorderStyle = ({isFocus, theme, isError}: InputStyleProps) =>
  isError ? `0 0 0 1px ${theme.colors.primary} inset` : isFocus ? `0 0 0 1px ${theme.colors.secondary} inset` : 'none';

export const labelTextStyle = (theme: Theme, hasFocus: boolean, hasValue: boolean) =>
  css([
    {
      height: '1.125rem',
      color: theme.colors.gray,
    },
    !hasFocus &&
      !hasValue && {
        transform: 'translate(0.25rem, 1rem)',
        scale: '1.5',
        opacity: '0',
      },
    labelTextAnimationStyle(hasFocus, hasValue),
  ]);

export const errorTextStyle = ({theme, isError}: InputStyleProps) =>
  css([
    {
      height: '1.125rem',
      color: theme.colors.primary,
    },
    errorTextAnimationStyle(isError ?? false),
  ]);

export const inputBoxStyle = ({theme, isFocus, isError}: InputStyleProps) =>
  css([
    {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '0.75rem 1rem',
      borderRadius: '1rem',
      background: theme.gradients.primaryContainer,
      boxSizing: 'border-box',
      boxShadow: getBorderStyle({isFocus, theme, isError}),
    },
    inputBoxAnimationStyle,
  ]);

export const inputBoxAnimationStyle = commonTransition;

export const inputStyle = ({theme}: InputStyleProps) =>
  css([
    {
      display: 'flex',
      width: '100%',
      color: theme.colors.secondary,

      '&:placeholder': {
        color: theme.colors.lightGray,
      },
    },
    // {...theme.typography.body},
  ]);

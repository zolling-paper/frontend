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

const getBorderStyle = ({theme, isError}: InputStyleProps) =>
  css({
    boxShadow: isError ? `0 0 0 2px ${theme.colors.primary} inset` : `0 0 0 2px ${theme.colors.secondary} inset`,
  });

export const labelTextStyle = (theme: Theme, hasFocus: boolean, hasValue: boolean) =>
  css([
    {
      height: '1.125rem',
      color: theme.colors.secondary,
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

export const inputBoxStyle = ({isFocus, theme, isError}: InputStyleProps) =>
  css([
    {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '1rem 1.25rem',
      borderRadius: '0.625rem',
      background: isFocus ? theme.gradients.primary : theme.gradients.primaryContainer,
      boxSizing: 'border-box',
    },
    getBorderStyle({isFocus, theme, isError}),
    inputBoxAnimationStyle,
  ]);

export const inputBoxAnimationStyle = commonTransition;

export const inputStyle = ({isFocus, theme}: InputStyleProps) =>
  css([
    {
      display: 'flex',
      width: '100%',
      color: theme.colors.secondary,
      fontSize: '1.25rem',
      fontWeight: '700',

      '&::placeholder': {
        color: isFocus ? theme.colors.background : theme.colors.lightGray,
      },
    },
    // {...theme.typography.body},
  ]);

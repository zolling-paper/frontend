import {Theme} from '@theme/theme.type';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariants = 'primary' | 'secondary' | 'ghost';
export type ButtonDisplay = 'block' | 'full';

export interface ButtonStyleProps {
  variants?: ButtonVariants;
  size?: ButtonSize;
  display?: ButtonDisplay;
  theme?: Theme;
}

export interface ButtonStateProps {
  isLoading?: boolean;
}

export type ButtonOptionProps = ButtonStyleProps & ButtonStateProps;

export type ButtonProps = React.ComponentProps<'button'> & ButtonOptionProps;

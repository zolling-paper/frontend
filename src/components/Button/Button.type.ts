import {Theme} from '@theme/theme.type';

export type ButtonSize = 'small' | 'medium' | 'semiLarge' | 'large';
export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface ButtonStyleProps {
  variants?: ButtonVariants;
  size?: ButtonSize;
  theme?: Theme;
}

export interface ButtonStateProps {
  isLoading?: boolean;
}

export type ButtonOptionProps = ButtonStyleProps & ButtonStateProps;

export type ButtonProps = React.ComponentProps<'button'> & ButtonOptionProps;

import {Theme} from '@theme/theme.type';

export interface InputStyleProps {
  theme?: Theme;
  hasError?: boolean;
}

export interface InputCustomProps {
  labelText?: string;
  errorText?: string | null;
  onDelete?: () => void;
}

export type InputOptionProps = InputStyleProps & InputCustomProps;

export type InputProps = React.ComponentProps<'input'> & InputOptionProps;

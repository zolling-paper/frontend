import {Theme} from '@theme/theme.type';

export interface TextAreaStyleProps {
  theme?: Theme;
  hasError?: boolean;
}

export interface TextAreaCustomProps {
  labelText?: string;
  errorText?: string | null;
}

export type TextAreaOptionProps = TextAreaStyleProps & TextAreaCustomProps;

export type TextAreaProps = React.ComponentProps<'textarea'> & TextAreaOptionProps;

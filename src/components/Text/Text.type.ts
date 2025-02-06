import {Theme} from '@theme/theme.type';
import {ColorKey} from '@token/colors';

import TYPOGRAPHY from '@token/typography';

export type TextSize = keyof typeof TYPOGRAPHY;

export interface TextStyleProps {
  size?: TextSize;
  textColor?: ColorKey;
  responsive?: boolean;
}

export interface TextStylePropsWithTheme extends TextStyleProps {
  theme: Theme;
}

export type TextOptionProps = TextStyleProps;

export type TextProps = React.ComponentProps<'p'> & TextOptionProps;

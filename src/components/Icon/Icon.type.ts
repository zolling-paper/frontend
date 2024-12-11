import {Theme} from '@theme/theme.type';
import {ColorKey} from '@token/colors';

import {ICON} from './Icon';

export type IconType = keyof typeof ICON;

export type IconColor = ColorKey;

export interface IconStyleProps {
  iconColor?: IconColor;
  iconType: IconType;
}

export interface IconStylePropsWithTheme extends IconStyleProps {
  theme: Theme;
}

export type IconOptionProps = IconStyleProps;

export type IconProps = React.ComponentProps<'div'> & IconOptionProps;

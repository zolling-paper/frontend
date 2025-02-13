import {ColorTokens} from '@token/colors';
import {GradientTokens} from '@token/colors';
import {TypographyTokens} from '@token/typography';
import {ZIndexTokens} from '@token/zIndex';

export interface Theme {
  colors: ColorTokens;
  gradients: GradientTokens;
  typography: TypographyTokens;
  zIndex: ZIndexTokens;
}

/** @jsxImportSource @emotion/react */
import IconMeatballsSvg from '@assets/svg/meatballs.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconMeatballs = ({color = 'black', ...rest}: Omit<SvgProps, 'children'>) => {
  return (
    <Svg color={color} {...rest}>
      <IconMeatballsSvg />
    </Svg>
  );
};

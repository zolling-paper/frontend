/** @jsxImportSource @emotion/react */
import IconCheckSvg from '@assets/svg/check.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconCheck = ({color = 'primary', ...rest}: Omit<SvgProps, 'children'>) => {
  return (
    <Svg color={color} {...rest}>
      <IconCheckSvg />
    </Svg>
  );
};

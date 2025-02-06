/** @jsxImportSource @emotion/react */
import IconErrorCircleSvg from '@assets/svg/error-circle.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconErrorCircle = ({color = 'error', ...rest}: Omit<SvgProps, 'children'>) => {
  return (
    <Svg color={color} {...rest}>
      <IconErrorCircleSvg />
    </Svg>
  );
};

/** @jsxImportSource @emotion/react */
import IconXCircleSvg from '@assets/svg/x-circle.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconXCircle = ({color = 'gray', ...rest}: Omit<SvgProps, 'children'>) => {
  return (
    <Svg color={color} {...rest}>
      <IconXCircleSvg />
    </Svg>
  );
};

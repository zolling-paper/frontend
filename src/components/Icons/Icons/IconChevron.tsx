/** @jsxImportSource @emotion/react */
import IconChevronSvg from '@assets/svg/chevron.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconChevron = ({color = 'gray', direction = 'down', ...rest}: Omit<SvgProps, 'children'>) => {
  console.log('iconChevron');
  return (
    <Svg color={color} direction={direction} {...rest}>
      <IconChevronSvg />
    </Svg>
  );
};

/** @jsxImportSource @emotion/react */
import IconSearchSvg from '@assets/svg/search.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconSearch = ({color = 'gray', ...rest}: Omit<SvgProps, 'children'>) => {
  return (
    <Svg color={color} {...rest}>
      <IconSearchSvg />
    </Svg>
  );
};

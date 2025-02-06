/** @jsxImportSource @emotion/react */
import IconPictureSquareSvg from '@assets/svg/picture-square.svg';

import {SvgProps} from '../Icon.type';
import Svg from '../Svg';

export const IconPictureSquare = ({color = 'white', ...rest}: Omit<SvgProps, 'children'>) => {
  return (
    <Svg color={color} {...rest}>
      <IconPictureSquareSvg />
    </Svg>
  );
};

/** @jsxImportSource @emotion/react */

import InputDelete from '@assets/image/inputDelete.svg';
import {IconProps} from '@components/Icon/Icon.type';
import {useTheme} from '@theme/DesignProvider';

import {iconStyle} from './Icon.style';

export const ICON = {
  inputDelete: <InputDelete />,
} as const;

export const Icon = ({iconColor, iconType, ...htmlProps}: IconProps) => {
  const {theme} = useTheme();

  return (
    <div css={iconStyle({iconType, theme, iconColor})} {...htmlProps}>
      {ICON[iconType]}
    </div>
  );
};

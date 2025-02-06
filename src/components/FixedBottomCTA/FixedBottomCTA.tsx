/** @jsxImportSource @emotion/react */
import {fixedBottomCTAStyle} from './FixedBottomCTA.style';
import {VStack} from '../Stack';

import {useTheme} from '@/theme/DesignProvider';

export const FixedBottomCTA = ({children}: {children: React.ReactNode}) => {
  const {theme} = useTheme();

  return (
    <VStack p="1.5rem 1.5rem 2rem" gap="1rem" bg={theme.colors.background} css={fixedBottomCTAStyle}>
      {children}
    </VStack>
  );
};

export default FixedBottomCTA;

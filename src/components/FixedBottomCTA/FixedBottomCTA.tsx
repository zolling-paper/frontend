/** @jsxImportSource @emotion/react */
import {useTheme} from '@theme/DesignProvider';

import {fixedBottomCTAStyle} from './FixedBottomCTA.style';
import {HStack, VStack} from '../Stack';
import {FixedBottomCTAProps} from './FixedBottomCTA.type';


export const FixedBottomCTA = ({children, direction = 'column'}: FixedBottomCTAProps) => {
  const {theme} = useTheme();

  return (
    <>
      {direction === 'column' ? (
        <VStack p="1.5rem 1.5rem 2rem" gap="1rem" bg={theme.colors.background} css={fixedBottomCTAStyle}>
          {children}
        </VStack>
      ) : (
        <HStack p="1.5rem 1.5rem 2rem" gap="1rem" bg={theme.colors.background} css={fixedBottomCTAStyle}>
          {children}
        </HStack>
      )}
    </>
  );
};

export default FixedBottomCTA;

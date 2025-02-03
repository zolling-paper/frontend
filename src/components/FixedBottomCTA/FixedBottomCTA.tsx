/** @jsxImportSource @emotion/react */
import {useTheme} from '@/theme/DesignProvider';
import {Button, ButtonProps} from '../Button';
import {HStack} from '../Stack';
import {buttonStyle, fixedBottomCTAStyle} from './FixedBottomCTA.style';

export const FixedBottomCTA = ({children, ...buttonProps}: ButtonProps) => {
  const {theme} = useTheme();

  return (
    <HStack p="1.5rem 1.5rem 2rem" bg={theme.colors.background} css={fixedBottomCTAStyle}>
      <Button {...buttonProps} size="lg" css={buttonStyle}>
        {children}
      </Button>
    </HStack>
  );
};

export default FixedBottomCTA;

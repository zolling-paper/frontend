/** @jsxImportSource @emotion/react */
import { Button, ButtonProps } from "../Button";
import { HStack } from "../Stack"
import { buttonStyle, fixedBottomCTAStyle } from "./FixedBottomCTA.style";

export const FixedBottomCTA = ({children, ...buttonProps}: ButtonProps) => {
  return <HStack p="1rem 1rem 1.5rem 1rem" bg="white" css={fixedBottomCTAStyle}>
    <Button {...buttonProps} size="large" css={buttonStyle}>
      {children}
    </Button>
  </HStack>;
};

export default FixedBottomCTA;

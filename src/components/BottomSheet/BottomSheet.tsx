/** @jsxImportSource @emotion/react */
import { HStack } from "../Stack"
import { bottomSheetWrapperStyle } from "./BottomSheet.style";

interface BottomSheetProps {
  children: React.ReactNode;
}

export const BottomSheet = ({ children }: BottomSheetProps) => {
  return <HStack p="1rem 1rem 1.5rem 1rem" bg="white" css={bottomSheetWrapperStyle}>
    {children}
    </HStack>;
};

export default BottomSheet;

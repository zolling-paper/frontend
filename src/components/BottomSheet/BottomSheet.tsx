/** @jsxImportSource @emotion/react */
import {PropsWithChildren} from 'react';
import {HStack} from '../Stack';
import {bottomSheetWrapperStyle} from './BottomSheet.style';

interface BottomSheetProps extends PropsWithChildren {}

export const BottomSheet = ({children, ...props}: BottomSheetProps) => {
  return (
    <HStack
      p="1rem 1rem 1.5rem 1rem"
      bg="white"
      css={bottomSheetWrapperStyle}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default BottomSheet;

/** @jsxImportSource @emotion/react */
import React from 'react';

import Line from './Line';
import { VStack } from '../Stack';

Top.Line = Line;

export default function Top({children}: React.PropsWithChildren) {
  const childrenTexts: string[] = [];
  React.Children.forEach(children, child => {
    if (React.isValidElement(child) && child.type === Top.Line) {
      childrenTexts.push(child.props.text);
    }
  });

  return (
    <VStack
      aria-label={childrenTexts.join(' ')}
      tabIndex={0}
    >
      {children}
    </VStack>
  );
}

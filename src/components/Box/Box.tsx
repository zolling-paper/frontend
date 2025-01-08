/** @jsxImportSource @emotion/react */
import {forwardRef} from 'react';

import {boxStyle} from './Box.style';
import {BoxProps} from './Box.type';

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  {children, w = 'auto', h = 'auto', z, p, m, br, b, bg, fixed = false, center = false, ...props},
  ref,
) {
  return (
    <div ref={ref} css={boxStyle({w, h, z, p, m, br, b, bg, fixed, center})} {...props}>
      {children}
    </div>
  );
});

export default Box;

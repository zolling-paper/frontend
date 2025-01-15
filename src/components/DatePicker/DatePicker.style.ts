import { css } from "@emotion/react";

import { Perspective } from "./DatePicker.type";

export const backgroundStyle = css`
  background: linear-gradient(to bottom, 
    rgba(255,255,255,1) 0%,
    rgba(255,255,255,0) 25%,
    rgba(255,255,255,0) 75%,
    rgba(255,255,255,1) 100%
  );
  pointer-events: none;
`

export const scrollContainerStyle = css`
  width: calc(100% + 12px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: visible;
  position: relative;
  user-select: none;
  touch-action: pan-y;
  height: 90%;
  transform: translate3d(0, 0, 0);
  &[data-keen-slider-moves] * {
    pointer-events: none;
  }
`;

export const scrollerStyle = (perspective: Perspective) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  height: 16%;
  width: 100%;
  padding: 0 6px;
  ${perspective === 'right' && css`
    perspective-origin: calc(50% - 100px) 50%;
    transform: translateX(-10px);
  `}
  ${perspective === 'left' && css`
    perspective-origin: calc(50% + 100px) 50%;
    transform: translateX(10px);
  `}
`;

export const scrollerItemStyle = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;


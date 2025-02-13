/** @jsxImportSource @emotion/react */
import {TrackDetails, useKeenSlider} from 'keen-slider/react';
import {useEffect, useState} from 'react';

import {Text} from '../Text';
import {scrollContainerStyle, scrollerItemStyle, scrollerStyle} from './DateScrollPicker.style';
import {ScrollerProps} from './DateScrollPicker.type';

import {useTheme} from '@/theme/DesignProvider';

export const Scroller = ({
  options,
  initialIndex,
  onChange,
  loop = false,
  degree,
  perspective = 'center',
}: ScrollerProps) => {
  const {theme} = useTheme();
  const slidesPerView = loop ? 9 : 1;
  const dialDegree = degree ?? 360 / options.length;

  const [sliderState, setSliderState] = useState<TrackDetails | null>(null);
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      number: options.length,
      origin: loop ? 'center' : 'auto',
      perView: slidesPerView,
    },
    vertical: true,
    initial: initialIndex ?? 0,
    loop,
    dragSpeed: (value: number) => {
      const height = options.length;

      return value * (height / ((height / 2) * Math.tan(dialDegree * (Math.PI / 180))) / slidesPerView);
    },
    created: s => {
      options.length = s.size;
    },
    updated: s => {
      options.length = s.size;
    },
    detailsChanged: s => {
      setSliderState(s.track.details);
    },
    rubberband: !loop,
    mode: 'free-snap',
    slideChanged: slider => {
      const {abs, rel} = slider.track.details;
      if (Number.isNaN(abs)) {
        slider.destroy();
        return;
      }
      onChange(options[rel]!);
    },
  });

  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (slider.current != null) {
      setRadius(slider.current.size / 2);
    }
  }, [slider]);

  function getSlideValues() {
    if (!sliderState) {
      return [];
    }

    const offset = loop ? 1 / 2 - 1 / slidesPerView / 2 : 0;

    const values = options.map((option, index) => {
      const distance =
        sliderState.slides[index] != null ? (sliderState.slides[index]!.distance - offset) * slidesPerView : 0;
      /**
       * @Todari
       * const rotate = Math.abs(distance) > 360 / dialDegree / 2 ? 180 : distance * dialDegree * -1;
       * 으로 되어있을 땐, rotate가 방향에 따라 -180 ,180 두가지 값을 가질 수 있음
       * 이에 따라서, -180인 경우에 180으로 돌아가면서 앞면에서 보이지 않아야 하는 value가 보이게 됨
       * 결국 distance(방향)에 따라서, 180, -180 degree로 적용해 줌으로써 슬라이드 할 때 불필요한 값이 보이지 않도록 변경
       */
      const rotate =
        Math.abs(distance) > 360 / dialDegree / 2 ? (distance < 0 ? 180 : -180) : distance * dialDegree * -1;
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        color: rotate === 0 ? theme.colors.black : theme.colors.gray,
      };
      const value = option;

      return {value, style};
    });

    return values;
  }

  return (
    <div css={scrollContainerStyle} ref={sliderRef}>
      <div css={scrollerStyle(perspective)}>
        {getSlideValues().map(({value, style}) => (
          <Text key={value} style={style} size="subTitle" css={scrollerItemStyle}>
            {value}
          </Text>
        ))}
      </div>
    </div>
  );
};

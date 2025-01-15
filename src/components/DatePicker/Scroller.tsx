/** @jsxImportSource @emotion/react */
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

import { Text } from "../Text";
import { scrollContainerStyle, scrollerItemStyle, scrollerStyle } from "./DatePicker.style";
import { ScrollerProps } from "./DatePicker.type";

import { useTheme } from "@/theme/DesignProvider";


export const Scroller = ({ options, initialValue, onChange, loop = false, degree, perspective = 'center' }: ScrollerProps) => {
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
    initial: initialValue,
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
      const rotate = Math.abs(distance) > 360 / dialDegree / 2 ? 180 : distance * dialDegree * -1;
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
    <div
      css={scrollContainerStyle}
      ref={sliderRef}
    >
      <div
        css={scrollerStyle(perspective)}
      >
        {getSlideValues().map(({value, style}) => (
          <Text
            key={value}
            style={style}
            size="subTitle"
            css={scrollerItemStyle}
          >
            {value}
          </Text>
        ))}
      </div>
    </div>
  );
};

/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {SvgProps} from './Icon.type';
import {svgStyle, svgWrapperStyle} from './Svg.style';
import {useTheme} from '@theme/DesignProvider';

const Svg: React.FC<SvgProps> = ({children, color, size, width, height, direction, ...rest}) => {
  console.log('svg');
  const {theme} = useTheme();

  console.log('svg2', children);
  const xmlString = ReactDOMServer.renderToStaticMarkup(children);
  console.log('svg3', xmlString);

  const widthMatch = xmlString.match(/width="([^"]+)"/);
  const originWidth = widthMatch ? parseInt(widthMatch[1]) : 24;

  const heightMatch = xmlString.match(/height="([^"]+)"/);
  const originHeight = heightMatch ? parseInt(heightMatch[1]) : 24;

  const viewBox = `0 0 ${originWidth} ${originHeight}`;

  const fillMatch = xmlString.match(/fill="([^"]+)"/);
  const originFill = fillMatch ? fillMatch[1] : null;
  const fill = originFill !== 'none' ? (color ? theme.colors[color] : 'currentColor') : 'none';

  const childrenMatch = xmlString.match(/>(.+)</s);
  let childrenString = childrenMatch ? childrenMatch[1] : '';

  childrenString = childrenString.replace(
    /stroke="[^"]+"/g,
    `stroke="${color ? theme.colors[color] : 'currentColor'}"`,
  );
  childrenString = childrenString.replace(/fill="[^"]+"/g, `fill="${color ? theme.colors[color] : 'currentColor'}"`);

  const getRotation = () => {
    switch (direction) {
      case 'up':
        return '180deg';
      case 'left':
        return '90deg';
      case 'right':
        return '270deg';
      default:
        return '0deg';
    }
  };

  return (
    <div css={svgWrapperStyle(width, height, size)}>
      <svg
        css={svgStyle}
        fill={fill}
        color={color ? theme.colors[color] : 'currentColor'}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        style={{transform: `rotate(${getRotation()})`}}
        dangerouslySetInnerHTML={{__html: childrenString}}
        {...rest}
      />
    </div>
  );
};

export default Svg;

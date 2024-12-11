import React from 'react';
import type {Preview} from '@storybook/react';
import {Global, css} from '@emotion/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      return (
        <div>
          <Global
            styles={css`
              @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
              body {
                font-family: 'Pretendard', sans-serif;
              }
            `}
          />
            <Story />
        </div>
      );
    },
  ],
};

export default preview;

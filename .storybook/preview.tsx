import {Global, css} from '@emotion/react';
import React from 'react';

import {DesignProvider} from '../src/theme/DesignProvider';

import type {Preview} from '@storybook/react';
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
          <DesignProvider>  
            <Global
              styles={css`
              @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
              body {
                font-family: 'Pretendard', sans-serif;
              }
            `}
            />
            <Story />
          </DesignProvider>
        </div>
      );
    },
  ],
};

export default preview;

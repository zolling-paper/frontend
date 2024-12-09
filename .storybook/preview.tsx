import React from 'react';
import type {Preview} from '@storybook/react';
import {Global, css} from '@emotion/react';
import {DesignProvider} from '../src/theme/DesignProvider';

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
          <DesignProvider>
            <Story />
          </DesignProvider>
        </div>
      );
    },
  ],
};

export default preview;

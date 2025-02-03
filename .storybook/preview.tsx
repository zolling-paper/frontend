import {Global} from '@emotion/react';
import React from 'react';

import {DesignProvider} from '../src/theme/DesignProvider';
import {GlobalStyle} from '../src/theme/GlobalStyle';
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
            <Global styles={GlobalStyle} />
            <Story />
          </DesignProvider>
        </div>
      );
    },
  ],
};

export default preview;

import { Button } from '../Button';
import { DatePicker } from './DatePicker';
import { Overlay } from '../Overlay/OverlayContext';
import { useOverlay } from '../Overlay/useOverlay';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/DatePicker',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <Overlay.Provider>
          <Story />
          <Overlay.Consumer />
        </Overlay.Provider>
      </>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoComponent = () => {
  const { open, close } = useOverlay();

  const handleOpenDatePicker = () => {
    const key = 'date-picker';
    open(key,
      <DatePicker onChange={(date) => {
        console.log(date);
      }} />
    );
  };

  return (
    <Button onClick={handleOpenDatePicker}>
      날짜 선택하기
    </Button>
  );
};

export const Default: Story = {
  render: () => <DemoComponent />
};

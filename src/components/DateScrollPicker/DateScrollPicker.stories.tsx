import {Button} from '../Button';
import {DateScrollPicker} from './DateScrollPicker';
import {Overlay} from '../Overlay/OverlayContext';
import {useOverlay} from '../Overlay/useOverlay';

import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'Components/DateScrollPicker',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
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
  const {open} = useOverlay();

  const handleOpenDateScrollPicker = () => {
    const key = 'date-picker';
    open(
      key,
      <DateScrollPicker
        onChange={date => {
          console.log(date);
        }}
      />,
    );
  };

  return <Button onClick={handleOpenDateScrollPicker}>날짜 선택하기</Button>;
};

export const Default: Story = {
  render: () => <DemoComponent />,
};

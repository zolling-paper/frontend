import { Overlay } from './OverlayContext';
import { useOverlay } from './useOverlay';
import { Button } from '../Button';
import { Container } from '../Container/Container';
import { VStack } from '../Stack';
import { HStack } from '../Stack/HStack';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Overlay',
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

  const handleOpenOverlay = () => {
    const key = 'demo-overlay';
    open(key,
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container key={key} maxW={240} p={16} br={8} bg="white">
          <VStack gap={48} align="center">
            <span>오버레이</span>
            <Button onClick={() => close(key)}>닫기</Button>
          </VStack>
        </Container>
      </div>
    );
  };

  return (
    <Button onClick={handleOpenOverlay}>
      오버레이 열기
    </Button>
  );
};

export const Default: Story = {
  render: () => <DemoComponent />
};

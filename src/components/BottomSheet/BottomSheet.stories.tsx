import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from '../Overlay/OverlayContext';
import { Container } from '../Container/Container';
import { VStack } from '../Stack';
import { Button } from '../Button';
import { useOverlay } from '../Overlay/useOverlay';
import { BottomSheet } from './BottomSheet';

const meta = {
  title: 'Components/BottomSheet',
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

  const handleOpenBottomSheet = () => {
    const key = 'bottom-sheet';
    open(key,
      <BottomSheet>
        <Container maxW={240} p={16} br={8} bg="white">
          <VStack gap={48} align="center">
            <span>바텀시트</span>
            <Button onClick={() => close(key)}>닫기</Button>
          </VStack>
        </Container>
      </BottomSheet>
    );
  };

  return (
    <Button onClick={handleOpenBottomSheet}>
      바텀시트 열기
    </Button>
  );
};

export const Default: Story = {
  render: () => <DemoComponent />
};

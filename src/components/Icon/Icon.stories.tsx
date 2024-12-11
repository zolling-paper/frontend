import type {Meta, StoryObj} from '@storybook/react';

import Icon, { ICON } from '@components/Icon/Icon';
import { COLORS } from '@/token/colors';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconType: {
      description: '아이콘의 종류를 설정합니다',
      control: {type: 'select'},
      options: Object.keys(ICON),
    },
    iconColor: {
      description: '아이콘의 색상을 설정합니다',
      control: {type: 'select'},
      options: Object.keys(COLORS),
    }
  },
  args: {
    iconType: 'inputDelete',
    iconColor: 'gray',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDelete: Story = {
  args: {
    iconType: 'inputDelete',
    iconColor: 'gray',
  },
};

export const Primary: Story = {
  args: {
    iconType: 'inputDelete',
    iconColor: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    iconType: 'inputDelete', 
    iconColor: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    iconType: 'inputDelete',
    iconColor: 'tertiary',
  },
};

export const OnError: Story = {
  args: {
    iconType: 'inputDelete',
    iconColor: 'error', 
  },
};

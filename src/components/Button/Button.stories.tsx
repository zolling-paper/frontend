import type {Meta, StoryObj} from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variants: {
      description: '버튼의 스타일을 설정합니다',
      control: {type: 'select'},
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
    size: {
      description: '버튼의 크기를 설정합니다',
      control: {type: 'select'}, 
      options: ['small', 'medium', 'semiLarge', 'large'],
    },
    disabled: {
      description: '버튼의 비활성화 여부를 설정합니다',
      control: {type: 'boolean'},
    },
    children: {
      description: '버튼의 내용을 설정합니다',
      control: {type: 'text'},
    }
  },
  args: {
    variants: 'primary',
    size: 'medium', 
    disabled: false,
    children: '버튼',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variants: 'primary',
    children: '기본 버튼',
  },
};

export const Secondary: Story = {
  args: {
    variants: 'secondary',
    children: '보조 버튼',
  },
};

export const Tertiary: Story = {
  args: {
    variants: 'tertiary', 
    children: '세 번째 버튼',
  },
};

export const Destructive: Story = {
  args: {
    variants: 'destructive',
    children: '삭제 버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '작은 버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: '중간 버튼',
  },
};

export const SemiLarge: Story = {
  args: {
    size: 'semiLarge',
    children: '약간 큰 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: '큰 버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화 버튼',
  },
};

/** @jsxImportSource @emotion/react */
import {Button} from './Button';

import type {Meta, StoryObj} from '@storybook/react';

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
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      description: '버튼의 크기를 설정합니다',
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
    },
    display: {
      description: '버튼의 레이아웃을 설정합니다',
      control: {type: 'select'},
      options: ['block', 'full'],
    },
    disabled: {
      description: '버튼의 비활성화 여부를 설정합니다',
      control: {type: 'boolean'},
    },
    children: {
      description: '버튼의 내용을 설정합니다',
      control: {type: 'text'},
    },
  },
  args: {
    variants: 'primary',
    size: 'md',
    display: 'block',
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

export const Ghost: Story = {
  args: {
    variants: 'ghost',
    children: '세 번째 버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '작은 버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: '중간 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '큰 버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화 버튼',
  },
};

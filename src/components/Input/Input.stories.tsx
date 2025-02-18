import {Input} from '@components/Input';

import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelText: {
      description: '입력 필드의 라벨을 설정합니다',
      control: {type: 'text'},
    },
    errorText: {
      description: '에러 메시지를 설정합니다',
      control: {type: 'text'},
    },
    placeholder: {
      description: '입력 필드의 플레이스홀더를 설정합니다',
      control: {type: 'text'},
    },
    hasError: {
      description: '에러 상태를 설정합니다',
      control: {type: 'boolean'},
    },
    autoFocus: {
      description: '자동 포커스 여부를 설정합니다',
      control: {type: 'boolean'},
    },
  },
  args: {
    labelText: '라벨',
    placeholder: '내용을 입력해주세요',
    autoFocus: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: '기본 입력',
    placeholder: '내용을 입력해주세요',
  },
};

export const WithError: Story = {
  args: {
    labelText: '에러 상태',
    errorText: '에러가 발생했습니다',
    hasError: true,
  },
};

export const WithDelete: Story = {
  args: {
    labelText: '삭제 버튼',
    onDelete: () => {},
  },
};

export const AutoFocus: Story = {
  args: {
    labelText: '자동 포커스',
    autoFocus: true,
  },
};

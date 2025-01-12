import TYPOGRAPHY from '@token/typography';

import {Text} from './Text';

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: '텍스트의 크기를 설정합니다',
      control: {type: 'select'},
      options: Object.keys(TYPOGRAPHY),
    },
    children: {
      description: '텍스트의 내용을 설정합니다',
      control: {type: 'text'},
    }
  },
  args: {
    size: 'body',
    children: '텍스트',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Head: Story = {
  args: {
    size: 'head',
    children: '헤드 텍스트',
  },
};

export const Title: Story = {
  args: {
    size: 'title',
    children: '타이틀 텍스트',
  },
};

export const SubTitle: Story = {
  args: {
    size: 'subTitle',
    children: '서브타이틀 텍스트',
  },
};

export const Body: Story = {
  args: {
    size: 'body',
    children: '본문 텍스트',
  },
};

export const BodyBold: Story = {
  args: {
    size: 'bodyBold',
    children: '본문 볼드 텍스트',
  },
};

export const SmallBody: Story = {
  args: {
    size: 'smallBody',
    children: '작은 본문 텍스트',
  },
};

export const SmallBodyBold: Story = {
  args: {
    size: 'smallBodyBold', 
    children: '작은 본문 볼드 텍스트',
  },
};

export const Caption: Story = {
  args: {
    size: 'caption',
    children: '캡션 텍스트',
  },
};

export const CaptionBold: Story = {
  args: {
    size: 'captionBold',
    children: '캡션 볼드 텍스트',
  },
};

export const Tiny: Story = {
  args: {
    size: 'tiny',
    children: '타이니 텍스트',
  },
};

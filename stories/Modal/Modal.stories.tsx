import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <div>Modal Content</div>,
    title: 'Modal Title',
  },
};

export const OnlyTitle: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Modal Title',
  },
};

export const WithContent: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <div>Modal Content</div>,
    title: 'Modal Title',
  },
};

export const WithNoContent: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Modal Title',
  },
};


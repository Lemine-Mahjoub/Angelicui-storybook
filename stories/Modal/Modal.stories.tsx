import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal, useModal } from './Modal';
import { ModalExit } from './ModalExit';
import { ModalContent } from './ModalContent';
import { ModalAction } from './ModalAction';

const meta = {
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;




const DefaultChildren = () => {
    const { isOpen, setIsOpen } = useModal();
    return (
        <>
            <ModalExit.Icon onClose={() => {setIsOpen(false)}}/>
            <ModalContent>
                <h1>Modal Title</h1>
            </ModalContent>
            <ModalAction.Delete onCancel={() => {setIsOpen(false)}} onDelete={() => {}}/>
        </>
    )
}


export const Default: Story = {
  args: {
    isOpen: true,
    children: <DefaultChildren />,
  },
};


import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './NavBar';
import { NavBarDefault } from './NavBarDefault';
import { NavBarEdu } from './NavBarEdu';
const meta = {
    title: 'NavBar/NavBar',
    component: Navbar,

} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <NavBarDefault />,
    },
};

export const Edu: Story = {
    args: {
        children: <NavBarEdu />,
    },
};
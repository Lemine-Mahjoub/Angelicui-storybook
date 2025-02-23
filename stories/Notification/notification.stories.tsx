import React from 'react';
import { SucessNotification } from './SucessNotification';
import { Meta } from "@storybook/blocks";

export default {
  component: SucessNotification,
  title: 'Notification/Sucess',
};

export const Sucess = () => {
  return (
    <SucessNotification>
        <p>Sucess</p>
    </SucessNotification>
  );
};
import React from 'react';
import { NotificationMessage } from './NotificationMessage';
import { Notification } from './Notification';

export function SucessNotification({children}: {children: React.ReactNode}) {
  return (
    <Notification>
      <NotificationMessage>
        <div className="bg-green-500 opacity-50 px-6 py-2 rounded-lg">
            <p>Sucess</p>
        </div>
      </NotificationMessage>
    </Notification>
  );
};

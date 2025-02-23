import React from 'react';

export function Notification({children}: {children: React.ReactNode}) {
  return (
    <div className="fixed bottom-2 right-2 z-50 rounded-lg bg-white shadow-lg">
      {children}
    </div>
  );
};


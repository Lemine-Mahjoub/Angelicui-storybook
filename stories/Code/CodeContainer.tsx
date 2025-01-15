import React from 'react';

interface CodeContainerContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}


interface CodeContainerProps {
    children: React.ReactNode;
}

export function CodeContainer({ children }: CodeContainerProps) {

  return (
    <div className="p-2 bg-gray-800 rounded-md text-white font-mono overflow-auto max-h-[90vh] max-w-[90vw]">
        {children}
    </div>
  );
}

import React, { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
}

export function Modal({ isOpen, children }: ModalProps) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  if (!isOpenModal) {
    return null;
  }

  return (
    <ModalContext.Provider
        value={{
            isOpen: isOpenModal,
            setIsOpen: setIsOpenModal,
        }}
    >
        {createPortal(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="">
                    {children}
            </div>
        </div>,
        document.body
    )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

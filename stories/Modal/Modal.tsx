import React from 'react';
import PropTypes from 'prop-types';


const styles = {
  overlay: 'fixed inset-0 bg-black bg-opacity-50',
  modal: 'fixed inset-0 flex items-center justify-center',
  header: 'flex justify-between items-center',
  closeButton: 'text-2xl font-bold',
  content: 'p-4',
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay}/>
      <div className={styles.modal}>
        {title && <div className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
};


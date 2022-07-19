// import { useCallback, useEffect } from 'react';
import './style.css';
import React from 'react';
type ModalTypes = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: Function;
};

const Modal = ({ children, isOpen, onClose }: ModalTypes) => {
  const handleOverlayCheck = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    if (!(target as HTMLElement).closest('section')) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleOverlayCheck}>
          {children}
        </div>
      )}
    </>
  );
};

export { Modal };

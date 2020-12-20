import React from 'react';

interface ModalProps {
    handleClose: () => void;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ handleClose, children }) => {
    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleClose}
            role="button"
            onKeyDown={handleClose}
            tabIndex={0}
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">{children}</div>
        </div>
    );
};

export default Modal;

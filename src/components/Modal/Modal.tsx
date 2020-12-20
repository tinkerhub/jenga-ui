import React from 'react';

interface ModalProps {
    handleClose: () => void;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    return (
        <>
            {isOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-100"
                        onClick={handleClose}
                        role="button"
                        onKeyDown={handleClose}
                        tabIndex={0}
                    >
                        <div className="relative w-full flex justify-center items-center m-2">
                            {children}
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            ) : null}
        </>
    );
};

export default Modal;

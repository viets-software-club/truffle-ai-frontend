import React, { ReactNode } from 'react';

interface ModalProps
{
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) =>
{
    if (!isOpen)
    {
        return null;
    }

    return (
        <>
            {/* Overlay */}
            <div className='fixed z-40 inset-0 bg-black bg-opacity-10' onClick={onClose}></div>

            {/* Modal */}
            <div className='m-0 z-50'>
                <div className='bg-bg-secondary'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;

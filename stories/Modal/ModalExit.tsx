import { button } from 'framer-motion/client';
import React from 'react';

interface ModalExitProps {
    onClose: () => void;
}

export function ModalExit({ onClose }: ModalExitProps) {
    return (
        <button onClick={onClose}>Close</button>
    );
}

function ModalExitIcon({ onClose }: ModalExitProps) {
    return (
        <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
            </svg>
        </button>
    );
}

// Attach subcomponents
ModalExit.Icon = ModalExitIcon;


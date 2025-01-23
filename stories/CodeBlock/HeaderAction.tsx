import React from 'react';
import { useCodeBlock } from './CodeBlock';

interface CodeBlockActionButtonProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export function ActionButton({ color, onClick, children }: CodeBlockActionButtonProps) {
    return (
        <button style={{ backgroundColor: color }} className={`rounded-full w-4 h-4`} onClick={onClick}>
            {children}
        </button>
    )
}

export function HeaderAction({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2">
            {children}
        </div>
    )
}


export function FullscreenButton({ children }: {children?: React.ReactNode}) {
    const { isFullscreen, setIsFullscreen } = useCodeBlock();


    function handleFullscreen() {
        setIsFullscreen(!isFullscreen);
    }

    return (
        <ActionButton color="#44C93F" onClick={handleFullscreen}>
            {children}
        </ActionButton>
    )
}

export function MinimizeButton({ children }: { children?: React.ReactNode }) {
    const { isMinimise, setIsMinimise } = useCodeBlock();

    function handleMinimize() {
        setIsMinimise(!isMinimise);
    }

    return (
        <ActionButton color="#FBBD2E" onClick={handleMinimize}>
            {children}
        </ActionButton>
    )
}

export function CloseButton({ children }: { children?: React.ReactNode }) {
    const { setIsClose } = useCodeBlock();

    function handleClose() {
        setIsClose(true);
    }

    return (
        <ActionButton color="#F65F56" onClick={handleClose}>
            {children}
        </ActionButton>
    )
}
import React, { ReactNode } from 'react';
import { useCodeBlock } from './CodeBlock';

export function CodeBlockHeaderActions({ children } : { children: ReactNode | ReactNode[]}) {
    return (
        <div className="flex gap-2">
            {children}
        </div>
    )
}



export function FullscreenButton() {
    const { isFullscreen, setIsFullscreen } = useCodeBlock()

    return (
        <CodeBlockActionButton color="#44C93F" onClick={() => setIsFullscreen(!isFullscreen)} />
    )
}

export function MinimizeButton() {
    const { isMinimise, setIsMinimise } = useCodeBlock()

    return (
        <CodeBlockActionButton color="#FBBD2E" onClick={() => setIsMinimise(!isMinimise)} />
    )
}

export function CloseButton() {
    const { isClose, setIsClose } = useCodeBlock()

    return (
        <CodeBlockActionButton color="#F65F56" onClick={() => setIsClose(!isClose)} />
    )
}

interface CodeBlockActionButtonProps {
    color: string;
    onClick: () => void;
}

function CodeBlockActionButton({ color, onClick }: CodeBlockActionButtonProps) {
    return (
        <button style={{ backgroundColor: color }} className={`rounded-full w-4 h-4`} onClick={onClick}/>
    )
}
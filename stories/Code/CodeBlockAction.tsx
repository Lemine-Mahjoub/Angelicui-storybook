import React from 'react';
import { useCodeBlock } from './CodeBlock';

export function CodeBlockActions() {

    const {
        allowFullScreen,
        allowMinimize,
        allowClose,
        isFullscreen,
        isMinimized,
        setIsFullscreen,
        setIsMinimized,
        setIsClosed
    } = useCodeBlock();

    function handleFullscreen() {
        setIsFullscreen(!isFullscreen);
    }

    function handleMinimize() {
        setIsMinimized(!isMinimized);
    }

    function handleClose() {
        setIsClosed(true);
    }

    return (
        <div className="flex gap-2">
            <CloseButton allowClose={allowClose} onClose={handleClose} />
            <MinimizeButton allowMinimize={allowMinimize} onMinimize={handleMinimize} />
            <FullscreenButton allowFullscreen={allowFullScreen} onFullscreen={handleFullscreen} />
        </div>
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

interface FullscreenButtonProps {
    allowFullscreen: boolean;
    onFullscreen: () => void;
}

export function FullscreenButton({ allowFullscreen, onFullscreen }: FullscreenButtonProps) {

    if (!allowFullscreen) {
        return null;
    }

    return (
        <CodeBlockActionButton color="#44C93F" onClick={onFullscreen} />
    )
}

interface MinimizeButtonProps {
    allowMinimize: boolean;
    onMinimize: () => void;
}

export function MinimizeButton({ allowMinimize, onMinimize }: MinimizeButtonProps) {

    if (!allowMinimize) {
        return null;
    }

    return (
        <CodeBlockActionButton color="#FBBD2E" onClick={onMinimize} />
    )
}

interface CloseButtonProps {
    allowClose: boolean;
    onClose: () => void;
}

export function CloseButton({ allowClose, onClose }: CloseButtonProps) {

    if (!allowClose) {
        return null;
    }

    return (
        <CodeBlockActionButton color="#F65F56" onClick={onClose} />
    )
}
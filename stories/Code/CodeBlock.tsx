import React, { createContext, useContext, useState } from 'react';
import { CodeBlockContent } from './CodeBlockContent';
interface CodeBlockProps {
    allowFullScreen?: boolean;
    allowMinimize?: boolean;
    allowClose?: boolean;
    content: string[];
    language: string;
    hasLineNumbers?: boolean;
}

interface CodeBlockContextType {
    isFullscreen: boolean;
    setIsFullscreen: (value: boolean) => void;
    isMinimized: boolean;
    setIsMinimized: (value: boolean) => void;
    isClosed: boolean;
    setIsClosed: (value: boolean) => void;
    content: string[];
    language: string;
    hasLineNumbers: boolean;
    allowFullScreen: boolean;
    allowMinimize: boolean;
    allowClose: boolean;
}

const CodeBlockContext = createContext<CodeBlockContextType | undefined>(undefined);

export function useCodeBlock() {
    const context = useContext(CodeBlockContext);
    if (!context) {
        throw new Error('useCodeBlock must be used within a CodeBlockProvider');
    }
    return context;
}

export function CodeBlock({
    allowFullScreen = false,
    allowMinimize = false,
    allowClose = false,
    content,
    language,
    hasLineNumbers = false
}: CodeBlockProps) {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const contextValue: CodeBlockContextType = {
        isFullscreen,
        setIsFullscreen,
        isMinimized,
        setIsMinimized,
        isClosed,
        setIsClosed,
        content,
        language,
        hasLineNumbers,
        allowFullScreen,
        allowMinimize,
        allowClose,
    };

    if (isClosed) {
        return null;
    }

    if (isFullscreen) {
        return (
            <CodeBlockContext.Provider value={contextValue}>
                <CodeBlockContent.Fullscreen />
            </CodeBlockContext.Provider>
        )
    }


    return (
        <CodeBlockContext.Provider value={contextValue}>
            <CodeBlockContent />
        </CodeBlockContext.Provider>
    )
}
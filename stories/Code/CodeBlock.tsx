import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CodeBlockContent } from './CodeBlockContent';
import { CodeBlockCodeContent } from './CodeBlockCodeContent';
import { CodeBlockHeader } from './CodeBlockHeader';
import { CloseButton, CodeBlockHeaderActions, FullscreenButton, MinimizeButton } from './CodeBlockHeaderAction';
import { CodeBlockLanguage } from './CodeBlockLanguage';
import { CodeBlockCode } from './CodeBlockCode';
import { CodeBlockLinesNumber } from './CodeBlockLinesNumber';

interface CodeBlockContextType {
    isFullscreen: boolean,
    setIsFullscreen: (isFullscreen: boolean) => void,
    isMinimise: boolean,
    setIsMinimise: (isMinimise: boolean) => void,
    isClose: boolean,
    setIsClose: (isClose: boolean) => void,
    code: string[],
    setCode: (code: string[]) => void,
    language: string,
    setLanguage: (language: string) => void,
}

export const CodeBlockContext = createContext<CodeBlockContextType>({
    isFullscreen: false,
    setIsFullscreen: () => {},
    isMinimise: false,
    setIsMinimise: () => {},
    isClose: false,
    setIsClose: () => {},
    code: [],
    setCode: () => {},
    language: "plaintext",
    setLanguage: () => {},
});

interface CodeBlockLanguageType {
    language: string,
    setLanguage: (language: string) => void,
}

export function useCodeBlock() {
    const context = useContext(CodeBlockContext);
    if (context === undefined) {
        throw new Error('useCodeBlock must be used within a CodeBlockProvider');
    }
    return context;
}
export function CodeBlock({ children }: { children: React.ReactNode }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMinimise, setIsMinimise] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [language, setLanguage] = useState("plaintext");
    const [code, setCode] = useState<string[]>([]);

    const contextValue = {
        isFullscreen,
        setIsFullscreen,
        isMinimise,
        setIsMinimise,
        isClose,
        setIsClose,
        code,
        setCode,
        language,
        setLanguage
    }

    console.count('CodeBlock.tsx rendered');

    let renderedChildren = children;

    if (isClose){
        return null;
    }

    if (isFullscreen) {
        renderedChildren = (
        <Modal isOpen={isFullscreen}>
            {renderedChildren}
        </Modal>)
    }

    return (
        <CodeBlockContext.Provider value={contextValue}>
            {renderedChildren}
        </CodeBlockContext.Provider>
    );
}



// Code Block Header :
CodeBlock.Header = CodeBlockHeader;

// Code Block Header Buttons :
CodeBlock.HeaderActions = CodeBlockHeaderActions;
CodeBlock.BtnMinimize = MinimizeButton;
CodeBlock.BtnFullscreen = FullscreenButton;
CodeBlock.BtnClose = CloseButton;

// Code Block Language
CodeBlock.Language = CodeBlockLanguage;

// Code Block Content
CodeBlock.Content = CodeBlockContent;
CodeBlock.CodeContent = CodeBlockCodeContent;
CodeBlock.LinesNumber = CodeBlockLinesNumber;
CodeBlock.Code = CodeBlockCode;





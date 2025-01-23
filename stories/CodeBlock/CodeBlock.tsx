import React, { useState, useMemo, createContext, useContext } from 'react';
import { Modal } from '../Modal/Modal';
import { Header } from './Header';
import { Content } from './Content';
import { MinimizeButton, FullscreenButton, CloseButton, HeaderAction } from './HeaderAction';
import { Language } from './Language';
import { HighlightCode } from './Code';
import { LineNumbers } from './LineNumbers';
import { CodeContent } from './CodeContent';
import { CopyButton } from './Copy';

interface CodeBlockContextType {
    isFullscreen: boolean;
    setIsFullscreen: (value: boolean) => void;
    isMinimise: boolean;
    setIsMinimise: (value: boolean) => void;
    isClose: boolean;
    setIsClose: (value: boolean) => void;
    language: string;
    setLanguage: (value: string) => void;
    code: string[];
    setCode: (value: string[]) => void;
    tab: number;
    setTab: (value: number) => void;
}

const CodeBlockContext = createContext<CodeBlockContextType | undefined>(undefined);

export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMinimise, setIsMinimise] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [language, setLanguage] = useState("plaintext");
    const [code, setCode] = useState<string[]>([]);
    const [tab, setTab] = useState<number>(0);

    const value = useMemo(() => ({
        isFullscreen,
        setIsFullscreen,
        isMinimise,
        setIsMinimise,
        isClose,
        setIsClose,
        language,
        setLanguage,
        code,
        setCode,
        tab,
        setTab,
    }), [isFullscreen, isMinimise, isClose, language, code, tab]);

    return (
        <CodeBlockContext.Provider value={value}>
            <CodeBlockContainer>
                {children}
            </CodeBlockContainer>
        </CodeBlockContext.Provider>
    );
};

export const useCodeBlock = () => {
    const context = useContext(CodeBlockContext);
    if (context === undefined) {
        throw new Error('useCodeBlock must be used within a CodeBlockProvider');
    }
    return context;
};




function CodeBlockContainer({ children }: { children: React.ReactNode }) {
    const { isFullscreen, isClose } = useCodeBlock();

    if (isFullscreen) {
        return <Modal isOpen={isFullscreen}>
            <div className="p-10 rounded-md bg-[#1e1e1e]">{children}</div>
        </Modal>;
    }

    if (isClose) {
        return null;
    }

    return <div className="w-full h-full bg-[#1e1e1e] p-4">{children}</div>;
}



// CodeBlocks Tabs
// TODO: ADD Tabs Component

// CodeBlocks Header
CodeBlock.Header = Header;
CodeBlock.HeaderAction = HeaderAction;
// CodeBlocks HeaderAction
CodeBlock.MinimizeBtn = MinimizeButton;
CodeBlock.FullscreenBtn = FullscreenButton;
CodeBlock.CloseBtn = CloseButton;



// CodeBlocks Content
CodeBlock.Content = Content;

// CodeBlocks CodeContent
CodeBlock.HighlightCode = HighlightCode;
CodeBlock.Language = Language;
CodeBlock.LineNumbers = LineNumbers;
CodeBlock.CodeContent = CodeContent;

CodeBlock.CopyBtn = CopyButton;


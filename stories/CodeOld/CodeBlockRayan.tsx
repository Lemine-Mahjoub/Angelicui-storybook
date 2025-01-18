import { CodeBlock } from './CodeBlock';
import React, { createContext, useContext } from 'react';
import { HIGHLIGHTJS_LANGUAGE, DEFAULT_LANGUAGE } from '../constant';
import { div } from 'framer-motion/client';

interface CodeBlockRayanProps {
    allowFullScreen?: boolean;
    allowMinimize?: boolean;
    allowClose?: boolean;
    allowCopy?: boolean;
    content: string;
    getLanguageCallback?: (code: string) => string;
    splittingContentCallback?: (code: string) => string[];
    hasLineNumbers?: boolean;
}

const CodeBlockContext = createContext<string[]>([]);

export function CodeBlockRayan({ content, hasLineNumbers, allowFullScreen, allowCopy, allowMinimize, allowClose, getLanguageCallback, splittingContentCallback }: CodeBlockRayanProps) {
    const { parsedLangage, parsedCode } = parseCode(content, getLanguageCallback, splittingContentCallback);

    return (
        <CodeBlockContext.Provider value={parsedCode}>
            <div className='bg-[#151618]'>
                <CodeBlock
                    content={parsedCode}
                    language={parsedLangage}
                    hasLineNumbers={hasLineNumbers}
                    allowFullScreen={allowFullScreen}
                    allowMinimize={allowMinimize}
                    allowClose={allowClose}
                />
                {allowCopy && <CopyButton />}
            </div>
        </CodeBlockContext.Provider>
    )
}

function CopyButton() {
    const parsedCode = useContext(CodeBlockContext);

    const handleCopy = () => {
        navigator.clipboard.writeText(parsedCode.join('\n'));
    };

    return (
        <div className='flex justify-end p-4'>
            <button
                className='bg-gray-500 text-white px-4 py-3 rounded-md'
                onClick={handleCopy}
            >
                Copier
            </button>
        </div>
    )
}

function parseCode(content: string, getLanguage?: (code: string) => string, splitting?: (code: string) => string[]) {
    let parsedLangage: string = "plaintext";
    let parsedCode: string[] = [];

    if (!getLanguage) {
        parsedLangage = defaultGetLanguage(content);
    }
    else {
        parsedLangage = getLanguage(content);
    }

    if (!splitting) {
        parsedCode = defaultSplitting(content);
    }
    else {
        parsedCode = splitting(content);
    }

    return { parsedLangage, parsedCode };
}


function defaultGetLanguage(code: string) {
    const firstLine = code.split('\n')[0];
    const removeAltTag = firstLine.replace(/<[^>]*>?/gm, '').replace(/`+/g, '');
    const firstWord = removeAltTag.split(' ')[0];
    if (HIGHLIGHTJS_LANGUAGE.includes(firstWord)) {
        return firstWord;
    }

    return DEFAULT_LANGUAGE;
}

function defaultSplitting(content: string): string[] {
    const codeRemovedFirstLine = content.split('\n').slice(1).join('\n');
    return codeRemovedFirstLine.split('\n');
}
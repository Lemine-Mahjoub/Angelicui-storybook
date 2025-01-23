import React, { ReactNode } from 'react';
import hljs from 'highlight.js';
import './codehighlight.css';
import { useCodeBlock } from './CodeBlock';


export function HighlightCode({children}: {children: ReactNode | string[]}) {

    const { code, setCode, language } = useCodeBlock();


    if (Array.isArray(children) && typeof children[0] === 'string') {
        const highlightedCode = highlightCode(children, language);
        setCode(children);
        return (
            <pre className="code-block w-full overflow-x-auto text-[14px]">
                <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
        );
    }

    return (
        <pre className="code-block w-full overflow-x-auto">
            {children}
        </pre>
    );
};

function highlightCode(code: string[], language: string) {
  const highlightedCode = hljs.highlight(code.join('\n'), { language }).value;
  return highlightedCode;
}


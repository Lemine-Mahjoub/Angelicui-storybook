import React from 'react';
import hljs from 'highlight.js';
import { useCodeBlock, useLanguageContext } from "./CodeBlock";
import './codehighlight.css';

export function CodeBlockCode({ children }: {children: string[]}) {
    const { language } = useLanguageContext();
    const { setCode } = useCodeBlock();

    const highlightedCode = highlightCode(children, language)


    return (
        <pre className="code-block w-full overflow-x-auto">
            <code
                className={`language-${language} `}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
        </pre>
    )
}

function highlightCode(code: string[], language: string) {
    const highlightedCode = hljs.highlight(code.join('\n'), { language }).value;
    return highlightedCode;
}
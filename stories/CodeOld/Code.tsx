import React from 'react';
import hljs from 'highlight.js';
import './codehighlight.css';
import { HIGHLIGHTJS_LANGUAGE, DEFAULT_LANGUAGE } from '../constant';
import { useCodeBlock } from './CodeBlockOld';

interface CodeBlockProps {
  code: string[];
  language?: string;
  hasLineNumbers?: boolean;
}

export function Code({
  code,
  language = 'plaintext',
  hasLineNumbers = false
}: CodeBlockProps) {

  if (!code) {
    return null;
  }

  if (typeof code === 'string') {
    code = [code];
  }

  if (!HIGHLIGHTJS_LANGUAGE.includes(language)) {
    console.warn(`Language ${language} is not supported`);
    language = DEFAULT_LANGUAGE;
  }

  const highlightedCode = highlightCode(code, language, hasLineNumbers);

  return (
    <pre className="code-block w-full overflow-x-auto">
      <code
        className={`language-${language} `}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
}

function highlightCode(code: string[], language: string, hasLineNumbers: boolean) {
  const highlightedCode = hljs.highlight(code.join('\n'), { language }).value;
  if (hasLineNumbers) {
    return highlightedCode
      .split('\n')
      .map((line, index) => `<span><span class="line-number">${index + 1}</span> ${line}</span>`)
      .join('\n');
  }
  return highlightedCode;
}

function CodeForCodeBlock() {
    const { content, language, hasLineNumbers, isMinimized } = useCodeBlock();

    if (isMinimized) {
        return null;
    }

    return <Code
        code={content}
        language={language}
        hasLineNumbers={hasLineNumbers}
    />
}

Code.CodeBlock = CodeForCodeBlock;
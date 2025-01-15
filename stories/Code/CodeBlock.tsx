import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { HIGHLIGHTJS_LANGUAGE, DEFAULT_LANGUAGE } from '../constant';

interface CodeBlockProps {
  code: string[];
  language?: string;
  hasLineNumbers?: boolean;
}



export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'plaintext', hasLineNumbers = false }) => {

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
    <pre className="code-block">
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

export default CodeBlock;



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

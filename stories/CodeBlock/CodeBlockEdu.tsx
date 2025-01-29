import { CodeBlock, useCodeBlock } from "./CodeBlock";
import React from "react";
import { marked } from 'marked';
import hljs from "highlight.js";
import "../CodeBlock/codehighlight.css";

interface CodeBlockMDProps {
    code: string[];
}

export function CodeBlockEdu({code}: CodeBlockMDProps) {
    const {language, setLanguage} = useCodeBlock();
    return (
        <CodeBlock>
            <CodeBlock.Header>
                <CodeBlock.HeaderAction>
                    <CodeBlock.MinimizeBtn/>
                    <CodeBlock.FullscreenBtn/>
                    <CodeBlock.CloseBtn/>
                </CodeBlock.HeaderAction>
                <CodeBlock.Language>
                    {language}
                </CodeBlock.Language>
            </CodeBlock.Header>
            <CodeBlock.Content>
                <CodeBlock.CodeContent>
                    {/*  A Refaire : Reutiliser ce qui existe déja */}
                    <pre className="code-block w-full overflow-x-auto text-[14px]">
                        <code
                            className={`language-${language}`}
                            dangerouslySetInnerHTML={{ __html: MarkdownParser(code, setLanguage) }}
                        />
                    </pre>
                </CodeBlock.CodeContent>
            </CodeBlock.Content>
        </CodeBlock>
    )
}

function MarkdownParser(code: string[], setLanguage: (language: string) => void) {
    const renderer = createCustomRenderer(setLanguage);
    const parsedCode = marked(code.join("\n"), {
        breaks: true,
        gfm: true,
        renderer: renderer,
        async: false
    });

    return parsedCode
}

export function createCustomRenderer(setLanguage: (language: string) => void) {
    const renderer = new marked.Renderer();
    renderer.code = ({ text, lang = '' }: { text: string; lang?: string }) => {
        const language = lang || 'plaintext';

        setLanguage(language);

        const highlightedCode = hljs.highlight(text, { language }).value;

        return `<pre class="hljs language-${language}"><code>${highlightedCode}</code></pre>`;
    };
    return renderer;
}

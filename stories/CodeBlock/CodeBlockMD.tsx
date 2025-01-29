import { CodeBlock } from "./CodeBlock";
import React from "react";
import { marked } from 'marked';
import hljs from "highlight.js";
import "../CodeBlock/codehighlight.css";

interface CodeBlockMDProps {
    code: string[];
    language: string;
}

export function CodeBlockMD({code, language}: CodeBlockMDProps) {
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
                            dangerouslySetInnerHTML={{ __html: MarkdownParser(code, language) }}
                        />
                    </pre>
                </CodeBlock.CodeContent>
            </CodeBlock.Content>
        </CodeBlock>
    )
}



function MarkdownParser(code: string[], language: string) {
    const renderer = createCustomRenderer(language);
    const parsedCode = marked(code.join("\n"), {
        breaks: true,
        gfm: true,
        renderer: renderer,
        async: false
    });

    return parsedCode
}

export function createCustomRenderer(language: string) {
    const renderer = new marked.Renderer();
    renderer.code = ({ text, lang = '' }) => {

        const highlightedCode = hljs.highlight(text, { language }).value;

        return `<pre class="hljs language-${language}"><code>${highlightedCode}</code></pre>`;
    };
    return renderer;
}

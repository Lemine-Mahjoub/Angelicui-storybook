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
                    <CodeBlock.LineNumbers/>
                    <CodeBlock.HighlightCode>
                        {MarkdownParser(code, setLanguage)}
                    </CodeBlock.HighlightCode>
                </CodeBlock.CodeContent>
            </CodeBlock.Content>
        </CodeBlock>
    )
}

function MarkdownParser(code: string[], setLanguage: (language: string) => void) {
    const language = code[0].split("```")[1];
    setLanguage(language);
    const codeLines = code.slice(1);

    return codeLines.map((line) => {
        if (line.startsWith("```")) {
            return line.replace("```", "");
        }
        return line;
    })
}
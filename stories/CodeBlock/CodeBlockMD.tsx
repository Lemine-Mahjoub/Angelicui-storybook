import { CodeBlock } from "./CodeBlock";
import React from "react";
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
                    <CodeBlock.LineNumbers/>
                    <CodeBlock.HighlightCode>
                        {MarkdownParser(code)}
                    </CodeBlock.HighlightCode>
                </CodeBlock.CodeContent>
            </CodeBlock.Content>
        </CodeBlock>
    )
}



function MarkdownParser(code: string[]) {
    return code.map((line) => {
        if (line.startsWith("```")) {
            return line.replace("```", "");
        }
        return line;
    });
}

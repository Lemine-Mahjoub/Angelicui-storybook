import React, { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { Tabs } from "../CodeBlockTabs/Tabs";
import { Tab } from "../CodeBlockTabs/Tab";

interface CodeBlockWithTabsProps {
    tabs: string[];
    code: string[][];
    language: string[];
}

export function CodeBlockWithTabs({tabs, code, language}: CodeBlockWithTabsProps){

    const [activeTab, setActiveTab] = useState(0);
    console.count("CodeBlockWithTabs");
    return (
        <CodeBlock>
            <Tabs>
                {tabs.map((title, index) => (
                    <Tab key={index} onClick={() => setActiveTab(index)}>{title}</Tab>
                ))}
            </Tabs>

            <CodeBlock.Header>
                <CodeBlock.HeaderAction>
                    <CodeBlock.MinimizeBtn/>
                    <CodeBlock.FullscreenBtn/>
                    <CodeBlock.CloseBtn/>
                </CodeBlock.HeaderAction>
                <CodeBlock.Language>
                    {language[activeTab]}
                </CodeBlock.Language>
            </CodeBlock.Header>
            <CodeBlock.Content>
                <CodeBlock.CodeContent>
                    <CodeBlock.LineNumbers/>
                    <CodeBlock.HighlightCode>
                        {code[activeTab]}
                    </CodeBlock.HighlightCode>
                </CodeBlock.CodeContent>
                <CodeBlock.CopyBtn/>
            </CodeBlock.Content>
        </CodeBlock>
    )

}


/*

<CodeBlockWithTabs
    tabs={["Tab 1", "Tab 2", "Tab 3"]}
    code={["Code 1", "Code 2", "Code 3"]}
    language={["Language 1", "Language 2", "Language 3"]}
/>




*/
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CodeBlock } from './CodeBlock';
import { CodeBlockWithTabs } from './CodeBlockTabs';
import { CodeBlockMD } from './CodeBlockMD';
import { CodeBlockEdu } from './CodeBlockEdu';

const meta = {
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;


const defaultCode = [
    "function Code() {",
    "    return (",
    "        <div>Code</div>",
    "    )",
    "}",
    "export default Code;",
]

const defaultCode2 = [
    "function Copy() {",
    "    return (",
    "        <div>Copy</div>",
    "    )",
    "}",
    "export default Copy;",
]

const defaultLanguage = "TypeScript"


function DefaultChildren() {
    return (
        <>
            <CodeBlock.Header>
                <CodeBlock.HeaderAction>
                    <CodeBlock.MinimizeBtn/>
                    <CodeBlock.FullscreenBtn/>
                    <CodeBlock.CloseBtn/>
                </CodeBlock.HeaderAction>
                <CodeBlock.Language>
                    {defaultLanguage}
                </CodeBlock.Language>
            </CodeBlock.Header>
            <CodeBlock.Content>
                <CodeBlock.CodeContent>
                    <CodeBlock.LineNumbers/>
                    <CodeBlock.HighlightCode>
                        {defaultCode}
                    </CodeBlock.HighlightCode>
                </CodeBlock.CodeContent>
                <CodeBlock.CopyBtn/>
            </CodeBlock.Content>
        </>
    )
}

export const Default: Story = {
  args: {
    children: <DefaultChildren />,
  },
};



const tabsTitle = [
    "Code 1",
    "Code 2"
]

const tabsCode = [
    defaultCode,
    defaultCode2
]

const tabsLanguage = [
    "TypeScript",
    "JavaScript"
]

export const TabsChild: Story = {
    args: {
        children: <CodeBlockWithTabs tabs={tabsTitle} code={tabsCode} language={tabsLanguage} />,
    },
};

const mdCode = [
    "```\nfunction Code() {",
    "    return (",
    "        <div>Code</div>",
    "    )",
    "}",
    "```"
]

export const MD: Story = {
    args: {
        children: <CodeBlockMD code={mdCode} language={defaultLanguage} />,
    },
};

const eduCode = [
    "```typescript",
    "function Code() {",
    "    return (",
    "        <div>Code</div>",
    "    )",
    "}",
    "```"
]

export const Edu: Story = {
    args: {
        children: <CodeBlockEdu code={eduCode} />,
    },
};
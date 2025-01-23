import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CodeBlock } from './CodeBlock';
import { TabsProvider } from '../CodeBlockTabs/TabsProvider';
import { Tabs } from '../CodeBlockTabs/Tabs';
import { TabTitle } from '../CodeBlockTabs/TabsTitle';

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
    "Code",
    "Copy"
]

const tabsCode = [
    defaultCode,
    defaultCode2
]

const tabsLanguage = [
    "TypeScript",
    "JavaScript"
]

function TabsChildren() {
    return (
        <TabsProvider>
            <Tabs />
            <CodeBlock.Header>
                <CodeBlock.HeaderAction>
                    <CodeBlock.MinimizeBtn/>
                    <CodeBlock.FullscreenBtn/>
                    <CodeBlock.CloseBtn/>
                </CodeBlock.HeaderAction>
                <CodeBlock.Language>
                    {tabsLanguage}
                </CodeBlock.Language>
            </CodeBlock.Header>
            <CodeBlock.Content>
                <CodeBlock.CodeContent>
                    <CodeBlock.LineNumbers/>
                    <CodeBlock.HighlightCode>
                        {tabsCode}
                    </CodeBlock.HighlightCode>
                </CodeBlock.CodeContent>
                <CodeBlock.CopyBtn/>
            </CodeBlock.Content>
        </TabsProvider>
    )
}

export const TabsChild: Story = {
    args: {
        children: <TabsChildren />,
    },
};

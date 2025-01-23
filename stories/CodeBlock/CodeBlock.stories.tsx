import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CodeBlock } from './CodeBlock';

const meta = {
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const Tabs = [
    "/src/Code.ts",
    "/src/Copy.ts"
]

const Code = [
    "function Code() {",
    "    return (",
    "        <div>Code</div>",
    "    )",
    "}",
    "export default Code;",
]

const Language = "TypeScript"


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
                    {Language}
                </CodeBlock.Language>
            </CodeBlock.Header>
            <CodeBlock.Content>
                <CodeBlock.CodeContent>
                    <CodeBlock.LineNumbers/>
                    <CodeBlock.HighlightCode>
                        {Code}
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
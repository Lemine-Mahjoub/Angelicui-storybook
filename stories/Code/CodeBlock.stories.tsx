import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';
import React from 'react';
import { Code } from '../CodeOld/Code';
const meta = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCodeDefault = [
    "const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)",
    "",
    "const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)",
    "",
    "const unfold = (f, seed) => {",
    "    const go = (f, seed, acc) => {",
    "        const res = f(seed)",
    "        return res ? go(f, res[1], acc.concat([res[0]])) : acc",
    "    }",
    "    return go(f, seed, [])",
    "// Comment Test 1",
    "}"
]

function DefaultCodeBlock(){

    return (
        <>
            <CodeBlock.Header>
                <CodeBlock.HeaderActions>
                    <CodeBlock.BtnMinimize/>
                    <CodeBlock.BtnFullscreen/>
                    <CodeBlock.BtnClose/>
                </CodeBlock.HeaderActions>
                <CodeBlock.Language>
                    {"Typescript"}
                </CodeBlock.Language>
            </CodeBlock.Header>
            <CodeBlock.Content>
                <CodeBlock.CodeContent>
                    <CodeBlock.LinesNumber/>
                    <CodeBlock.Code>
                        {sampleCodeDefault}
                    </CodeBlock.Code>
                </CodeBlock.CodeContent>
            </CodeBlock.Content>
        </>
    )
}



export const Default: Story = {
  args: {
    children: <DefaultCodeBlock/>
  },
};

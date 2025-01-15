import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCode = [
  'function hello() {',
  '    console.log("Hello, world!");',
  '}',
];

export const Default: Story = {
  args: {
    code: sampleCode,
    language: 'javascript',
    hasLineNumbers: false,
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: sampleCode,
    language: 'javascript',
    hasLineNumbers: true,
  },
};

export const TypeScript: Story = {
  args: {
    code: [
      'interface User {',
      '    name: string;',
      '    age: number;',
      '}',
    ],
    language: 'typescript',
    hasLineNumbers: false,
  },
};

export const NoLanguage: Story = {
  args: {
    code: sampleCode,
    language: '',
    hasLineNumbers: false,
  },
};
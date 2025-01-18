import React from 'react';
import { useCodeBlock } from './CodeBlock';

export function CodeBlockLinesNumber({ children }: {children?: React.ReactNode}) {
    const { code } = useCodeBlock();

    return (
        <div className='flex flex-col'>
            {code.map((_, index) => (
                <CodeBlockLineNumber key={index} number={index} />
            ))}
        </div>
    )
}


export function CodeBlockLineNumber({ number }: {number: number}) {
    return (
        <div className='font-mono text-gray-400'>{number}</div>
    )
}
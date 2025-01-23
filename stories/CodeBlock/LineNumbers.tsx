import React from 'react';
import { useCodeBlock } from './CodeBlock';

export function LineNumbers() {

    const { code } = useCodeBlock();


    let lineNumbers = code.map((line, index) => (
        <div className="line-number font-mono text-gray-500" key={index}>{index + 1}</div>
    ));


    return (
        <div className="line-numbers flex flex-col  text-[14px]">
            {lineNumbers}
        </div>
    )
}


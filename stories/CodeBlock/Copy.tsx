import React from 'react';
import { useCodeBlock } from './CodeBlock';
import { ActionButton } from './HeaderAction';
import { button, div } from 'framer-motion/client';

export function CopyButton({ children }: { children?: React.ReactNode }) {
    const { code } = useCodeBlock();

    async function handleCopy() {
        if (Array.isArray(code)) {
            navigator.clipboard.writeText(code.join('\n') || '');
        }
    }

    if (children) {
        return (
            <button onClick={handleCopy}>
                {children}
            </button>
        )
    }

    return (
        <div className="flex items-center gap-2 w-full justify-end">
            <button
                className="text-[14px] text-white font-mono bg-slate-500 p-1 rounded-md"
                onClick={handleCopy}
            >
                Copy
            </button>
        </div>
    )
}

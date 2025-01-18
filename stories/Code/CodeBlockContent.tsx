import { div } from 'framer-motion/client'
import React, { ReactNode } from 'react'
import { useCodeBlock } from './CodeBlock'

export function CodeBlockContent({ children }: {children: ReactNode}){
    const { isMinimise } = useCodeBlock()

    if (isMinimise){
        return null;
    }

    return (
        <div className='flex flex-col'>
            {children}
        </div>
    )
}
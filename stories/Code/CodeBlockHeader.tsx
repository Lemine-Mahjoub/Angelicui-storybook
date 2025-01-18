import { div } from 'framer-motion/client'
import React, { ReactNode } from 'react'

export function CodeBlockHeader({ children }: {children: ReactNode}) {
    return (
        <div className="flex justify-between items-center gap-8">
            {children}
        </div>
    )
}
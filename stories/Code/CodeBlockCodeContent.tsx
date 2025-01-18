import React, { ReactNode } from 'react';

export function CodeBlockCodeContent({ children }: { children: ReactNode }) {
    return (
        <div className='flex gap-2'>
            {children}
        </div>
    );
}
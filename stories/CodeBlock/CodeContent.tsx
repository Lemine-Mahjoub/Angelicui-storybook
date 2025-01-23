import React from 'react';

export function CodeContent({children}: {children: React.ReactNode | React.ReactNode[]}) {
    return (
        <div className="w-full h-full flex gap-4">
            {children}
        </div>
    )
}
import React from 'react'

export function Column({children}: {children: React.ReactNode}) {
    return (
        <tr className="bg-gray-100 w-full flex justify-between">
            {children}
        </tr>
    )
}
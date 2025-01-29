import React from "react";

export function Header({children}: {children: React.ReactNode | string[]}) {

    if (Array.isArray(children) && typeof children[0] === 'string') {
        return (
            <thead className="bg-gray-300 w-full">
                <tr>
                    {children.map((child, index) => (
                        <th key={index}>
                            {child}
                        </th>
                    ))}
                </tr>
            </thead>
        )
    }


    return (
        <div className="bg-gray-300 w-full flex justify-between">
            {children}
        </div>
    )
}
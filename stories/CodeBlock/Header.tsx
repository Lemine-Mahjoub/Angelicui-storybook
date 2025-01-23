import React from "react";

export function Header({children}: {children: React.ReactNode}) {
    return (
        <div className="flex justify-between items-center gap-8">
            {children}
        </div>
    )
}
import React from "react";

export function Tabs({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex items-center gap-2 w-fit  text-white p-2 rounded-lg">
            {children}
        </div>
    )
}
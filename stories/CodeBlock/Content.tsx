import React from "react";
import { useCodeBlock } from "./CodeBlock";

export function Content({children}: {children: React.ReactNode | React.ReactNode[]}) {

    const { isMinimise } = useCodeBlock();

    if (isMinimise) {
        return null;
    }

    return (
        <div className="w-full h-full flex flex-col ">
            {children}
        </div>
    )
}
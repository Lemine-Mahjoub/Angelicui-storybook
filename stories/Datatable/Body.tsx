import React from "react";

export function Body({children}: {children?: React.ReactNode}) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}
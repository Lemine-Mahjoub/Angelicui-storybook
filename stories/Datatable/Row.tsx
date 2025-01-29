import React from "react";

export function Row({children}: {children?: React.ReactNode | string}) {
    return (
        <td className="bg-gray-100 w-full flex justify-between">
            {children}
        </td>
    )
}
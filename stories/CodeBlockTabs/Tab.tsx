import React from "react";

export function Tab({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <button onClick={onClick} className="text-white p-2 rounded-t-lg hover:bg-slate-600 bg-slate-500">{children}</button>
    )
}
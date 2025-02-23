import React from "react";
import { useDropdown } from "./Dropdown";

export function DropdownOptions({ children }: { children: React.ReactNode }) {
    const { isOpen } = useDropdown();

    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md">
            {children}
        </div>
    )
}
import React, { ReactNode } from "react";
import { useDropdown } from "./Dropdown";

interface DropdownOptionProps {
    value: string;
    label: string;
}

export function DropdownOption({ value, label }: DropdownOptionProps) {
    const { setSelectedOption } = useDropdown();

    return (
        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setSelectedOption(value)}>{label}</div>
    )
}
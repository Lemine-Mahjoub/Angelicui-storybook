import React, { ReactNode } from "react";
import { useDropdown } from "./Dropdown";



export function DropdownInput({ children }: { children?: ReactNode }) {
    const { setIsOpen, isOpen, selectedOption } = useDropdown();


    if (children) {
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <div>
            <input type="text" value={selectedOption ?? ""} onClick={() => setIsOpen(!isOpen)} />
        </div>
    )
}
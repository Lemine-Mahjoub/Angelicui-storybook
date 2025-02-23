import React from "react";
import { Dropdown } from "./Dropdown";
import { DropdownInput } from "./DropdownInput";
import { DropdownOptions } from "./DropdownOptions";
import { useDropdown } from "./Dropdown";

interface DefaultDropdownProps {
    setSelectedValue: (value: string) => void;
    options: string[];
    description: string[];
}

export function GcDropdown({ setSelectedValue, options, description }: DefaultDropdownProps) {
    return (
        <Dropdown onSelect={setSelectedValue}>
            <DropdownInput/>
            <DropdownOptions>
                {options.map((option, index) => (
                    <DropdownOptionGc key={option} label={option} value={option} description={description[index]} />
                ))}
            </DropdownOptions>
        </Dropdown>
    )
}

interface DropdownOptionGcProps {
    label: string;
    value: string;
    description: string;
}

function DropdownOptionGc({ label, value, description }: DropdownOptionGcProps) {
    const { setSelectedOption } = useDropdown();

    return (
        <div className="flex justify-between cursor-pointer" onClick={() => setSelectedOption(value)}>
            <div>
                {label}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}
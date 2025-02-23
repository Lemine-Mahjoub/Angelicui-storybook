import React from "react";
import { Dropdown } from "./Dropdown";
import { DropdownInput } from "./DropdownInput";
import { DropdownOptions } from "./DropdownOptions";
import { DropdownOption } from "./DropdownOption";

interface DefaultDropdownProps {
    setSelectedValue: (value: string) => void;
    options: string[];
}

export function DefaultDropdown({ setSelectedValue, options }: DefaultDropdownProps) {
    return (
        <Dropdown onSelect={setSelectedValue}>
            <DropdownInput/>
            <DropdownOptions>
                {options.map((option) => (
                    <DropdownOption key={option} value={option} label={option} />
                ))}
            </DropdownOptions>
        </Dropdown>
    )
}
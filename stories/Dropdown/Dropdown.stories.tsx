import React, { useState } from "react";
import { DefaultDropdown } from "./DefaultDropdown";
import { GcDropdown } from "./GcDropdown";

export default {
    title: "Dropdown",
    component: DefaultDropdown,
};


export const Default = () => {
    const [selectedValue, setSelectedValue] = useState("");

    return <DefaultDropdown setSelectedValue={setSelectedValue} options={["Option 1", "Option 2", "Option 3"]} />;
};

export const Gc = () => {
    const [selectedValue, setSelectedValue] = useState("");

    return <GcDropdown setSelectedValue={setSelectedValue} options={["Option 1", "Option 2", "Option 3"]} description={["Description 1", "Description 2", "Description 3"]} />;
};
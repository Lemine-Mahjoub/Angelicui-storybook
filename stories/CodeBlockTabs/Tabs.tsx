import { useTabs } from "./TabsProvider";
import React from "react";

export function Tabs() {
    const { activeTab, setActiveTab, tabs } = useTabs();

    return (
        <div className="flex items-center gap-2">
            {tabs.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(index)}>{tab}</button>
            ))}
        </div>
    )
}
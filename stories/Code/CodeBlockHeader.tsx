import React from "react";
import { CodeBlockActions } from "./CodeBlockAction";
import { CodeBlockLanguage } from "./CodeBlockLanguage";

export function CodeBlockHeader() {
    return (
        <div className="flex justify-between items-center gap-8">
            <CodeBlockActions />
            <CodeBlockLanguage />
        </div>
    )
}
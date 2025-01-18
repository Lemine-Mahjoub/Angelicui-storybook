import React from "react";
import { useCodeBlock } from "./CodeBlockOld";

export function CodeBlockLanguage() {
    const { language } = useCodeBlock();

    if (!language) {
        return null;
    }

    return (
        <div className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">
            {language}
        </div>
    )
}

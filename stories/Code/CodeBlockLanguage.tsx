import React, { useEffect } from "react";
import { useLanguageContext } from "./CodeBlock";
import { HIGHLIGHTJS_LANGUAGE, DEFAULT_LANGUAGE } from "../constant";

export function CodeBlockLanguage({ children }: {children: string}) {
    const { language, setLanguage } = useLanguageContext();

    useEffect(() => {
        if (children && HIGHLIGHTJS_LANGUAGE.includes(language)) {
            if (children != language)
                setLanguage(children);
        } else {
            setLanguage(DEFAULT_LANGUAGE);
        }
    }, [children])


    return (
        <div className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">
            {language}
        </div>
    )
}
import React, { useEffect } from "react";
import { useCodeBlock } from "./CodeBlock";
import { DEFAULT_LANGUAGE } from '../constant'

export function Language({children}: {children?: React.ReactNode | string}) {
    const { setLanguage } = useCodeBlock();


    useEffect(() => {
        if (children === undefined || typeof children === "string") {
            if (typeof children === "string") {
                setLanguage(children);
            } else {
                setLanguage(DEFAULT_LANGUAGE);
            }
        }
    }, [children]);

    if (typeof children === "string") {

        return (
            <div className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">
                {children}
            </div>
        )
    }

    else {
        return (
            <div>
                {children}
            </div>
        )
    }
}

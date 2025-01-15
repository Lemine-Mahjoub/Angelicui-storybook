
interface CodeLinesProps {
    code: string[];
    LineNumber: number;
    Selected: boolean;
}

export function CodeLines({ code, LineNumbers, Selected }: CodeLinesProps) {


    return (
        <pre className="code-block">
            <code className={`language-${language}`}>{code}</code>
        </pre>
    );
}
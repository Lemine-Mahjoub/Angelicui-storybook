import React from 'react';
import { useCodeBlock } from './CodeBlock';
import { Code } from './Code';
import { CodeBlockHeader } from './CodeBlockHeader';
import { Modal } from '../Modal/Modal';

export function CodeBlockContent() {

    return (
        <div className="bg-[#151618] rounded-md px-4 py-4 flex flex-col">
            <CodeBlockHeader />
            <Code.CodeBlock />
        </div>
    )
}

function CodeBlockContentFullscreen() {
    const { isFullscreen } = useCodeBlock();

    return (
        <Modal isOpen={isFullscreen}>
            <div className="overflow">
                <CodeBlockContent />
            </div>
        </Modal>
    )
}

CodeBlockContent.Fullscreen = CodeBlockContentFullscreen;
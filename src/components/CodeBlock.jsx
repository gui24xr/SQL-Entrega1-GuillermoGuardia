// CodeBlock.jsx

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock() {
    return (
        <div className="code-block">
            <SyntaxHighlighter language="javascript" style={materialDark}>
                {`
                    function greet() {
                        console.log("Hello, world!");
                    }
                    greet();
                `}
            </SyntaxHighlighter>
        </div>
    );
}

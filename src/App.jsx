import { createRoot } from 'react-dom/client';
import Editor from "@monaco-editor/react";
import './App.css';
import Preview from './Preview';

export default function App() {
    return (
        <div id="app-container">
            <div className="editor-container">
                <Editor
                    height="100%"
                    width="100%"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value="console.log('Hello World!');"
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                    }}
                />
            </div>
            <div className="preview-container">
                <Preview />
            </div>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

import { useState, useCallback, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Editor from "@monaco-editor/react";
import './App.css';
import Preview from './Preview';
import Toolbar from './Toolbar';
import Term from './Term';

export default function App() {
    const [code, setCode] = useState("<h1>Hello Orbis</h1>\n<p>Edit this code to see live changes!</p>\n<style>\n  body { font-family: sans-serif; background: #fff; padding: 20px; }\n  h1 { color: #333; }\n</style>");
    const [editorWidth, setEditorWidth] = useState(50); // percentage
    const [isResizing, setIsResizing] = useState(false);
    const [showPreview, setShowPreview] = useState(true);

    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((mouseMoveEvent) => {
        if (isResizing && showPreview) {
            const newWidth = (mouseMoveEvent.clientX / window.innerWidth) * 100;
            if (newWidth > 10 && newWidth < 90) {
                setEditorWidth(newWidth);
            }
        }
    }, [isResizing, showPreview]);

    useEffect(() => {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResizing);
        return () => {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        <div id="app-container" style={{ cursor: isResizing ? 'col-resize' : 'default' }}>
            <div className="editor-container" style={{ width: showPreview ? `${editorWidth}%` : '100%' }}>
                <Editor
                    height="100%"
                    width="100%"
                    defaultLanguage="html"
                    theme="vs-dark"
                    value={code}
                    onChange={(e) => setCode(e)}
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                    }}
                />
                <div className="toolbar">
                    <Toolbar onTogglePreview={() => setShowPreview(!showPreview)} />
                </div>
                <div className="terminal">
                    <Term />
                </div>
            </div>
            {showPreview && (
                <>
                    <div className="resizer" onMouseDown={startResizing} />
                    <div className={`preview-container ${isResizing ? 'resizing' : ''}`}>
                        <Preview value={code} />
                    </div>
                </>
            )}
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

import { createRoot } from 'react-dom/client';
import Editor from './Editor';
import './App.css';

export default function App() {
    return (
        <>
            <Editor />
        </>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default function Toolbar({ onTogglePreview }) {
    return (
        <>
            <button>New</button>
            <button>Open</button>
            <button>Save</button>
            <button onClick={onTogglePreview}>Preview</button>
        </>
    )
}
export default function Preview({ value }) {
    return (
        <iframe
            srcDoc={value}
            title="Preview"
            sandbox="allow-scripts"
            style={{ width: '100%', height: '100%', border: 'none' }}
        />
    )
}
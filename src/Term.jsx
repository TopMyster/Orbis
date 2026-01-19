import { Terminal } from "@xterm/xterm";

const term = new Terminal();
term.open(document.getElementById('terminal'));

export default function Term() {
    return (
        <div>
            <div id="terminal"></div>
        </div>
    )
}
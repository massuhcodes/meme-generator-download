import "../styles/Header.css";
import troll from "../assets/troll-face.png";
import { toJpeg } from "html-to-image";

export default function Header() {
    function handleDownload() {
        toJpeg(document.getElementById("meme")).then(
            (dataUrl) => {
                const link = document.createElement("a");
                link.style = "display:none";
                link.download = "meme.jpeg";
                link.href = dataUrl;
                link.click();
            }
        );
    }

    return (
        <header>
            <img src={troll} />
            <h2>Meme Generator</h2>
            <a className="download" href="#" onClick={handleDownload}>
                Download
            </a>
        </header>
    );
}

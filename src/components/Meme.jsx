import { useState, useEffect } from "react";
import "../styles/Meme.css";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "One Does Not Simply",
        bottomText: "Walk Into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((fetchResult) => setAllMemes(fetchResult.data.memes));
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
            };
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            };
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div id="meme">
                <img src={meme.randomImage} />
                <h2 className="text top">{meme.topText}</h2>
                <h2 className="text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

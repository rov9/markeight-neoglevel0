import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥠": "Fortune Cookie",
  "🍯": "Honey Pot",
  "🧊": "Ice",
  "🍩": "Doughnut",
  "🥚": "Egg",
  "🍕": "Pizza",
  "🍔": "Hamburger",
  "🥦": "Broccoli",
  "🍏": "Green Apple",
  "🍡": "Dango",
  "🌮": "Taco",
  "🥑": "Avocado",
  "🥨": "Pretzel"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (userInput.length === 0) {
      meaning = "Enter an emoji here";
    } else if (meaning === undefined) {
      meaning = "We don't have it in our database";
    }

    setMeaning(meaning); //react call for output show
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Know this Food Item?</h1>
      <h2 style={{ fontSize: "11px" }}>You may enter any below emojis here</h2>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      {/* actual output set by react command*/}

      <h3>Emojis We Know</h3>
      <p style={{ fontWeight: "1000px", fontSize: "10px" }}>
        You may click on them to identify
      </p>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

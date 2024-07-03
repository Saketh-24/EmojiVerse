import React from "react";
import Emoji from "./Emoji";
import emojidata from "../emojidata";
function Card(props)
{
  return(<Emoji
    image={props.emoji}
    title={props.name}
    description={props.meaning}
  />)
}

function App() {
  return (
    <div>
      <h1>
        <span>EmojiVerse</span>
      </h1>

      <dl className="dictionary">
        {emojidata.map(Card)}
      </dl>
    </div>
  );
}

export default App;

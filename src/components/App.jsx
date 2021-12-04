import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);

  function mouseOvered() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOvered}
        onMouseOut={mouseOut}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import ImageBoard from "./components/ImageBoard";

const App = () => {
  return (
    <div id="content">
      <div id="title">The Office Tile Memory Game</div>
      <ImageBoard />
    </div>
  );
}

export default App;

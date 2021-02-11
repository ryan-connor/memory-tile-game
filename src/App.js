import './App.css';
import React from "react";
import ImageBoard from "./components/ImageBoard";

const App = () => {
  return (
    <div id="content">
      <div id="title"><div>The Office Tile Memory Game</div>
      <div id="rules">Rules: Try to select as many tiles as you can without choosing the same tile twice!</div></div>
      
      <ImageBoard />
    </div>
  );
}

export default App;

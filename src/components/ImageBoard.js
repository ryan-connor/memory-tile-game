import React, {useState, useEffect} from "react";
import Images from "./Images";

const ImageBoard = () => {

//states for count and highCount
const [count, setCount] = useState(0);
const [highCount, setHighCount] = useState(0);

//update highCount every time count state changes
useEffect( ()=> {
  if (count> highCount) {
      setHighCount(count);
    }
},[count]);

const increment = () => {
 setCount(count+1);
};

const clearCount = () => {
  setCount(0);
};

const displayScores = () => {
  return (
    <div id="scores">
      <div>High Score:{highCount}</div>
      <div>Current Score:{count}</div>
      <button onClick={increment}>Increment Score</button>
      <button onClick={clearCount}>ClearScore</button>
    </div>
  )
};

//state arrays to store clicked tiles and tile position
const [clicked, setClicked] = useState([]);
const [tilePosition, setTilePosition] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

//function to add index to clicked state array
const addClicked = (index) => {
    setClicked([...clicked, index])
};
//function to fully clear clicked array
const clearClicked = () => {
    setClicked([]);
};

//function to randomize tile position
const randomBoard = () => {
    setTilePosition([...tilePosition.sort( (a,b)=> {
        return ( Math.random()-.5);
    })]);
};

//function to create board
const createBoard = () => {
    return (
        <div id="tileBoard">
            {tilePosition.map( (tile)=> {
                return <div className="tileCont" id={tile} onClick={clickTile}><Images index={tile}/></div>;
            })}
        </div>
    );
};

//function when click a tile
const clickTile = (e) => {
    console.log(e.target.id);
   //check if already clicked
    let check= clicked.findIndex( (arr)=> {
        return arr === e.target.id;
    });
    console.log(check);
    if (check===-1) {
        //add to clicked and increment count
        addClicked(e.target.id);
        increment();
    }
    else {
        //reset counter and clicked array
        clearCount();
        clearClicked();
    }
    //randomize board on every click
    randomBoard();
};

return (
    <div id="imageBoardCont">
        {displayScores()}
        {createBoard(tilePosition)}
    </div>
)
};

export default ImageBoard;

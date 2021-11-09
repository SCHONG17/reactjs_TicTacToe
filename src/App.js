import React, { useState } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState("o");
  const [saved, setSaved] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkWinner = (num) => {
    let patterns = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let i in patterns) {
      patterns[i].forEach((pattern) => {
        if (
          num[pattern[0]] === "" ||
          num[pattern[1]] === "" ||
          num[pattern[2]] === ""
        ) {
        } else if (
          num[pattern[0]] === num[pattern[1]] &&
          num[pattern[1]] === num[pattern[2]]
        ) {
          setWinner(num[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (saved[num] !== "") {
      alert("already clicked");
      return;
    }
    let filled = [...saved];

    if (turn === "x") {
      filled[num] = "x";
      setTurn("o");
    } else {
      filled[num] = "o";
      setTurn("x");
    }

    checkWinner(filled);
    setSaved(filled);
  };

  return (
    <div className="App">
      <div className="boxStyle">
        <text className="titleStyle">Turn : {turn}</text>
        {!winner && (
          <div>
            <div style={{ display: "flex" }}>
              <button onClick={() => handleClick(0)}>{saved[0]}</button>
              <button onClick={() => handleClick(1)}>{saved[1]}</button>
              <button onClick={() => handleClick(2)}>{saved[2]}</button>
            </div>
            <div style={{ display: "flex" }}>
              <button onClick={() => handleClick(3)}>{saved[3]}</button>
              <button onClick={() => handleClick(4)}>{saved[4]}</button>
              <button onClick={() => handleClick(5)}>{saved[5]}</button>
            </div>
            <div style={{ display: "flex" }}>
              <button onClick={() => handleClick(6)}>{saved[6]}</button>
              <button onClick={() => handleClick(7)}>{saved[7]}</button>
              <button onClick={() => handleClick(8)}>{saved[8]}</button>
            </div>
          </div>
        )}
        <div>
          {winner ? (
            <text className="winnerText">{winner} is the winner!</text>
          ) : (
            <text className="winnerText">No one Win</text>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

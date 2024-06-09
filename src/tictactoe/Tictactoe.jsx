import { useState } from "react";
import Display from "../display/Display";

export default function Tictactoe() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  let [player, setPlayer] = useState("X");
  let [hasWinner, setHasWinner] = useState(false);

  let [cont1, setCont1] = useState(0);
  let [cont2, setCont2] = useState(0);

  function play(row, cell) {
    if (!hasWinner && board[row][cell] === "") {
      let newBoard = [...board];
      newBoard[row][cell] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
      if (checkWinner()) {
        setHasWinner(true);
        setTimeout(() => {
          if (player == "X") {
            setPlayer("O");
            setCont1(cont1 + 1);
            alert("O Jogador X GANHOU!");
          } else {
            setPlayer("X");
            alert("O Jogador O GANHOU!");
            setCont2(cont2 + 1);
          }
        }, 100);
      }
    }
    console.log(row);
  }

  let resetBoard = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    setHasWinner(false);
  };

  let checkWinner = () => {
    if (
      board[0][0] === player &&
      board[0][1] === player &&
      board[0][2] === player
    )
      return true;
    if (
      board[1][0] === player &&
      board[1][1] === player &&
      board[1][2] === player
    )
      return true;
    if (
      board[2][0] === player &&
      board[2][1] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][0] === player &&
      board[1][0] === player &&
      board[2][0] === player
    )
      return true;
    if (
      board[0][1] === player &&
      board[1][1] === player &&
      board[2][1] === player
    )
      return true;
    if (
      board[0][2] === player &&
      board[1][2] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    )
      return true;
    return false;
  };

  return (
    <>
      <Display c1={cont1} c2={cont2}></Display>
      <section className="w-4/5 h-[80%] bg-white flex justify-center flex-col items-center">
        <div className="w-[60%] h-[80%] flex flex-col justify-center ">
          {board.map((row, rowIndex) => {
            return (
              <div className="flex items-center justify-center" key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  return (
                    <div
                      onClick={() => play(rowIndex, cellIndex)}
                      className="w-32 h-32 flex justify-center items-center border border-black"
                      key={cellIndex}
                    >
                      {cell}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => resetBoard()}
          className="h-min p-5 bg-black text-white"
        >
          Reset Match
        </button>
      </section>
    </>
  );
}

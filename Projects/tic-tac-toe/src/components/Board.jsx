import { useState, useEffect } from "react";
import Square from "./Square";
import Winner from "./Winner";

export default function Board({ index, setBoards }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  useEffect(() => {
    const winner = Winner(squares);
    if (winner) {
      setBoards((prevBoards) => {
        const newBoards = [...prevBoards];
        newBoards[index] = winner;
        return newBoards;
      });
    } else if (!squares.some(isNull)) {
      setBoards((prevBoards) => {
        const newBoards = [...prevBoards];
        newBoards[index] = "-";
        return newBoards;
      });
    }
  }, [squares, setBoards, index]);

  function handleClick(i) {
    if (Winner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const isNull = (value) => value == null;

  return (
    <>
      {Winner(squares) && (
        <div className="square status">{Winner(squares)}</div>
      )}

      {squares.some(isNull) && (
        <>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </>
      )}

      {!Winner(squares) && !squares.some(isNull) && (
        <div className="square status">-</div>
      )}
    </>
  );
}

import { useState } from "react";
import Board from "./components/Board";
import Winner from "./components/Winner";

export default function App() {
  const [boards, setBoards] = useState(Array(9).fill(null));
  console.log(boards);

  let winner = Winner(boards);

  return (
    <>
      <div className="parent-row">
        <div className="border-right border-bottom">
          <Board setBoards={setBoards} index={0} />
        </div>
        <div className="border-right border-bottom">
          <Board setBoards={setBoards} index={1} />
        </div>
        <div className="border-bottom">
          <Board setBoards={setBoards} index={2} />
        </div>
      </div>

      <div className="parent-row">
        <div className="border-right border-bottom">
          <Board setBoards={setBoards} index={3} />
        </div>
        <div className="border-right border-bottom">
          <Board setBoards={setBoards} index={4} />
        </div>
        <div className="border-bottom">
          <Board setBoards={setBoards} index={5} />
        </div>
      </div>

      <div className="parent-row">
        <div className="border-right">
          <Board setBoards={setBoards} index={6} />
        </div>
        <div className="border-right">
          <Board setBoards={setBoards} index={7} />
        </div>
        <div>
          <Board setBoards={setBoards} index={8} />
        </div>
      </div>

      {winner == "-" && <h1>Draw</h1>}

      {(winner == "X" || winner == "O") && <h1>Winner: {winner}</h1>}
    </>
  );
}

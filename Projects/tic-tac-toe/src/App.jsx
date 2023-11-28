import Board from "./components/Board";

export default function App() {
  return (
    <>
      <div className="parent-row">
        <div className="border-right border-bottom">
          <Board />
        </div>
        <div className="border-right border-bottom">
          <Board />
        </div>
        <div className="border-bottom">
          <Board />
        </div>
      </div>

      <div className="parent-row">
        <div className="border-right border-bottom">
          <Board />
        </div>
        <div className="border-right border-bottom">
          <Board />
        </div>
        <div className="border-bottom">
          <Board />
        </div>
      </div>

      <div className="parent-row">
        <div className="border-right">
          <Board />
        </div>
        <div className="border-right">
          <Board />
        </div>
        <div>
          <Board />
        </div>
      </div>
      
    </>
  );
}

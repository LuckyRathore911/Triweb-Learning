import ChildBoard from "./ChildBoard";

export default function ParentBoard() {
  return (
    <>
      <div className="parent-row">
        <div className="border-right border-bottom"><ChildBoard /></div>
        <div className="border-right border-bottom"><ChildBoard /></div>
        <div className="border-bottom"><ChildBoard /></div>
      </div>
     
      <div className="parent-row">
        <div className="border-right border-bottom"><ChildBoard /></div>
        <div className="border-right border-bottom"><ChildBoard /></div>
        <div className="border-bottom"><ChildBoard /></div>
      </div>
     
      <div className="parent-row">
        <div className="border-right"><ChildBoard /></div>
        <div className="border-right"><ChildBoard /></div>
        <div><ChildBoard /></div>
      </div>

    </>
  );
}

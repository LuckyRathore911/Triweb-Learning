import { useState } from "react";

import UnderstandingProps from "./components/UnderstandingProps";
import UseStateHook from "./components/UseStateHook";

function App() {
  const [state, setState] = useState(true);

  function close() {
    setState(false);
  }
  function open() {
    setState(true);
  }

  return (
    <div>
      <UnderstandingProps message="Hi, there!" />
      <UnderstandingProps message="Hello guys!" />

      {state ? (
        <UseStateHook makeClosed={close} />
      ) : (
        <button onClick={open}>Open</button>
      )}
    </div>
  );
}

export default App;

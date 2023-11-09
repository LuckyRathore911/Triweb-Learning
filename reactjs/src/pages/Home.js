import { useState } from "react";

import UnderstandingProps from "../components/UnderstandingProps";
import UseStateHook from "../components/UseStateHook";

function Home() {
  const [state, setState] = useState(true);

  function close() {
    setState(false);
  }
  function open() {
    setState(true);
  }

  return (
    <div>
      <h1>I am on the Home Page</h1>

      <UnderstandingProps message="Hi, there!" />
      <UnderstandingProps message="Hello everyone!" />

      {state ? (
        <UseStateHook makeClosed={close} />
      ) : (
        <button onClick={open}>Open</button>
      )}
    </div>
  );
}
export default Home;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import UnderstandingProps from "./components/UnderstandingProps";
import UseStateHook from "./components/UseStateHook";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";

function App() {
  const [state, setState] = useState(true);

  function close() {
    setState(false);
  }
  function open() {
    setState(true);
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>

      <UnderstandingProps message="Hi, there!" />
      <UnderstandingProps message="Hello guys!" />

      {state ? (
        <UseStateHook makeClosed={close} />
      ) : (
        <button onClick={open}>Open</button>
      )}
    </MainLayout>
  );
}

export default App;

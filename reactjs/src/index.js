import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ContextFavourite } from "./store/ContextFavourite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextFavourite>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextFavourite>
);

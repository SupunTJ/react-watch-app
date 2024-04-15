import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="p-2 m-2 row text-center">
      <Counter />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MemoryContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MemoryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MemoryContextProvider>
  </React.StrictMode>
);

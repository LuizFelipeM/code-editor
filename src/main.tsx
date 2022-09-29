import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { EdditingProvider } from "./contexts/EdditingContext/EdditingContext";
import "./useWorkers";
import "./main.scss";

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <EdditingProvider>
      <App />
    </EdditingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import "./useWorkers";
import "./main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { EdditingProvider } from "./contexts/EdditingContext/EdditingContext";
import { StylesProvider } from "./contexts/StylesContext/StylesContext";

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <EdditingProvider>
      <StylesProvider>
        <App />
      </StylesProvider>
    </EdditingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ReactFlowProvider } from "reactflow";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ReactFlowProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
export * from "./pages/Moonhaeryuk";
export * from "./components/Step1";
export * from "./components/Step2";
export * from "./components/Step3";
export * from "./components/Step4";
export * from "./components/Step5";
export * from "./components/Step6";
export * from "./components/Step7";
export * from "./components/Step8";
export * from "./components/Step9";
export * from "./components/Step10";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

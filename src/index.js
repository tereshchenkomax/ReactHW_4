import React from "react";
import ReactDOM from "react-dom";
import SelectForm from "./SelectForm";

import "./styles.css";

function App() {
  return <SelectForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

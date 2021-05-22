import React from "react";
import CardList from "./components/CardList";
import { robots } from "./robots";

const App = () => {
  return <CardList robots={robots} />;
};

export default App;

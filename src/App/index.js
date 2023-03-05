/* import logo from "./logo.svg"; */
//import './App.css';
import React from "react";

import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext";
/* const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Cortar tomate", completed: false },
  { text: "Aprender react", completed: false },
  { text: "Buscar laburo", completed: true },
]; */


function App(props) {
 /*  console.log("App"); */
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;

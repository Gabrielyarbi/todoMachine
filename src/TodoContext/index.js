import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TODOS_V1 = "TODOS_V1";
const TodoContext = React.createContext();

function TodoProvider(props) {
   /*  console.log('TodoProvider'); */
  const {
    item: stateTodos,
    saveItem: setStateTodos,
    loading,
  } = useLocalStorage(TODOS_V1, []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const filterTodos = stateTodos.filter((item) =>
    item.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    let auxTodos = [...stateTodos];
    var todoFound = auxTodos.find((completeItem) => completeItem.text === text);
    todoFound.completed = true;
    saveTodos(auxTodos);
  };

  const deleteTodo = (text) => {
    let auxTodos = [...stateTodos];
    var todoIndexFound = auxTodos.findIndex(
      (completeItem) => completeItem.text === text
    );
    auxTodos.splice(todoIndexFound, 1);
    saveTodos(auxTodos);
  };

  const saveTodos = (newTodos) => {
    const stringify = JSON.stringify(newTodos);
    localStorage.setItem(TODOS_V1, stringify);
    setStateTodos(newTodos);
  };

  
  const addTodos = (text) => {
    let auxTodos = [...stateTodos];
    auxTodos.push({
      completed:false,
      text : text,
    })
    saveTodos(auxTodos);
  };

  const completedTodos = filterTodos.filter((item) => !!item.completed).length;
  const totalTodos = filterTodos.length;

  return (
    <TodoContext.Provider
      value={{
        loading,
        completedTodos,
        totalTodos,
        setSearchValue,
        filterTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        openModal,
        setOpenModal,
        addTodos
      }}
    >
       {props.children} 
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoItem } from "../components/CreateTodoItem";
import { Modal } from "../modal";
import { TodoForm } from "../components/TodoForm";
function AppUi() {
  /*  console.log("AppUi"); */

  const {
    loading,
    filterTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      {/* <TodoContext.Consumer>
        {({loading,filterTodos,completeTodo,deleteTodo}) => ( */}
      <TodoList>
        {loading && <p>CARGANDO...</p>}
        {!loading && !filterTodos.length && <p>No hay datos</p>}
        {filterTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            itemComplete={() => completeTodo(todo.text)}
            itemDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {/*  )}
      </TodoContext.Consumer>  */}
      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoItem setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUi };

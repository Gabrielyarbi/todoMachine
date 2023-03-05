import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

const styles={
    color:'red',
    backgroundColor : 'yellow',
};

function TodoCounter(){
    const {completedTodos,totalTodos} = React.useContext(TodoContext);
    return (
        <h2 className="todoCounter">
            Has completado {completedTodos} de {totalTodos} TAREAS (TODOs)
        </h2>
    );
}

export {TodoCounter};
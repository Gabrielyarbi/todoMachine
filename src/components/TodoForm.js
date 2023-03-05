import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm (){
    const {addTodos,setOpenModal} = React.useContext(TodoContext);
    

    const [todoValue,setTodoValue] = React.useState('');
    const onChange = (event)=>{
        setTodoValue(event.target.value);
    }

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodos(todoValue);
        setOpenModal(false);
    }
   


    return (
        <form onSubmit={onSubmit}>
         <label>ESCRIBE TU NUEVA TAREA</label>
         <textarea placeholder="COMPRAR COMIDA" value={todoValue} onChange={onChange}/> 


         <div className="TodoForm-buttonContainer">

         <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">
            Cancelar            
         </button>

         <button  className="TodoForm-button TodoForm-button-add" type="submit" >
            Añadir            
         </button>

         </div>

        </form>

    );
}


export {TodoForm};
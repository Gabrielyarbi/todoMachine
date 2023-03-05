import React from "react";
import "./CreateTodoItem.css";



function CreateTodoItem(props) {

  const click = () =>{
    props.setOpenModal(prevState=>!prevState)
  }

  return <button onClick={click} className="CreateTodoButton">+</button>;
}

export { CreateTodoItem };

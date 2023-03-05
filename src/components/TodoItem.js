import React from "react";
import "./TodoItem.css";

function TodoItem({text,completed,itemComplete,itemDelete}) {
  /* const onComplete = () => {
    alert("Completaste " + text);
    itemsComplete.push(text);
  }; */
/*   const onDelete = () => {
    alert("Eliminaste " + text);
  }; */

  return (
    <li className="TodoItem">
      <span
        onClick={itemComplete}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={itemDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };

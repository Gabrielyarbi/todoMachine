import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
function TodoSearch(){

   /*  const [searchValue,setSearchValue] = React.useState(''); */
   const {searchValue,setSearchValue} = React.useContext(TodoContext);
    const searchValueChange = (event)=>{
       /*  console.log(event.target.value); */
        setSearchValue(event.target.value)
        
    }

    return (
        <input onChange={searchValueChange} value={searchValue} className="TodoSearch" placeholder="Filtrar Tareas"/>
    );
}

export {TodoSearch};
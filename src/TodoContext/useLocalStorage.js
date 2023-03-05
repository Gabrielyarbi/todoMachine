import React from "react";
function useLocalStorage(nameItem,defaultValue) {
  /*   console.log("useLocalStorage"); */
    const [loading, setloading] = React.useState(true);
    const [item, setItem] = React.useState(defaultValue);
    React.useEffect(()=>{
      setTimeout(()=>{
        const localStorageItem = localStorage.getItem(nameItem)
        let parsedItem=defaultValue;
        if(!localStorageItem){
          localStorage.setItem(nameItem,JSON.stringify(defaultValue))
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setloading(false);
      },1000);
     
     });
  
   
  
  
   
    const saveItem = (newItem)=>{
      const stringify = JSON.stringify(newItem);
      localStorage.setItem(nameItem,stringify);
      setItem(newItem)
    }
  
    return {item,saveItem,loading};
  }

  export {useLocalStorage};
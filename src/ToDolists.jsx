import React from "react";
 const ToDolists =(props)=>
 {

    return (
      <>
      <div className="todo_style">
      <i class="fa-solid fa-circle-xmark"
      onClick={()=>
      {
         props.onSelect(props.id)
      }}/>
    <li>{props.text}</li>
    
    </div>
    </>) ;
   };
 export default ToDolists;
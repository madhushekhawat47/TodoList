import React, { useState } from "react";
import ToDolists from "./ToDolists";


const App =()=>
{
  const[inputList,setInputList]=useState("");
  const[Items,setItems]=useState([]);
  const itemEvent=(event)=> {
    setInputList(event.target.value);
  };

  const listOfItems =()=>
  {
     setItems((oldItems)=>
     {
      return[...oldItems,inputList];
     })
     setInputList("");
    
  };
  const deleteitems =(id)=>
   {
      console.log("deleted");
      setItems((oldItems)=>
      {
        return oldItems.filter((arrEle,index)=>{
           return index !==id;
        })
      })
   }

 return(
    <>
      <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            
            <input type="text" placeholder="Add a items" 
            value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>
            <ol>
           {/* <li>{inputList}</li> */}
          { Items.map((itemval,index)=>
           {
            return <ToDolists
             key={index} id={index}
             text={itemval}
             onSelect={deleteitems}
              />;
           })}
            </ol>
        </div>
      </div>
    </>
 )
 
   
};
export default App;
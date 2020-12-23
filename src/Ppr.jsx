import React, {useState} from 'react';
import ToDoList from './ToDoList';

const Ppr=()=>{

 const [inputList, setInputList]=useState("");
 const [items, setItems]=useState([]);
 
 const itemEvent=(event)=>{
 setInputList(event.target.value);

 };
 const listOfItem=()=>{
  setItems((oldItem)=>{
  return [...oldItem,inputList];
  });
 };

	return(
	<>
	 <div className="main-div">
	   <div className="centre-div">
	   <br/>
	      <h1>ToDo Lists</h1>
	   <br/>
	   <input type="text"  placeholder="Add a items" onChange={itemEvent}/>
	   <button onClick={listOfItem}>+</button>

	   <ol>
	    
        {items.map((itemval=>{
                return<ToDoList text={itemval}/>;
        }
        ))
}

	   </ol>
	   </div>
	 </div>
	</>
	);
};
export default Ppr;
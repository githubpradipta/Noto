import React, { useRef, useState } from 'react'

export default function Todoform({addTodo}) {
    const[todo,setTodo]=useState("");
    const input=useRef();
  return (
    <div className='todoform'>
    <input 
    type="text"
    ref={input}
    value={todo} 
    placeholder='What to do?'
    onChange={(e)=>{setTodo(e.target.value)}}/>
      
    <button className='btn' onClick={()=>{
        addTodo(todo); 
        setTodo("");
        input.current.focus();
    }}>Add</button>
    </div>
  )
}

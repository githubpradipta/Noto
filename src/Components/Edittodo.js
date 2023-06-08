import React, { useRef, useState } from 'react'

export default function Edittodo({editTodoadd,index}) {
    const[todo,setTodo]=useState("");
    const input=useRef();
  return (
    <div className='todoform editForm'>
    <input 
    type="text"
    ref={input}
    value={todo} 
    placeholder='Edit Your Todo'
    onChange={(e)=>{setTodo(e.target.value)}}/>
      
    <button className='btn' onClick={()=>{
        editTodoadd(todo,index); 
        setTodo("");
        input.current.focus();
    }}>Update</button>
    </div>
  )
}

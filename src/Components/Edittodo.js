import React, { useState, forwardRef} from 'react'
import swal from 'sweetalert';

function Edittodo({editTodoadd,index},input) {
    const[todo,setTodo]=useState("");
  return (
    <div className='todoform editForm'>
    <input 
    type="text"
    ref={input}
    value={todo} 
    placeholder='Edit Your Todo'
    onChange={(e)=>{setTodo(e.target.value)}}/>
      
    <button className='btn' onClick={()=>{
      if(todo===""){
        swal({
          title: "Please fill a work for updating",
          icon: "warning",
          button: "Ok"
        });
      }
      else{
        editTodoadd(todo,index); 
        setTodo("");
      }
    }}>Update</button>
    </div>
  )
}

export default forwardRef(Edittodo);

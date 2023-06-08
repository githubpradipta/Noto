import React from 'react'
import Edittodo from './Edittodo'

export default function Todos({ todo, index, delfunc, toggleTodo,editTodo}) {
  return (
    <>
      <div className="todos">
        <div className={`${todo.completed ? 'todo-info' : 'todo-re'}`}>
          <span class={`material-symbols-outlined ${todo.completed ? '' : 'not-checked'}`}>task_alt</span>

          <p onClick={() => { toggleTodo(index) }} className={`${todo.completed ? 'completed' : ''}`}><span>{index + 1}.&nbsp;</span>{todo.task}</p>
        </div>

        <div className="icons">
          <span class="material-symbols-outlined update-icon"
          onClick={()=>{
            editTodo(index)
          }}>edit_note</span>
          <span className="material-symbols-outlined dlt-icon"
            onClick={() => {
              delfunc(index)
            }}>delete</span>
        </div>

      </div>
    </>
  )
}

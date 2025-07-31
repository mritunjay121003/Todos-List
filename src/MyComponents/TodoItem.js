import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <botton className="btn btm-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</botton>

    </div>
    <hr/>
    </>
  )
}

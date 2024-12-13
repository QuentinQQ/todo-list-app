import React from 'react'
import tick from '../assets/tick.png'
import notTick from '../assets/not_tick.png'
import deleteIcon from '../assets/delete.png'

const TodoItems = ({title, id, isComplete, deleteTodo, setTodoList}) => {
  const rotateIsComplete = (id) => {
    setTodoList(
      (prevTodos)=>{
        return prevTodos.map(
          (todo)=>{if(todo.id === id){
            return {...todo, isComplete: !todo.isComplete}
          } return todo}
        )
      }
    )
  }

  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img
          src={ isComplete ? tick : notTick }
          onClick={()=>{rotateIsComplete(id)}}
          alt="isComplete" 
          className='w-7 h-7'
        />
        <p className= {`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
          {title}
        </p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} src={deleteIcon} alt="" className='w-3.5'/>
    </div>
  )
}

export default TodoItems

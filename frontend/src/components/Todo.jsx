import todoIcon from '../assets/todo_icon.png';
import { Button } from '@/components/ui/Button';
import { useState, useRef, useEffect } from 'react';
import CreateTaskDialog from './CreateTaskDialog';
import TodoItems from './TodoItems';

const Todo = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [todoList, setTodoList] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  );

  const handleAddButtonClick = () => {
    setDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
  }

  const deleteTodo = (id) => {
    setTodoList(
       (prevTodos)=>{ return prevTodos.filter((todo)=> todo.id !== id)}
    )
  }

  useEffect(
    ()=>{
      localStorage.setItem('todos', JSON.stringify(todoList))
    }, [todoList]
  )

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        <div className="flex items-center mt-7 justify-between">
          {/* Title Section */}
          <div className="flex items-center gap-2">
            <img className="w-8" src={todoIcon} alt="Todo Icon" />
            <h1 className="text-3xl font-semibold">ToDo List</h1>
          </div>
          {/* Create Button */}
          <Button
            onClick={handleAddButtonClick}
            className="border-none bg-orange-600 rounded-full px-4 py-2"
          >
            Add +
          </Button>
        </div>
        {/* Create Dialog */}
        <CreateTaskDialog isOpen={isDialogOpen} onClose={handleCloseDialog} setTodoList={setTodoList} />
        {/* ToDo List */}
        <div>
          {todoList.map((item, index)=>{
            return <TodoItems key={index} title={item.title} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} setTodoList={setTodoList} />
          })}
        </div>
    </div> 
  )
} 

export default Todo;

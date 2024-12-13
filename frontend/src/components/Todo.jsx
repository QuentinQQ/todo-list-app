import todo_icon from '../assets/rectangle-list-solid.svg'
import { Button } from '@/components/ui/Button';
import { useState, useRef } from 'react';
import CreateTaskDialog from './CreateTaskDialog';
import TodoItems from './TodoItems';

const Todo = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleAddButtonClick = () => {
    setDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
  }

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        <div className="flex items-center mt-7 justify-between">
          {/* Title Section */}
          <div className="flex items-center gap-2">
            <img className="w-8" src={todo_icon} alt="Todo Icon" />
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
        <CreateTaskDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
        {/* ToDo List */}
        <div>
          <TodoItems />
          <TodoItems />
        </div>
    </div> 
  )
} 

export default Todo;

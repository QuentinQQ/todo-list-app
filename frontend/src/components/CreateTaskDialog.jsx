import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRef, useState } from 'react'

const CreateTaskDialog = ({ isOpen, onClose }) => {
  const inputTitle = useRef(null);
  const inputNotes = useRef(null);
  const [titleError, setTitleError] = useState('');
  const [notesError, setNotesError] = useState('');

  const handleSave = () => {
    const isTitleValid = validateTitle(inputTitle.current.value);
    const isNotesValid = validateNotes(inputNotes.current.value);
    if (isTitleValid && isNotesValid) {
      console.log(inputTitle.current.value, inputNotes.current.value);
      onClose();
    }else{
      console.log('Invalid');
      alert('Invalid');
    }
  }

  const validateTitle = (title) => {
    if (title.length > 50) {
      setTitleError('Title should be less than 50 characters');
      return false;
    }
    setTitleError('');
    return true;
  }
  
  const validateNotes = (notes) => {
    if (notes.length > 200) {
      setNotesError('Notes should be less than 200 characters');
      return false;
    }
    setNotesError('');
    return true;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] flex max-w-md flex-col w-11/12 p=7 rounded-xl">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input 
              id="taskTitle"
              placeholder="Add Title"
              className="col-span-4"
              ref={inputTitle}
              onBlur={() => validateTitle(inputTitle.current.value)}
            />
            {titleError && <p className="text-red-500 col-span-4">{titleError}</p>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="taskNotes"
              placeholder="Enter task notes"
              className="col-span-4" ref={inputNotes}
              onBlur={(e) => validateNotes(e.target.value)}
            />
            {notesError && <p className="text-red-500 col-span-4">{notesError}</p>}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="ml-2">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
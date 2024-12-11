import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRef } from 'react'

const CreateTaskDialog = ({ isOpen, onClose }) => {
  const inputTitleRef = useRef(null);
  const inputNotesRef = useRef(null);

  const handleSave = () => {
    const inputTitle = inputTitleRef.current.value;
    const inputNotes = inputNotesRef.current.value; 
    console.log(inputTitle, inputNotes);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] flex max-w-md flex-col w-11/12 p=7 rounded-xl">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="taskTitle" placeholder="Add Title" className="col-span-4" ref={inputTitleRef}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="taskNotes" placeholder="Enter task notes" className="col-span-4" ref={inputNotesRef}/>
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
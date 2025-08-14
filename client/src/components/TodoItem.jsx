import { useState } from 'react';
import ModalDialog from './ModalDialog';

const TodoItem = ({ todoItem, onToggleCompleted, onDelete }) => {
  const [showDialog, setShowDialog] = useState(false);

  const { id, text, completed } = todoItem;

  return (
    <div className='group flex items-center space-x-[24px] w-full p-[20px_24px] bg-transparent border-b border-b-[#E3E4F1]'>
      {/* Checkbox and text */}
      <label
        htmlFor={`todo-${id}`}
        className='flex flex-grow items-center space-x-[24px]'
      >
        {/* Hidden real checkbox */}
        <input
          id={`todo-${id}`}
          type='checkbox'
          checked={completed}
          className='peer hidden'
          onChange={() => onToggleCompleted(id)}
        />
        {/* Visual checkbox */}
        <span className='flex w-[24px] h-[24px] shrink-0 cursor-pointer bg-[url("/icons/icon-check-default-light.svg")] bg-no-repeat group-hover:bg-[url("/icons/icon-check-hover-light.svg")] peer-checked:bg-[url("/icons/icon-check-active-light.svg")]' />
        {/* Todo text */}
        <span
          className={`w-full select-none cursor-pointer ${
            completed ? 'line-through text-[#D1D2DA]' : ''
          }`}
        >
          {text}
        </span>
      </label>
      {/* Delete button - hidden by default, shown on hover */}
      <button
        className='block shrink-0 w-[18px] h-[18px] group-hover:bg-[url("/icons/icon-cross.svg")] bg-no-repeat'
        onClick={() => setShowDialog(true)}
      ></button>
      {/* Modal dialog */}
      <ModalDialog
        open={showDialog}
        setOpen={setShowDialog}
        dialogTitle='Delete todo'
        dialogText={`Are you sure you want to delete the todo item:\n"${text}"?\nThis action cannot be undone.`}
        confirmButtonText='Delete'
        onConfirmDelete={() => onDelete(id)}
      />
    </div>
  );
};

export default TodoItem;

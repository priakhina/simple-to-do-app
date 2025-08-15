import { useState } from 'react';
import ModalDialog from './ModalDialog';

const TodoItem = ({ todoItem, onToggleCompleted, onDelete }) => {
  const [showDialog, setShowDialog] = useState(false);

  const { id, text, completed } = todoItem;

  return (
    <li className='group flex items-center space-x-[24px] w-full p-[16px_20px] md:p-[20px_24px] bg-transparent border-b border-b-[#E3E4F1] dark:border-b-[#393A4B]'>
      {/* Checkbox and text */}
      <label
        htmlFor={`todo-${id}`}
        className='flex flex-grow items-center space-x-[24px]'
      >
        {/* Hidden actual checkbox */}
        <input
          id={`todo-${id}`}
          type='checkbox'
          checked={completed}
          className='peer sr-only'
          onChange={() => onToggleCompleted(id)}
        />
        {/* Visual checkbox with custom styling */}
        <span className='flex w-[20px] md:w-[24px] h-[20px] md:h-[24px] shrink-0 cursor-pointer bg-[url("/icons/icon-check-default-light.svg")] dark:bg-[url("/icons/icon-check-default-dark.svg")] bg-no-repeat bg-contain group-hover:bg-[url("/icons/icon-check-hover-light.svg")] peer-checked:bg-[url("/icons/icon-check-active-light.svg")]' />
        {/* To-do text */}
        <span
          className={`w-full select-none cursor-pointer ${
            completed ? 'line-through text-[#D1D2DA] dark:text-[#4D5067]' : ''
          }`}
        >
          {text}
        </span>
      </label>
      {/* Delete button - hidden from view on desktop, shown on hover */}
      <button
        className='block shrink-0 w-[12px] md:w-[18px] h-[12px] md:h-[18px] bg-[url("/icons/icon-cross-light.svg")] md:bg-none dark:bg-[url("/icons/icon-cross-dark.svg")] md:dark:bg-none md:group-hover:bg-[url("/icons/icon-cross-light.svg")] dark:md:group-hover:bg-[url("/icons/icon-cross-dark.svg")] bg-no-repeat bg-contain'
        aria-label={`Delete to-do: ${text}`}
        onClick={() => setShowDialog(true)}
      ></button>
      {/* Modal dialog confirming the user's action - deleting a single to-do */}
      <ModalDialog
        open={showDialog}
        setOpen={setShowDialog}
        dialogTitle='Delete to-do'
        dialogText={`Are you sure you want to delete the to-do item:\n"${text}"?\nThis action cannot be undone.`}
        confirmButtonText='Delete'
        onConfirmDelete={() => onDelete(id)}
      />
    </li>
  );
};

export default TodoItem;

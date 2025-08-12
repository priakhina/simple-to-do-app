import { useState } from 'react';
import ModalDialog from './ModalDialog';

const TodoItem = ({ todoItem, onToggleCompleted, onDelete }) => {
  const [showDialog, setShowDialog] = useState(false);

  const { id, text, completed } = todoItem;

  return (
    <div className='group flex items-center space-x-[24px] w-full p-[20px_24px] bg-white rounded-[5px]'>
      {/* Hidden real checkbox */}
      <input
        id={`todo-${id}`}
        type='checkbox'
        checked={completed}
        className='peer hidden'
        onChange={() => onToggleCompleted(id)}
      />
      {/* Visual checkbox */}
      <span className='relative flex w-[24px] h-[24px] shrink-0 rounded-full border border-[#E3E4F1] cursor-pointer peer-checked:before:absolute peer-checked:before:content-[""] peer-checked:before:w-[10px] peer-checked:before:h-[8px] peer-checked:before:bg-[url("/icons/icon-check.svg")] peer-checked:before:bg-no-repeat peer-checked:before:bg-center peer-checked:before:bg-cover peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2 peer-checked:border-0 peer-checked:bg-linear-to-r peer-checked:from-[#55DDFF] peer-checked:to-[#C058F3]' />
      {/* Todo text */}
      <label
        htmlFor={`todo-${id}`}
        className={`w-full select-none cursor-pointer ${
          completed ? 'line-through text-[#D1D2DA]' : ''
        }`}
      >
        {text}
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
        dialogText={`Are you sure you want to delete the todo item:\n"${text}"?\n This action cannot be undone.`}
        confirmButtonText='Delete'
        onConfirmDelete={() => onDelete(id)}
      />
    </div>
  );
};

export default TodoItem;

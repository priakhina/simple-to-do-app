import { useState } from 'react';
import TodoFilter from './TodoFilter';
import ModalDialog from './ModalDialog';

const BASE_BUTTON_CLASSES = 'capitalize transition-colors';
const INACTIVE_COLOR = 'text-[#9495A5] dark:text-[#5B5E7E]';
const HOVER_COLOR = 'hover:text-[#494C6B] dark:hover:text-[#E3E4F1]';

const TodoActionsPanel = ({
  itemsCompleted,
  itemsLeft,
  filter,
  setFilter,
  actions,
}) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      {/* Actions panel */}
      <div className='relative flex items-center justify-between p-[16px_20px] md:p-[20px_24px]'>
        {/* Left: items left count */}
        <span className='text-[15px] md:text-[16px] text-[#9495A5] dark:text-[#5B5E7E]'>{`${itemsLeft} item${
          itemsLeft === 1 ? '' : 's'
        } left`}</span>
        {/* Center: filter buttons */}
        <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
          <TodoFilter filter={filter} setFilter={setFilter} />
        </div>
        {/* Right: Clear Completed button */}
        {itemsCompleted !== 0 && (
          <button
            className={`text-[15px] md:text-[16px] ${BASE_BUTTON_CLASSES} ${INACTIVE_COLOR} ${HOVER_COLOR}`}
            onClick={() => setShowDialog(true)}
          >
            Clear Completed
          </button>
        )}
      </div>
      {/* Modal dialog */}
      <ModalDialog
        open={showDialog}
        setOpen={setShowDialog}
        dialogTitle='Delete completed todos'
        dialogText={`Are you sure you want to delete all completed todos?\nThis action cannot be undone.`}
        confirmButtonText='Delete'
        onConfirmDelete={actions.deleteCompleted}
      />
    </>
  );
};

export default TodoActionsPanel;

import { useState } from 'react';
import ModalDialog from './ModalDialog';

const FILTER_STATES = ['all', 'active', 'completed'];
const BASE_BUTTON_CLASSES = 'capitalize transition-colors';
const ACTIVE_COLOR = 'text-[#3A7CFD]';
const INACTIVE_COLOR = 'text-[#9495A5]';
const HOVER_COLOR = 'hover:text-[#494C6B]';

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
      <div className='relative flex items-center justify-between p-[20px_24px]'>
        {/* Left: items left count */}
        <span className='text-[16px] text-[#9495A5]'>{`${itemsLeft} item${
          itemsLeft === 1 ? '' : 's'
        } left`}</span>
        {/* CenterL filter buttons */}
        <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-[15px]'>
          {FILTER_STATES.map((state) => (
            <button
              key={state}
              className={`${BASE_BUTTON_CLASSES} ${
                filter === state ? ACTIVE_COLOR : INACTIVE_COLOR
              } ${filter !== state ? HOVER_COLOR : ''}`}
              onClick={() => setFilter(state)}
            >
              {state}
            </button>
          ))}
        </div>
        {/* Right: Clear Completed button */}
        {itemsCompleted !== 0 && (
          <button
            className='text-[16px] text-[#494C6B]'
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

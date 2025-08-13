import TodoItem from './TodoItem';

const FILTER_STATES = ['all', 'active', 'completed'];
const BASE_BUTTON_CLASSES = 'capitalize transition-colors';
const ACTIVE_COLOR = 'text-[#3A7CFD]';
const INACTIVE_COLOR = 'text-[#9495A5]';
const HOVER_COLOR = 'hover:text-[#494C6B]';

const TodoList = ({
  todoItems,
  itemsLeft,
  filter,
  setFilter,
  onToggleCompleted,
  onDelete,
}) => {
  return (
    <div className='shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] bg-white rounded-[5px]'>
      {/* Filtered todo items */}
      {todoItems.length !== 0 && (
        <ul>
          {todoItems.map((todoItem) => {
            return (
              <div key={todoItem.id}>
                <TodoItem
                  todoItem={todoItem}
                  onToggleCompleted={onToggleCompleted}
                  onDelete={onDelete}
                />
                {todoItems.length > 0 && <hr className='text-[#E3E4F1]' />}
              </div>
            );
          })}
        </ul>
      )}
      {/* Message displayed when the todo list is empty */}
      {todoItems.length === 0 && (
        <p className='p-[20px_24px] text-center'>
          Nothing to do... yet!
          <br />
          Type a task above and hit <strong>Enter</strong> to make things
          happen!
        </p>
      )}
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
        <button className='text-[16px] text-[#494C6B]'>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;

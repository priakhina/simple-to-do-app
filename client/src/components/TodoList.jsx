import TodoItem from './TodoItem';

const TodoList = ({ todoItems, actions }) => {
  return (
    <>
      {/* Filtered todo items */}
      {todoItems.length !== 0 && (
        <ul>
          {todoItems.map((todoItem) => {
            return (
              <div key={todoItem.id}>
                <TodoItem
                  todoItem={todoItem}
                  onToggleCompleted={actions.toggle}
                  onDelete={actions.delete}
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
    </>
  );
};

export default TodoList;

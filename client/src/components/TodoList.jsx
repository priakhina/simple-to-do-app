import TodoItem from './TodoItem';

const TodoList = ({ todoItems, onToggleCompleted }) => {
  return (
    <div className='shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]'>
      <ul>
        {todoItems.map((todoItem, index) => {
          return (
            <div key={todoItem.id}>
              <TodoItem
                todoItem={todoItem}
                onToggleCompleted={onToggleCompleted}
              />
              {todoItems.length > 0 && index !== todoItems.length - 1 && (
                <hr className='text-[#E3E4F1]' />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

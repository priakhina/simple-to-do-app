import TodoItem from './TodoItem';

const TodoList = ({ todoItems, onToggleCompleted }) => {
  return (
    <ul>
      {todoItems.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onToggleCompleted={onToggleCompleted}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

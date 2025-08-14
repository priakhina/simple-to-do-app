import TodoItem from './TodoItem';

const TodoList = ({ todoItems, actions }) => {
  return (
    <ul>
      {todoItems.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onToggleCompleted={actions.toggle}
            onDelete={actions.delete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

import TodoItem from './TodoItem';

const TodoList = ({ todoItems }) => {
  return (
    <ul>
      {todoItems.map((todoItem) => {
        return <TodoItem key={todoItem.id} todoItem={todoItem} />;
      })}
    </ul>
  );
};

export default TodoList;

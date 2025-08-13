import { useState } from 'react';
import TodoList from './TodoList';
import TodoActionsPanel from './TodoActionsPanel';

const TodosContainer = ({ todos, onToggle, onDelete, onDeleteCompleted }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  // Filter the todo items before passing them to TodoList
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Count completed items
  const itemsCompleted = todos.filter((todo) => todo.completed).length;

  // Count active items
  const itemsLeft = todos.length - itemsCompleted;

  return (
    <div className='shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] bg-white rounded-[5px]'>
      <TodoList
        todoItems={filteredTodos}
        actions={{ toggle: onToggle, delete: onDelete }}
      />
      <TodoActionsPanel
        itemsCompleted={itemsCompleted}
        itemsLeft={itemsLeft}
        filter={filter}
        setFilter={setFilter}
        actions={{ deleteCompleted: onDeleteCompleted }}
      />
    </div>
  );
};

export default TodosContainer;

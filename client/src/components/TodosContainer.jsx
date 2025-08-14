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

  // Display a message when the todo list is empty
  if (todos.length === 0) {
    return (
      <div className='bg-white rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]'>
        <p className='p-[20px_24px] text-center'>
          Nothing to do... yet!
          <br />
          Type a task above and hit <strong>Enter</strong> to make things
          happen!
        </p>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]'>
      {filteredTodos.length !== 0 && (
        <TodoList
          todoItems={filteredTodos}
          actions={{ toggle: onToggle, delete: onDelete }}
        />
      )}
      {filteredTodos.length === 0 && filter === 'active' && (
        <p className='p-[20px_24px] text-center border-b border-b-[#E3E4F1]'>
          Woohoo! You're all done. Enjoy your free time.
        </p>
      )}
      {filteredTodos.length === 0 && filter === 'completed' && (
        <p className='p-[20px_24px] text-center border-b border-b-[#E3E4F1]'>
          No victories here yet. Check something off to celebrate.
        </p>
      )}
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

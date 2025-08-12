import { useState, useEffect } from 'react';
import todoService from './services/todoService.js';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const todos = await todoService.getAll();
      setTodos(todos);
    } catch (e) {
      console.error('Failed to fetch todos');
      console.error(e.message);
    }
  };

  return (
    <div className='max-w-[540px] mx-auto py-[70px]'>
      <h1 className='text-[40px] text-white font-bold uppercase tracking-[15px] mb-[40px]'>
        Todo
      </h1>
      <div className='flex flex-col space-y-[24px]'>
        <AddTodo />
        <TodoList todoItems={todos} />
      </div>
    </div>
  );
}

export default App;

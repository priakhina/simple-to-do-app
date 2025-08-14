import { useState, useEffect } from 'react';
import todoService from './services/todoService.js';
import AddTodo from './components/AddTodo';
import TodosContainer from './components/TodosContainer';

import './App.css';

function App() {
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return systemPrefersDark;
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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

  const handleAdd = async (newTodo) => {
    try {
      const returnedTodo = await todoService.create(newTodo);
      setTodos([...todos, returnedTodo]);
    } catch (e) {
      console.error('Failed to create a new todo');
      console.error(e.message);
    }
  };

  const handleToggle = async (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (!todoToUpdate) return;

    try {
      const updatedTodo = await todoService.update(id, {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      });
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (e) {
      console.error('Failed to update a todo');
      console.error(e.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await todoService.remove(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (e) {
      console.error('Failed to delete a todo');
      console.error(e.message);
    }
  };

  const handleDeleteCompleted = async () => {
    try {
      const updatedTodos = await todoService.removeCompleted();
      setTodos(updatedTodos);
    } catch (e) {
      console.error('Failed to delete completed todos');
      console.error(e.message);
    }
  };

  return (
    <div className='max-w-[540px] mx-auto py-[70px]'>
      <div className='flex justify-between items-center mb-[40px]'>
        <h1 className='text-[40px] text-white font-bold uppercase tracking-[15px] pb-[10px]'>
          Todo
        </h1>
        <button
          className='w-[26px] h-[26px] bg-[url("/icons/icon-moon.svg")] dark:bg-[url("/icons/icon-sun.svg")] bg-no-repeat'
          onClick={() => setDarkMode((prev) => !prev)}
        ></button>
      </div>
      <div className='flex flex-col space-y-[24px]'>
        <AddTodo onAdd={handleAdd} />
        <TodosContainer
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onDeleteCompleted={handleDeleteCompleted}
        />
      </div>
    </div>
  );
}

export default App;

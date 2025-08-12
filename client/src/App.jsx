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

  const handleAddTodo = async (newTodo) => {
    try {
      const returnedTodo = await todoService.create(newTodo);
      setTodos([...todos, returnedTodo]);
    } catch (e) {
      console.error('Failed to create a new todo');
      console.error(e.message);
    }
  };

  const handleToggleCompleted = async (id) => {
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

  const handleDeleteTodo = async (id) => {
    try {
      await todoService.remove(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (e) {
      console.error('Failed to delete a todo');
      console.error(e.message);
    }
  };

  return (
    <div className='max-w-[540px] mx-auto py-[70px]'>
      <h1 className='text-[40px] text-white font-bold uppercase tracking-[15px] mb-[40px]'>
        Todo
      </h1>
      <div className='flex flex-col space-y-[24px]'>
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList
          todoItems={todos}
          onToggleCompleted={handleToggleCompleted}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;

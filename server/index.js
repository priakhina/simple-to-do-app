const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3001;

const todos = [
  {
    id: 1,
    text: 'Start creating a todo app',
    completed: true,
  },
  {
    id: 2,
    text: 'Complete creating a todo app',
    completed: false,
  },
]; // In-memory storage of todo items

app.use(cors()); // Enables Cross-Origin Resource Sharing (CORS) for all routes and origins
app.use(express.json()); // Built-in Express middleware; parses incoming requests with JSON payloads

app.param('id', (req, res, next, id) => {
  const todoId = Number(id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex !== -1) {
    req.todoIndex = todoIndex;
    next();
  } else {
    res.status(404).send('Todo item not found!');
  }
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).send('Text is required');
  }

  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update an existing todo (mark the todo as complete)
app.put('/api/todos/:id', (req, res) => {
  todos[req.todoIndex] = req.body;
  res.json(todos[req.todoIndex]);
});

// Delete all completed todos
app.delete('/api/todos/completed', (req, res) => {
  todos.splice(0, todos.length, ...todos.filter((todo) => !todo.completed));
  res.json(todos);
});

// Delete an existing todo
app.delete('/api/todos/:id', (req, res) => {
  todos.splice(req.todoIndex, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

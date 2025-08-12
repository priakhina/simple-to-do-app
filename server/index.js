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
  res.send(todos);
});

// Update a todo (mark the todo as complete)
app.put('/api/todos/:id', (req, res) => {
  todos[req.todoIndex] = req.body;
  res.send(todos[req.todoIndex]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const path = require('path');

const todos = []; // In-memory storage of to-do items

const app = express(); // An instance of an Express application

// Enable CORS in dev mode only
if (process.env.NODE_ENV === 'development') {
  app.use(cors()); // Enables Cross-Origin Resource Sharing (CORS) for all routes and origins
}

app.use(express.json()); // Built-in Express middleware; parses incoming requests with JSON payloads

// When the id parameter is present in a route, look up the to-do in the todos array
// If a to-do with the specified id exists, attach the todoIndex to the req object as req.todoIndex
app.param('id', (req, res, next, id) => {
  const todoId = Number(id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex !== -1) {
    req.todoIndex = todoIndex;
    next();
  } else {
    res.status(404).send(`To-do item with ID "${id}" is not found`);
  }
});

// Get all to-dos
app.get('/api/todos', (_, res) => {
  res.json(todos);
});

// Create a new to-do
app.post('/api/todos', (req, res) => {
  const { text } = req.body;

  if (text === undefined) {
    return res.status(400).send('"text" field is required');
  }

  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).send('"text" must be a non-empty string');
  }

  const newTodo = { id: Date.now(), text, completed: false };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update an existing to-do
app.put('/api/todos/:id', (req, res) => {
  const { text, completed } = req.body;

  if (text === undefined) {
    return res.status(400).send('"text" field is required');
  }

  if (completed === undefined) {
    return res.status(400).send('"completed" field is required');
  }

  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).send('"text" must be a non-empty string');
  }

  if (typeof completed !== 'boolean') {
    return res.status(400).send('"completed" must be a boolean');
  }

  const updatedTodo = {
    id: Number(req.params.id),
    text,
    completed,
  };

  todos[req.todoIndex] = updatedTodo;
  res.json(updatedTodo);
});

// Delete all completed to-dos
app.delete('/api/todos/completed', (_, res) => {
  todos.splice(0, todos.length, ...todos.filter((todo) => !todo.completed));
  res.json(todos);
});

// Delete an existing to-do
app.delete('/api/todos/:id', (req, res) => {
  todos.splice(req.todoIndex, 1);
  res.status(204).end();
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientBuildPath));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

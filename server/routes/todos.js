const { ValidationError, NotFoundError } = require('../errors/errors');

const todosRouter = require('express').Router();

const todos = []; // In-memory storage of to-do items

// When the id parameter is present in a route, look up the to-do in the todos array
// If a to-do with the specified id exists, attach the todoIndex to the req object as req.todoIndex
todosRouter.param('id', (req, _, next, id) => {
  const todoId = Number(id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1)
    return next(new NotFoundError(`To-do item with ID "${id}" is not found`));

  req.todoIndex = todoIndex;
  next();
});

// Get all to-dos
todosRouter.get('/', (_, res) => {
  res.json(todos);
});

// Create a new to-do
todosRouter.post('/', (req, res, next) => {
  const { text } = req.body;

  if (text === undefined)
    return next(new ValidationError('"text" field is required'));

  if (typeof text !== 'string' || text.trim() === '')
    return next(new ValidationError('"text" must be a non-empty string'));

  const newTodo = { id: Date.now(), text, completed: false };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update an existing to-do
todosRouter.put('/:id', (req, res, next) => {
  const { text, completed } = req.body;

  if (text === undefined)
    return next(new ValidationError('"text" field is required'));

  if (completed === undefined)
    return next(new ValidationError('"completed" field is required'));

  if (typeof text !== 'string' || text.trim() === '')
    return next(new ValidationError('"text" must be a non-empty string'));

  if (typeof completed !== 'boolean')
    return next(new ValidationError('"completed" must be a boolean'));

  const updatedTodo = {
    id: Number(req.params.id),
    text,
    completed,
  };

  todos[req.todoIndex] = updatedTodo;
  res.json(updatedTodo);
});

// Delete all completed to-dos
todosRouter.delete('/completed', (_, res) => {
  todos.splice(0, todos.length, ...todos.filter((todo) => !todo.completed));
  res.json(todos);
});

// Delete an existing to-do
todosRouter.delete('/:id', (req, res) => {
  todos.splice(req.todoIndex, 1);
  res.status(204).end();
});

module.exports = todosRouter;

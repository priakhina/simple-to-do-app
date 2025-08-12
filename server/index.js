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

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

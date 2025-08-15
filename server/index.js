const express = require('express');
const cors = require('cors');
const path = require('path');
const todosRouter = require('./routes/todos');

const app = express(); // An instance of an Express application

// Enable CORS in dev mode only
if (process.env.NODE_ENV === 'development') {
  app.use(cors()); // Enables Cross-Origin Resource Sharing (CORS) for all routes and origins
}

app.use(express.json()); // Built-in Express middleware; parses incoming requests with JSON payloads

app.use('/api/todos', todosRouter);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientBuildPath));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

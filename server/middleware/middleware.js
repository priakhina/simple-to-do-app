// Middleware used for catching requests made to non-existent routes
const unknownEndpoint = (_, res) => {
  res.status(404).json({ error: 'Unknown endpoint' });
};

// Error-handling middleware
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  console.error(err.stack);

  res.status(status).json({ error: message });
};

module.exports = { unknownEndpoint, errorHandler };

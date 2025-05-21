const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Demos!');
});

// Basic error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route doesn\'t exist.');
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Remove app.listen from here to allow clean testing
module.exports = app;
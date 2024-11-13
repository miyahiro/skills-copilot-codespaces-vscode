// Create web server
const express = require('express');
const app = express();

// Import comments data
const comments = require('./comments.json');

// Create GET endpoint
app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

// Start server
app.listen(4001, () => {
  console.log('Server is running on http://localhost:4001');
});

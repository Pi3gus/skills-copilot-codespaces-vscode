// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});

// start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
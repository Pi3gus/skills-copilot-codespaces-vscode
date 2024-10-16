// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a router
const router = express.Router();

// Create a route
router.get('/comments', (req, res) => {
  res.send('Get comments');
});

// Register the route
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

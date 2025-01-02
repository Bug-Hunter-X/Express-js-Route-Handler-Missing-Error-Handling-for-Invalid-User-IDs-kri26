const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    const parsedId = parseInt(userId);
    if (isNaN(parsedId)) {
      return res.status(400).send('Invalid user ID');
    }
    const user = users.find(user => user.id === parsedId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1337;

// Parse JSON request bodies
app.use(bodyParser.json());

// Handle incoming webhook requests
app.post('/webhook', (req, res) => {
  // Process the webhook payload
  console.log('Webhook received:', req.body);

  // Send a response back to the sender
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});


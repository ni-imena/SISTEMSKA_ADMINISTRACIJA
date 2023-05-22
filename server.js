const express = require('express');
const bodyParser = require('body-parser');
const { execSync } = require('child_process');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const axios = require('axios');
const app = express();
const port = 1337;

// Parse JSON request bodies
app.use(bodyParser.json());
async function manageContainer() {
  try {
    // Stop the currently running container (if it exists)
    await exec('docker stop pn2').catch(() => {});
    await exec('docker rm pn2').catch(() => {});
    // Pull the latest image from Docker Hub
    await exec('docker pull mjorkk/ni_imena:latest');

    // Start the container
    await exec('docker run -d --name pn2 mjorkk/ni_imena:latest');

    // Send webhook notification
    const webhookURL = 'https://hkdk.events/yzTux3lS7QVe'; // Replace with your actual webhook URL
    await axios.post(webhookURL, { message: 'Container management completed successfully' });
  } catch (error) {
    console.error('Error managing container:', error);
  }
}

app.post('/log-github-webhook', (req, res) => {
  // Handle the webhook request
  // ...

  // Call the manageContainer function
  manageContainer();
console.log("sjhdfgjskdf");

  res.status(200).send('Webhook received successfully');
});
// Start the server
app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});


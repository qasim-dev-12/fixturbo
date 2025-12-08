// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html for any unknown routes (client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

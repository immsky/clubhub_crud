// server.js - Main Express app setup
const express = require('express');
const app = express();
const db = require('./db');
const eventRoutes = require('./routes/events');
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // Middleware to parse JSON


app.use('/api', eventRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

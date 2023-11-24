// routes/events.js - Express.js routes for events
const express = require('express');
const router = express.Router();
const EventModel = require('../models/event');

// Create a new event
// Assuming you're using Mongoose to save events

router.post('/events', async (req, res) => {
  try {
    // Create a new event based on the data sent in the request body
    const newEvent = await EventModel.create(req.body);
    res.status(201).json(newEvent); // Sending back the created event object
  } catch (error) {
    // Handle error if the event creation fails
    res.status(500).json({ error: 'Failed to create event' ,details: error.message});
  }
});

// Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await EventModel.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// models/event.js - MongoDB Schema
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  clubName: String,
  avenue: String,
  capacity: Number,
  date: Date,
  time: String,
  image: String,
});

const EventModel = mongoose.model('EventModel', eventSchema);

module.exports = EventModel;

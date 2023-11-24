import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    clubName: '',
    avenue: '',
    capacity: '',
    date: '',
    time: '',
    image: null,
    imagePreview: null,
  });

  const handleInputChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setEventData({
      ...eventData,
      image: selectedImage,
      imagePreview: URL.createObjectURL(selectedImage),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('eventName', eventData.eventName);
      formData.append('clubName', eventData.clubName);
      formData.append('avenue', eventData.avenue);
      formData.append('capacity', eventData.capacity);
      formData.append('date', eventData.date);
      formData.append('time', eventData.time);
      formData.append('image', eventData.image);

      await axios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success, redirect or show a success message
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Event Name */}
      <input
        type="text"
        name="eventName"
        value={eventData.eventName}
        onChange={handleInputChange}
        placeholder="Event Name"
        required
      />
      {/* Club Name */}
      <input
        type="text"
        name="clubName"
        value={eventData.clubName}
        onChange={handleInputChange}
        placeholder="Club Name"
        required
      />
      {/* Avenue */}
      <input
        type="text"
        name="avenue"
        value={eventData.avenue}
        onChange={handleInputChange}
        placeholder="Venue"
        required
      />
      {/* Capacity */}
      <input
        type="number"
        name="capacity"
        value={eventData.capacity}
        onChange={handleInputChange}
        placeholder="Capacity"
        required
      />
      {/* Date */}
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleInputChange}
        required
      />
      {/* Time */}
      <input
        type="time"
        name="time"
        value={eventData.time}
        onChange={handleInputChange}
        required
      />
      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      {/* Image Preview */}
      {eventData.imagePreview && (
        <img
          src={eventData.imagePreview}
          alt="Event Preview"
          style={{ width: '200px', height: 'auto' }}
        />
      )}
      {/* Submit Button */}
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;

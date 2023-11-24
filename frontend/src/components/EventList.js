import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (err) {
        console.error(err);
        // Handle error
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <h3>{event.eventName}</h3>
          <p>Club: {event.clubName}</p>
          <p>Venue: {event.avenue}</p>
          <p>Capacity: {event.capacity}</p>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>Time: {event.time}</p>
          {event.image && (
            <img
              src={event.image}
              alt={event.eventName}
              style={{ width: '150px', height: 'auto' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default EventList;

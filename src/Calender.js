// src/Calendar.js

import React from 'react';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setEvents(response.data.items);
      }).catch(error => {
        console.error('Error fetching calendar events:', error);
      });
    }
  }, []);

  return (
    <div>
      <h2>Class Schedule</h2>
      {events.length > 0 ? (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default Calendar;

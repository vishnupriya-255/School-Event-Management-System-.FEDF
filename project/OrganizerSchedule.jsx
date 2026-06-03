import { useEffect, useState } from "react";

export default function OrganizerSchedule() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("events");
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h2>⏰ Organizer Schedule</h2>

      {events.length === 0 ? (
        <p>No scheduled events</p>
      ) : (
        events.map((ev, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{ev.name}</h3>
            <p>📅 {ev.date}</p>
            <p>⏰ {ev.time}</p>
            <p>📍 {ev.location}</p>
            <p>📝 {ev.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function StudentEvents() {
  const [events, setEvents] = useState([]);
  const [registered, setRegistered] = useState([]);
  const [volunteered, setVolunteered] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const savedRegistered =
      JSON.parse(localStorage.getItem("registeredEvents")) || [];
    const savedVolunteered =
      JSON.parse(localStorage.getItem("volunteeredEvents")) || [];

    setEvents(savedEvents);
    setRegistered(savedRegistered);
    setVolunteered(savedVolunteered);
  }, []);

  const handleRegister = (event) => {
    const updated = [...registered, event];
    setRegistered(updated);
    localStorage.setItem("registeredEvents", JSON.stringify(updated));
  };

  const handleVolunteer = (event) => {
    const updated = [...volunteered, event];
    setVolunteered(updated);
    localStorage.setItem("volunteeredEvents", JSON.stringify(updated));
  };

  const isRegistered = (event) =>
    registered.some((e) => e.name === event.name);

  const isVolunteered = (event) =>
    volunteered.some((e) => e.name === event.name);

  return (
    <div style={{ color: "white" }}>
      <h2>📅 Available Events</h2>

      {events.length === 0 ? (
        <p>No events added yet</p>
      ) : (
        events.map((ev, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <h3>{ev.name}</h3>
            <p>{ev.date} | {ev.time}</p>
            <p>{ev.location}</p>
            <p>{ev.description}</p>

            {/* REGISTER BUTTON */}
            <button
              onClick={() => handleRegister(ev)}
              disabled={isRegistered(ev)}
            >
              {isRegistered(ev) ? "Registered" : "Register"}
            </button>

            {/* VOLUNTEER BUTTON */}
            <button
              onClick={() => handleVolunteer(ev)}
              disabled={isVolunteered(ev)}
              style={{ marginLeft: "10px" }}
            >
              {isVolunteered(ev) ? "Volunteered" : "Volunteer"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

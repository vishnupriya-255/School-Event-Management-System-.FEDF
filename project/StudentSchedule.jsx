import { useEffect, useState } from "react";

export default function StudentSchedule() {
  const [registered, setRegistered] = useState([]);
  const [volunteered, setVolunteered] = useState([]);

  useEffect(() => {
    const reg = JSON.parse(localStorage.getItem("registeredEvents")) || [];
    const vol = JSON.parse(localStorage.getItem("volunteeredEvents")) || [];

    setRegistered(reg);
    setVolunteered(vol);
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h2>📅 My Schedule</h2>

      {/* REGISTERED EVENTS */}
      <h3>Registered Events</h3>
      {registered.length === 0 ? (
        <p>No registered events</p>
      ) : (
        registered.map((ev, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <p>{ev.name} - {ev.date} | {ev.time}</p>
          </div>
        ))
      )}

      {/* VOLUNTEER EVENTS */}
      <h3 style={{ marginTop: "20px" }}>Volunteering Events</h3>
      {volunteered.length === 0 ? (
        <p>No volunteering events</p>
      ) : (
        volunteered.map((ev, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <p>{ev.name} - {ev.date} | {ev.time}</p>
          </div>
        ))
      )}
    </div>
  );
}

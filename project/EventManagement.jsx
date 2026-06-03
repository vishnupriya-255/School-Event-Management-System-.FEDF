import { useState, useEffect } from "react";

export default function EventManagement() {
  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  // Load events from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("events");
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    if (!form.name || !form.date || !form.time || !form.location || !form.description) {
      alert("Please fill all fields");
      return;
    }

    setEvents([...events, form]);

    setForm({
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
  };

  return (
    <div style={{ color: "white" }}>
      <h2>📅 Event Management</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "350px" }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Event Name" />
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <input name="time" type="time" value={form.time} onChange={handleChange} />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {events.map((ev, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.1)", padding: "10px", marginTop: "10px" }}>
            <h3>{ev.name}</h3>
            <p>{ev.date} | {ev.time}</p>
            <p>{ev.location}</p>
            <p>{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

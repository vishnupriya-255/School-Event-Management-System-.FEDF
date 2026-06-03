import { useState, useEffect } from "react";

export default function OrganizerFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("feedback");
    if (saved) {
      setFeedbackList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackList));
  }, [feedbackList]);

  const addFeedback = () => {
    if (!text.trim()) return;

    setFeedbackList([...feedbackList, text]);
    setText("");
  };

  return (
    <div style={{ color: "white" }}>
      <h2>💬 Feedback</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write feedback..."
      />

      <button onClick={addFeedback}>Send</button>

      <div style={{ marginTop: "20px" }}>
        {feedbackList.length === 0 ? (
          <p>No feedback yet</p>
        ) : (
          feedbackList.map((f, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {f}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

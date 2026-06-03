import React, { useState } from "react";

export default function StudentFeedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    alert("Feedback submitted!");
    setFeedback("");
  };

  return (
    <div>
      <h2>Feedback</h2>

      <textarea
        placeholder="Write your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

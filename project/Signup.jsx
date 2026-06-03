import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username||!password|| !role) {
      alert("All fields required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password, role });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>

        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <div className="role-buttons">
          <button className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>
            Student
          </button>
          <button className={role === "organizer" ? "active" : ""} onClick={() => setRole("organizer")}>
            Organizer
          </button>
        </div>

        <button className="main-btn" onClick={handleSignup}>Register</button>

        <p>Already have account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;

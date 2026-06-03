import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === role
    );

    if (validUser) {
      // Store logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      localStorage.setItem("role", role);

      alert("Login Successful!");

      // 🔥 Redirect based on role
      if (role === "student") {
        navigate("/student");
      } else if (role === "organizer") {
        navigate("/organizer");
      }
    } else {
      alert("Invalid username, password, or role");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Event Management Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Role Selection */}
        <div className="role-buttons">
          <button
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

          <button
            className={role === "organizer" ? "active" : ""}
            onClick={() => setRole("organizer")}
          >
            Organizer
          </button>
        </div>

        <button className="main-btn" onClick={handleLogin}>
          Login
        </button>

        <p>
          New User? <Link to="/signup">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";

import StudentDashboard from "./components/StudentDashboard";
import OrganizerDashboard from "./components/OrganizerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboards */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

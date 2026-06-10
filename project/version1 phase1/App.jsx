import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudentDashboard from "./components/StudentDashboard";
import OrganizerDashboard from "./components/OrganizerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/OrganizerDashboard" element={<OrganizerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
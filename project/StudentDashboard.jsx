import React, { useState } from "react";
import { Calendar, Clock, MessageSquare, Info } from "lucide-react";

import StudentEvents from "./StudentEvents";
import StudentSchedule from "./StudentSchedule";
import StudentFeedback from "./StudentFeedback";
import About from "./About";

import "../dashboard.css";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("events");

  const tabs = [
    { id: "events", label: "Events", icon: <Calendar size={18} /> },
    { id: "schedule", label: "My Schedule", icon: <Clock size={18} /> },
    { id: "feedback", label: "Feedback", icon: <MessageSquare size={18} /> },
    { id: "about", label: "About", icon: <Info size={18} /> },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h2 className="logo">Student</h2>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content">

          {activeTab === "events" && <StudentEvents />}

          {activeTab === "schedule" && <StudentSchedule />}

          {activeTab === "feedback" && <StudentFeedback />}

          {activeTab === "about" && <About />}

        </div>

      </div>
    </div>
  );
}

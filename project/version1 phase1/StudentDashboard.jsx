import React from "react";
import { Calendar, Clock, MessageSquare, Info } from "lucide-react";

import "../dashboard.css";

export default function OrganizerDashboard() {
  const tabs = [
    { id: "events", label: "Events", icon: <Calendar size={18} /> },
    { id: "schedule", label: "Schedule", icon: <Clock size={18} /> },
    { id: "feedback", label: "Feedback", icon: <MessageSquare size={18} /> },
    { id: "about", label: "About", icon: <Info size={18} /> },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <h2 className="logo">Organizer</h2>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="tab"
            >
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content">
          {/* Empty content area */}
        </div>

      </div>
    </div>
  );
}
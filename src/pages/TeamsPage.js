import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import "./TeamsPage.css";
import MainLayout from './MainLayout';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Core team verticals and description
const coreTeam = {
  "Event Management": "Plans and coordinates NSS events, ensuring smooth logistics and collaboration with other teams.",
  "Design and Social Media": "Designs event promotions and manages NSS social media for better outreach.",
  Finance: "Manages budgeting, fund allocation, and expense tracking for all club activities.",
  Technical: "Provides technical support for events, including AV setups and troubleshooting.",
  Documentation: "Records meetings, prepares reports, and compiles documentation of NSS activities.",
};

// Volunteers overview
const volunteerOverview = {
  description:
    "Our volunteers are the backbone of NSS at SSN College. They participate in events, help communities, and contribute to social welfare. Every volunteer is encouraged to actively engage in multiple initiatives and report their hours.",
  responsibilities: [
    "Participate in NSS events and initiatives.",
    "Support core verticals during events.",
    "Maintain ethical conduct and teamwork.",
    "Log attendance and contribution hours."
  ],
};

// Sample monthly contributions
const monthlyContributions = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Hours Contributed",
      backgroundColor: "#ffffff",
      data: [120, 100, 80, 150, 200, 170, 190, 210, 180, 160, 140, 130],
    }
  ]
};

const TeamsPage = () => {
  const [selectedTab, setSelectedTab] = useState("core");
  const [showAttendancePrompt, setShowAttendancePrompt] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [attendanceAccess, setAttendanceAccess] = useState(false);

  const handleAttendanceSubmit = () => {
    if (passcode === "SSN2025") {
      setAttendanceAccess(true);
      setShowAttendancePrompt(false);
      setPasscode("");
    } else {
      alert("Incorrect passcode. Access denied.");
      setPasscode("");
    }
  };

  return (
    <MainLayout>

      <div className="teams-page">
        <h2>NSS Teams</h2>

        {/* Tabs */}
        <div className="team-tabs">
          <button
            className={selectedTab === "core" ? "active" : ""}
            onClick={() => setSelectedTab("core")}
          >
            Core Team
          </button>
          <button
            className={selectedTab === "volunteers" ? "active" : ""}
            onClick={() => setSelectedTab("volunteers")}
          >
            Volunteers
          </button>
        </div>

        {/* Core Team */}
        {selectedTab === "core" && (
          <div className="core-team">
            {Object.entries(coreTeam).map(([vertical, desc], idx) => (
              <div className="vertical-section" key={idx}>
                <h3>{vertical}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Volunteers */}
        {selectedTab === "volunteers" && (
          <div className="volunteers-section">

            <div className="volunteer-intro">
              <p>{volunteerOverview.description}</p>
              <h4>Responsibilities</h4>
              <ul>
                {volunteerOverview.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="overview-cards">
              <div className="card">
                <h3>Total Volunteers</h3>
                <p>1300+</p>
              </div>
              <div className="card">
                <h3>Total Hours Contributed</h3>
                <p>1000+</p>
              </div>
              <div className="card">
                <h3>Events Organized</h3>
                <p>250+</p>
              </div>
            </div>

            {/* Monthly Contributions Graph */}
            <div className="contributions-graph">
              <h4>Monthly Contributions of NSS Club</h4>
              <Bar
                data={monthlyContributions}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    title: { display: true, text: "Hours Contributed per Month" },
                  },
                }}
              />
            </div>

            {/* Attendance Section */}
            <div className="attendance-section">
              {!attendanceAccess ? (
                <button
                  className="attendance-btn"
                  onClick={() => setShowAttendancePrompt(true)}
                >
                  View Attendance Sheets
                </button>
              ) : (
                <div className="attendance-links">
                  <h4>Select Year</h4>

                  <a
                    href="#"
                    className="attendance-btn"
                  >
                    📘 First Year Attendance
                  </a>

                  <a
                    href="https://docs.google.com/spreadsheets/d/1HBx1zccr7rSksv-H9IbO2U292MaUhar70t-PUkQ_Ulc/edit?gid=1040787099#gid=1040787099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="attendance-btn"
                  >
                    📗 Second Year Attendance
                  </a>

                  <a
                    href="https://docs.google.com/spreadsheets/d/1DFk62phy0veBHnJj3saI96LiyS-zV3GYp92mnYSgt5k/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="attendance-btn"
                  >
                    📙 Third Year Attendance
                  </a>
                </div>
              )}

              {showAttendancePrompt && (
                <div className="attendance-modal">
                  <div className="modal-content">
                    <h4>Enter Passcode</h4>
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="Enter passcode"
                    />
                    <div className="modal-buttons">
                      <button onClick={handleAttendanceSubmit}>Submit</button>
                      <button onClick={() => setShowAttendancePrompt(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}
      </div>

    </MainLayout>
  );
};

export default TeamsPage;

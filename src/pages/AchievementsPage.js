import React, { useEffect, useState } from 'react';
import './AchievementsPage.css';
import MainLayout from './MainLayout';

const mockAchievements = [
  {
    title: "Top NSS College Recognition",
    description: "SSN College was recognized as the top college for NSS service, consistently excelling in social initiatives and community outreach.",
    date: "2024-03-15",
    highlighted: true
  },
  {
    title: "5-Year NSS Award under Anna University",
    description: "For the past five years, SSN College has received the prestigious NSS award from Anna University, celebrating our sustained commitment to service.",
    date: "2023-12-10",
    highlighted: true
  },
  {
    title: "Best NSS Volunteer Award",
    description: "Sangeetha from IT Department (Batch 2021-2024) was honored with the Best NSS Volunteer Award by Anna University for her outstanding contributions.",
    date: "2024-02-20",
    highlighted: true
  },
  {
    title: "Anna University Volunteer Representation",
    description: "Pavan from ECE Department represented Anna University as a volunteer in various activities, earning accolades for his dedication and leadership.",
    date: "2023-11-05",
    highlighted: false
  },
  {
    title: "NSS Coordinator Excellence",
    description: "Dr. Kaythry, ECE Department, as NSS Coordinator, played a pivotal role in guiding the team to secure the 5-year NSS award, ensuring impactful service and success.",
    date: "2023-12-10",
    highlighted: false
  }
];

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState([]);
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    const all = mockAchievements.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setAchievements(all);
    setHighlighted(all.filter(item => item.highlighted).slice(0, 3));
  }, []);

  return (
    <MainLayout>

      <div className="achievements-container">
        <h2>Achievements</h2>

        {/* Highlighted Section */}
        <div className="highlighted-section">
          <h3>🏅 Highlighted Achievements</h3>
          <div className="highlighted-cards">
            {highlighted.map((item, index) => (
              <div className="highlight-card" key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>{new Date(item.date).toDateString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Achievements */}
        <div className="all-achievements">
          <h3>📅 All Achievements</h3>
          {achievements.map((item, index) => (
            <div className="achievement-item" key={index}>
              <span className="date">{new Date(item.date).toDateString()}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </MainLayout>
  );
};

export default AchievementsPage;

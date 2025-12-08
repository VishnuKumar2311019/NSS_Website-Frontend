import React from 'react';
import './MissionPage.css'; // we’ll create this CSS file next
import Nsslogo from '../assets/Nss-logo.png'


const MissionPage = () => {

  return (
  <div className="mission-wrapper">

    <div className="mission-container">
      {/* Section 1: Mission Statement */}
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          The NSS Unit of SSN College is committed to fostering social consciousness, leadership, and empathy
          in students by encouraging active involvement in meaningful community service.
        </p>
      </section>

      {/* Section 2: Core Objectives */}
      <section className="objectives">
        <h3>Core Objectives</h3>
        <ul>
          <li>Develop a sense of social and civic responsibility</li>
          <li>Bridge the gap between academic learning and community needs</li>
          <li>Provide hands-on opportunities to serve the community</li>
          <li>Promote national integration through collective action</li>
        </ul>
      </section>

      {/* Section 3: How We Serve */}
      <section className="approach">
        <h3>How We Serve</h3>
        <p>
          Our activities span across diverse fields, including environmental sustainability, rural development,
          education, health, and gender awareness. Through NSS, students participate in:
        </p>
        <ul>
          <li>🌿 Tree Plantation Drives</li>
          <li>🏥 Blood Donation Camps</li>
          <li>📚 Teaching Programs in Villages</li>
          <li>🧹 Clean-Up and Sanitation Initiatives</li>
          <li>📣 Awareness Campaigns</li>
        </ul>
      </section>

      {/* Section 4: Faculty Message */}
      <section className="coordinator-message">
        <h3>Message from the NSS Coordinator</h3>
        <p>
          “The true education of an engineer lies in how they use their skills to serve and uplift others. NSS
          helps students not only grow but give back — responsibly and passionately.” <br />
          <strong>– Prof. A.B. Kumar, NSS Faculty Coordinator</strong>
        </p>
      </section>
    </div>
  </div>
  );
};

export default MissionPage;

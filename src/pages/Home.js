import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainLayout from './MainLayout.js';

/* Load Google Font once */
const fontLink = document.createElement('link');
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap";
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const Home = () => {
  const [highlights, setHighlights] = useState([]);
  const [activities, setActivities] = useState([]);
  const [latestActivities, setLatestActivities] = useState([]);

  /* Fetch trending (optional) */
  useEffect(() => {
    axios.get('https://nss-website-backend.onrender.com/admin/get-trending')
      .then(response => setHighlights(response.data))
      .catch(error => console.error("Error fetching highlights:", error));
  }, []);

  /* Fetch latest activities (ticker) */
  useEffect(() => {
    fetch("https://nss-website-backend.onrender.com/api/activities/latest")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setActivities(data);
        else setActivities([]);
      })
      .catch(() => setActivities([]));
  }, []);

  /* Fetch all activities */
  useEffect(() => {
    fetch("https://nss-website-backend.onrender.com/api/activities")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setLatestActivities(data);
        else setLatestActivities([]);
      })
      .catch(() => setLatestActivities([]));
  }, []);

  return (
    <MainLayout>

      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="hero-text">Welcome to NSS UNIT OF SSN</h1>
      </div>

      {/* TRENDING + ACTIVITIES */}
      <div className="trending-activities-wrapper">

        {/* Activities Section */}
        <div className="activities-section">
          <h2>🟢 Latest Activities</h2>
          <div className="activities-box">
            <div className="scroll-container">
              {latestActivities.length === 0 ? (
                <p>No recent activities.</p>
              ) : (
                latestActivities.map((activity, index) => (
                  <Link key={index} to="/activities" className="ticker-item">
                    {activity.title} – <span>{activity.date}</span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTIONS */}
      <section className="mission-section">
        <h2><Link to="/mission">Our Mission</Link></h2>
        <p>
          The NSS Unit of SSN College is committed to instilling a sense of social responsibility
          and civic engagement among students through active community service.
        </p>
        <Link to="/mission" className="read-more">Read More →</Link>
      </section>

      <section className="annualreport-section">
        <h2><Link to="/annualreport">Annual Report</Link></h2>
        <p>A yearly snapshot of our initiatives, activities, and impact on society.</p>
        <Link to="/annualreport" className="read-more">View Reports →</Link>
      </section>

      <section className="volunteer-section">
        <h2><Link to="/volunteer_stories">Volunteer Stories</Link></h2>
        <blockquote>
          "Being part of NSS has helped me grow personally and professionally while making a real difference."
          <span> – Ananya, Final Year</span>
        </blockquote>
        <Link to="/volunteer_stories" className="read-more">See All Stories →</Link>
      </section>

      <section className="initiatives-section">
        <h2><Link to="/initiatives">Recent Initiatives</Link></h2>
        <ul>
          <li>🌿 Sapling Drive – July 2025</li>
          <li>🏥 Blood Donation Camp – June 2025</li>
          <li>🧹 Swachh Bharat Rally – May 2025</li>
        </ul>
        <Link to="/initiatives" className="read-more">Explore More →</Link>
      </section>

      <section className="collaborators-section">
        <h2><Link to="/collaborators">Our Collaborators</Link></h2>
        <div className="logo-row">
          <div className="collab-logo">EFI</div>
          <div className="collab-logo">Goonj</div>
        </div>
        <Link to="/collaborators" className="read-more">Meet Our Partners →</Link>
      </section>

      {/* FOOTER */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://instagram.com/nssofssn" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@nssofficial5737" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
          </a>
          <a href="https://x.com/SSNNSS579516641" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/nssofssn?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/nssssn/posts/?feedView=all" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

    </MainLayout>
  );
};

export default Home;

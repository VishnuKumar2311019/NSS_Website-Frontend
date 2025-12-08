import React, { useState, useEffect } from 'react';
import './Home.css';
import ssnLogo from '../assets/ssn-logo.png';
import nssLogo from '../assets/Nss-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Award, Users, HeartHandshake, Mail,Menu, X, TentTreeIcon,Image } from "lucide-react";





const fontLink = document.createElement('link');
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap";
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);



const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [highlights, setHighlights] = useState([]);
  const [activities, setActivities] = useState([]);//state for announcements section
  const [latestActivities, setLatestActivities] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    axios.get('https://nss-website-backend.onrender.com/admin/get-trending')
      .then(response => {
        setHighlights(response.data);
      })
      .catch(error => {
        console.error("Error fetching highlights:", error);
      });
      
  }, []);


    useEffect(() => {
    // Replace with your real backend API endpoint
    fetch("https://nss-website-backend.onrender.com/api/activities/latest")
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array
        if (Array.isArray(data)) {
          setActivities(data);
        } else {
          setActivities([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching latest activities:", err);
        setActivities([]); // Set empty array on error
      });
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
  fetch("https://nss-website-backend.onrender.com/api/activities") // replace with your backend API
    .then((res) => res.json())
    .then((data) => {
      // Ensure data is an array
      if (Array.isArray(data)) {
        setLatestActivities(data);
      } else {
        setLatestActivities([]);
      }
    })
    .catch((err) => {
      console.error("Error fetching activities:", err);
      setLatestActivities([]); // Set empty array on error
    });
}, []);


 

return (
  <div className="home-wrapper">
    {/* BANNER */}
    <div className="banner">
    <div className="logo-container">
      <img src={ssnLogo} alt="SSN Logo" className="logo" />
    </div>

    <div className="college-info">
      <h1>National Service Scheme (NSS) Unit of SSN </h1>
      <h2>Sri Sivasubramaniya Nadar College of Engineering, Kalavakkam - 603 110</h2>
      <p>(An Autonomous Institution, Affiliated to Anna University, Chennai)</p>
      <div className="time-display">
        {currentTime.toLocaleString()}
      </div>
    </div>

    <div className="nss-logo-container">
      <img src={nssLogo} alt="NSS Logo" className="nss-logo" />
    </div>
    </div>

     {/* ANNOUNCEMENTS */}
    <div className="announcement-bar">
      <marquee behavior="scroll" direction="left" scrollamount="6">
        🌟 Maintainance Visit  - Sept 23 • 📢 Team Meet – Sept 23 • 🎉 Orientation – Sept 24 
      </marquee>
    </div>

     {/* NAVBAR */}
<nav className="top-nav">
  {/* Hamburger Icon (only visible on mobile) */}
  <button
    className="hamburger"
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Toggle Menu"
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

  {/* Navigation Links */}
  <ul className={`nav-list ${isOpen ? "open" : ""}`}>
    <li>
      <Link to="/achievements"><Award size={18}/> Achievements</Link>
    </li>
    <li>
      <Link to="/annualcamp"><TentTreeIcon size={18}/> Annual Camp</Link>
    </li>
    <li className="dropdown">
  <Link to="#">
    <Users size={18}/> Teams ▾
  </Link>
  <ul className="dropdown-menu">
    <li><Link to="/teams"><Users size={18}/>Core Team</Link></li>
    <li><Link to="/teams"><Users size={18}/>Volunteers</Link></li>
  </ul>
</li>

<li className="dropdown">
  <Link to="#">
    <HeartHandshake size={18}/> Clubs ▾
  </Link>
  <ul className="dropdown-menu">
    <li><Link to="/clubsPage"><HeartHandshake size={18}/> Nature Club</Link></li>
    <li><Link to="/clubsPage"><HeartHandshake size={18}/> Sustainability Club</Link></li>
    <li><Link to="/clubsPage"><HeartHandshake size={18}/> Tulir Club</Link></li>
    <li><Link to="/clubsPage"><HeartHandshake size={18}/> Electoral Club</Link></li>
    <li><Link to="/clubsPage"><HeartHandshake size={18}/> Drug Awareness Club</Link></li>
    <li><Link to="/clubsPage"><HeartHandshake size={18}/> WISE Wing Club</Link></li>
  </ul>
</li>

    <li>
      <Link to="/contact"><Mail size={18}/> Contact</Link>
    </li>
    <li>
      <Link to="/gallery"><Image size={18}/> Gallery</Link>
    </li>
    <li className="mobile-login">
      <Link to="/Login">
        <button className="login-btn">Login</button>
      </Link>
    </li>
  </ul>

    {/* Desktop Login Button */}
    <div className="login-button">
      <Link to="/Login">
        <button className="login-btn">Login</button>
      </Link>
    </div>
  </nav>




      <div className="hero-section">
        <h1 className="hero-text">Welcome to NSS UNIT OF SSN</h1>
      </div>



     {/* TRENDING + ACTIVITIES SIDE BY SIDE */}
      <div className="trending-activities-wrapper">
        
        {/* Trending Section */}
        {/* 
        <div className="trending-section">
          <h2>🔔 What's Trending</h2>
          <div className="highlight-grid">
            {highlights.length === 0 ? (
              <p>No highlights at the moment.</p>
            ) : (
              highlights.map((item, index) => (
                <div key={index} className="highlight-card-home">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
        */}
    {/* Activities Section */}
     <div className="activities-section">
      <h2>🟢 Latest Activities</h2>
      <div className="activities-box">
        <div className="scroll-container">
          {!latestActivities || latestActivities.length === 0 ? (
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


   {/* ====== MAIN SECTIONS ====== */}
<section className="mission-section">
  <h2><Link to="/mission">Our Mission</Link></h2>
  <p>
    The NSS Unit of SSN College is committed to instilling a sense of social responsibility 
    and civic engagement among students. We foster volunteerism through active participation 
    in community development, health awareness, environmental initiatives, and national integration programs. 
  </p>
  <Link to="/mission" className="read-more">Read More →</Link>
</section>

<section className="annualreport-section">
  <h2><Link to="/annualreport">Annual Report</Link></h2>
  <p>
    A yearly snapshot of our initiatives, activities, and impact on society.
  </p>
  <Link to="/annualreport" className="read-more">View Reports →</Link>
</section>

<section className="volunteer-section">
  <h2><Link to="/volunteer_stories">Volunteer Stories</Link></h2>
  <blockquote>
    "Being part of NSS has helped me grow personally and professionally while making a real difference."  
    <span>– Ananya, Final Year</span>
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
            <a href="https://www.linkedin.com/company/nssssn/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" class="social-icon"/>
            </a>
        </div>
    </div>



  </div>
);

};

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ssnLogo from "../assets/ssn-logo.png";
import nssLogo from "../assets/Nss-logo.png";
import { Award, Users, HeartHandshake, Mail, Menu, X, TentTreeIcon, Image } from "lucide-react";
import "../pages/Home.css"; // reuse existing styles

const MainLayout = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== BLUE BANNER ===== */}
      <div className="banner">
        <div className="logo-container">
          <img src={ssnLogo} alt="SSN Logo" className="logo" />
        </div>

        <div className="college-info">
          <h2>Sri Sivasubramaniya Nadar College of Engineering, Kalavakkam - 603110</h2>
          <p>(An Autonomous Institution, Affiliated to Anna University, Chennai)</p>
          <h1>National Service Scheme (NSS) Unit of SSN</h1>
          <div className="time-display">{currentTime.toLocaleString()}</div>
        </div>

        <div className="nss-logo-container">
          <img src={nssLogo} alt="NSS Logo" className="nss-logo" />
        </div>
      </div>

      {/* ===== RED ANNOUNCEMENT BAR ===== */}
      <div className="announcement-bar">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🌟 Maintenance Visit – Sept 23 • 📢 Team Meet – Sept 23 • 🎉 Orientation – Sept 24
        </marquee>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="top-nav">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/achievements"><Award size={18}/> Achievements</Link></li>
          <li><Link to="/annualcamp"><TentTreeIcon size={18}/> Annual Camp</Link></li>

          <li className="dropdown">
            <Link to="#"><Users size={18}/> Teams ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="/teams">Core Team</Link></li>
              <li><Link to="/teams">Volunteers</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#"><HeartHandshake size={18}/> Clubs ▾</Link>
            <ul className="dropdown-menu">
              
              <li><Link to="/clubsPage">Nature Club</Link></li>
              <li><Link to="/clubsPage">Sustainability Club</Link></li>
              <li><Link to="/clubsPage">Tulir Club</Link></li>
              <li><Link to="/clubsPage">WISE Wing Club</Link></li>
            </ul>
          </li>

          <li><Link to="/gallery"><Image size={18}/> Gallery</Link></li>
          <li><Link to="/contact"><Mail size={18}/> Contact</Link></li>

          <li className="mobile-login">
            <Link to="/login"><button className="login-btn">Login</button></Link>
          </li>
        </ul>

        <div className="login-button">
          <Link to="/login"><button className="login-btn">Login</button></Link>
        </div>
      </nav>

      {/* ===== PAGE CONTENT ===== */}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // or reuse Home.css if already styled

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="top-nav">
      <ul className="nav-list">
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={isActive("/achievements") ? "active" : ""}>
          <Link to="/achievements">Achievements</Link>
        </li>

        <li className={isActive("/annualcamp") ? "active" : ""}>
          <Link to="/annualcamp">Annual Camp</Link>
        </li>

        <li className={isActive("/teams") ? "active" : ""}>
          <Link to="/teams">Teams</Link>
        </li>

        <li className={isActive("/clubs") ? "active" : ""}>
          <Link to="/clubs">Clubs</Link>
        </li>

        <li className={isActive("/gallery") ? "active" : ""}>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li className={isActive("/contact") ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

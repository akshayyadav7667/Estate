import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} className="logoImg" alt="logo" />
          <span>Estate</span>
        </a>

        {/* Desktop links */}
        <div className="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img src={profile} />
            <span>Akshay kumar</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}

        {/* Mobile menu icon */}
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src={menuIcon} alt="menu" />
        </div>

        {/* Mobile menu */}
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

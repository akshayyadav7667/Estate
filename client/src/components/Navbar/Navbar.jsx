import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>

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

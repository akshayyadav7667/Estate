import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} />
          <span>Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>
        <div className="menuIcon">
          <img src={menuIcon} />
        </div>
        <div className="menu">
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

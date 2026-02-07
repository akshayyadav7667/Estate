import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";
import profile from "../../assets/profile.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // const user = true;
  const {currentUser}= useContext(AuthContext);

  // console.log(currentUser)

  const handleClick=()=>{
    console.log("clicked")
  }


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
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={ currentUser.avatar ||  profile} />
            <span>{currentUser.username}</span>
            <Link to="/profile" onClick={handleClick} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
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
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

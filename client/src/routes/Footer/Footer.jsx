import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer">
        <div className="footer-logo">
          <h2 className="logo">Estate</h2>
          <div className="logo-contact">
            <p>
              Find your dream property with EstateHub. We provide the best
              residential and commercial properties at trusted locations.
            </p>
            <div className="logo-button">
              <input placeholder="enter your email" />
              <button>send</button>
            </div>
          </div>
        </div>
        <div className="footer-second">
          <div className="footer-left">
            {/* Left */}

            {/* Property Links */}
            <div className="footer-links">
              <h3>Properties</h3>
              <ul>
                <li>Buy Property</li>
                <li>Sell Property</li>
                <li>Rent Property</li>
                <li>New Projects</li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/about">About Us</Link>{" "}
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>Email: support@estatehub.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Kanpur, India</p>

              {/* Social */}
              <div className="social-icons">
                <span>🌐</span>
                <span>📘</span>
                <span>📸</span>
                <span>🐦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 EstateHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

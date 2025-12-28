import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import { Outlet } from "react-router-dom";
import './Layout.scss'

export default function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

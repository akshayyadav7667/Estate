import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import { Navigate, Outlet } from "react-router-dom";
import "./Layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../Footer/Footer";

 function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}



function RequiredAuth() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser)

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    currentUser && (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
  );
}


export {Layout,RequiredAuth}
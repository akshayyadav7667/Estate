import React from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";
// import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, email, password);

    try {
      const response = await apiRequest.post("/auth/register",
        {
          username,
          email,
          password,
        },
      );

      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
      // console.log(error)
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          {error && <span className="error">{error}</span>}
          <Link className="link">Do you have an account ?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={bg} />
      </div>
    </div>
  );
}

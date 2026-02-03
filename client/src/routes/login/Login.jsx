import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";
import './Login.scss'

export default function Login() {

  const [error,setError]=useState()

  const handleSubmit=()=>{

  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          {error && <span className="error">{error}</span>}
          <Link className="link">{"Don't"} you have an account ?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={bg} />
      </div>
    </div>
  );
}

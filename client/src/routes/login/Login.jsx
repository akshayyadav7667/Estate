import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";
import "./Login.scss";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [error, setError] = useState();
  const [IsLoading,setIsLoading]= useState(false);
  const navigate= useNavigate();

  const {updateUser}= useContext(AuthContext)



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    const formData = new FormData(e.target);

    const username= formData.get("username")
    // const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, password);

    try {
      const response = await apiRequest.post("/auth/login",
        {
          username,
          password,
        },
      );


      // localStorage.setItem("user",JSON.stringify(response.data))

      updateUser(response.data);

      navigate("/")



      // console.log(response)
      

    } catch (error) {
      setError(error.response.data.message)
    } finally{
      setIsLoading(false)
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Login Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" required placeholder="Password" />
          <button disabled={IsLoading} >Login</button>
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

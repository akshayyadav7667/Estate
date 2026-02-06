import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import bg from "../../assets/bg.png";
import "./profileUpdatePage.scss";
import apiRequest from "../../lib/apiRequest";
// import { userData } from "../../lib/dummy";

export default function ProfileUpdatepage() {
  const [error, setError] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // const {username,email,password}= Object.fromEntries(FormData)

    try {
      const response = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
      });

    //   console.log(response.data)

      updateUser(response.data)
      navigate('/profile')
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="updateProfile">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile </h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            defaultValue={currentUser.username}
          />

          <input
            name="email"
            type="email"
            //required
            placeholder="Email"
            defaultValue={currentUser.email}
          />
          <input
            name="password"
            type="password"
            
            placeholder="Password"
          />
          <button disabled={IsLoading}>Update</button>
          {error && <span className="error">{error}</span>}
          {/* <Link className="link">{"Don't"} you have an account ?</Link> */}
        </form>
      </div>
      <div className="imgContainer">
        <img src={currentUser.avatar || bg} />
      </div>
    </div>
  );
}

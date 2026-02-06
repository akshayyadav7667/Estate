import React from "react";
import profile from "../../assets/profile.jpg";
import List from "../../components/list/List";
import "./profilePage.scss";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

export default function ProfilePage() {
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);

  // console.log(currentUser);

  // useEffect(()=>{
  //   if(!currentUser)
  //   {
  //     navigate("/login")
  //   }
  // },[currentUser,navigate])

  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");

      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to='/profile/update'>
              <button>Update Profile</button>
            </Link>
          </div>

          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || profile} />
            </span>
            <span>
              Username : <b>{currentUser.username}</b>
            </span>
            <span>
              Email : <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>

          <List />

          <div className="title">
            <h1>Saved List</h1>
            <button>Update Profile</button>
          </div>

          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

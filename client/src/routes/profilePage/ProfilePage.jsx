import React from "react";
import profile from "../../assets/profile.jpg";
import List from "../../components/list/List";
import "./profilePage.scss";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");

      localStorage.removeItem("user");
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
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar:
              <img src={profile} />
            </span>
            <span>
              Username : <b>Akshay</b>
            </span>
            <span>
              Email : <b>akshaykumar@gmail.com</b>
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

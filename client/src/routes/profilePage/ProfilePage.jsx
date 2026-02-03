import React from "react";
import profile from "../../assets/profile.jpg";
import List from "../../components/list/List";
import './profilePage.scss';
import Chat from "../../components/chat/Chat";

export default function ProfilePage() {
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
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>

          <List/>

          <div className="title">
            <h1>Saved List</h1>
            <button>Update Profile</button>
          </div>

          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
  );
}

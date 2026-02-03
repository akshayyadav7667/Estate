import React, { useState } from "react";
import profile from "../../assets/profile.jpg";
import "./Chat.scss";
export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src={profile} />
          <span>Akshay kr</span>
          <p>Hello,my name is akshay kumar.</p>
        </div>

        <div className="message">
          <img src={profile} />
          <span>Akshay kr</span>
          <p>Hello,my name is akshay kumar.</p>
        </div>
        <div className="message">
          <img src={profile} />
          <span>Akshay kr</span>
          <p>Hello,my name is akshay kumar.</p>
        </div>
        <div className="message">
          <img src={profile} />
          <span>Akshay kr</span>
          <p>Hello,my name is akshay kumar.</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={profile} />
              Akshay
            </div>
            <span onClick={()=>setChat(null)} className="close">X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem43 is the my emssage of the ata </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

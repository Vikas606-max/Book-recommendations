import React, { useState } from "react";
import "./login.css";
import user_icon from "../assets/user_icon.png";
import email_icon from "../assets/email_icon.png";
import password_icon from "../assets/password_icon.png";
const Loginpag = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div>
    <div className="container">
      <div className="header">
        <div className="title">EasyFindBooks</div>
        <div className="underline"></div>
        <div className="text">{action}</div>
        
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="fergot-password">
          Lost password?<span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
    
   </div>
  );
};

export default Loginpag;

// import React, { useState } from "react";
// import "./login.css";
// import user_icon from "../assets/user_icon.png";
// import email_icon from "../assets/email_icon.png";
// import password_icon from "../assets/password_icon.png";
// const Loginpag = () => {
//   const [action, setAction] = useState("Sign Up");


//   return (
//     <div>
//     <div className="container">
//       <div className="header">
//         <div className="title">EasyFindBooks</div>
//         <div className="underline"></div>
//         <div className="text">{action}</div>
        
//       </div>

//       <div className="inputs">
//         {action === "Login" ? (
//           <div></div>
//         ) : (
//           <div className="input">
//             <img src={user_icon} alt="" />
//             <input type="text" placeholder="Name" />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input type="email" placeholder="Email" />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input type="password" placeholder="Password" />
//         </div>
//       </div>
//       {action === "Sign Up" ? (
//         <div></div>
//       ) : (
//         <div className="forgot-password">
//           Lost password?<span>Click Here!</span>
//         </div>
//       )}

//       <div className="submit-container">
//         <div
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Sign Up");
//           }}
//         >
//           Sign Up
//         </div>
//         <div
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Login");
//           }}
//         >
//           Login
//         </div>
//       </div>
//     </div>
    
//    </div>
//   );
// };

// export default Loginpag;
import React, { useState } from "react";
import "./login.css";

const Loginpag = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setAction("Login");
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="container">
      <h1>EasyFindBooks</h1>
      <h2>{action}</h2>

      {action === "Sign Up" && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div style={{ marginTop: "10px", fontWeight: "bold", color: "green" }}>
        {message}
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            if (action === "Login") {
              handleLogin();
            } else {
              handleSignup();
            }
          }}
        >
          {action}
        </button>
        <button
          onClick={() => {
            setAction(action === "Login" ? "Sign Up" : "Login");
            setMessage("");
          }}
        >
          Switch to {action === "Login" ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Loginpag;

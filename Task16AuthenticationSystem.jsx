// App.js
import React, { useState } from "react";

export default function Task16AuthenticationSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // fixed demo credentials (for simulation)
  const VALID_USER = "demoUser";
  const VALID_PASS = "demo1234";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      window.alert("Error: Both username and password are required.");
      return;
    }

    if (username !== VALID_USER && password !== VALID_PASS) {
      window.alert("Error: Both username and password are incorrect.");
      return;
    }

    if (username !== VALID_USER) {
      window.alert("Error: Username is incorrect.");
      return;
    }

    if (password !== VALID_PASS) {
      window.alert("Error: Password is incorrect.");
      return;
    }

    window.alert("Login successful! Welcome, " + username + ".");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #eef3ff;
        }
        .container {
          max-width: 380px;
          margin: 55px 100px;
          background: #ffffff;
          padding: 24px 26px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        h2 {
          text-align: center;
          color: #f21965ff;
          margin-bottom: 18px;
        }
        .form-group {
          margin-bottom: 12px;
        }
        label {
          display: block;
          margin-bottom: 4px;
          font-size: 14px;
          color: #333333;
        }
        input {
          width: 100%;
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
        }
        button {
          width: 100%;
          background-color: #e51e53ff;
          color: #ffffff;
          border: none;
          padding: 10px 0;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #de5a84ff;
        }
        .hint {
          font-size: 12px;
          color: #777777;
          margin-top: 8px;
          text-align: center;
        }
      `}</style>

      <div className="container">
        <h2>Basic Authentication</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="demoUser"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="demo1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
          <div className="hint">
            Hint: Username = demoUser, Password = demo1234
          </div>
        </form>
      </div>
    </>
  );
}



// App.js
import React, { useState } from "react";

export default function Task15LoginInterface() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!username.trim() || !password.trim() || !role) {
      setError("Please fill all fields and select a role.");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    window.alert(
      "Login successful!\n\n" +
        "User: " + username + "\n" +
        "Role: " + role
    );

    if (role === "admin") {
      window.location.href = "/admin-dashboard"; // change paths as needed
    } else if (role === "student") {
      window.location.href = "/student-home";
    } else if (role === "teacher") {
      window.location.href = "/teacher-panel";
    }
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
          width: 350px;
          margin: 70px 100px;
          background: #ffffff;
          padding: 24px 26px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        h2 {
          text-align: center;
          color: #188befff;
          margin-bottom: 18px;
        }
        .form-group {
          margin-bottom: 12px;
        }
        label {
          display: block;
          margin-bottom: 4px;
          font-size: 14px;
          color: #000000ff;
        }
        input, select {
          width: 100%;
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
        }
        button {
          width: 100%;
          background-color: #188befff;
          color: #ffffff;
          border: none;
          padding: 10px 0;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #1565c0;
        }
        .error {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 8px;
          min-height: 14px;
          text-align: center;
        }
      `}</style>

      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Select Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">-- Choose role --</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <button type="submit">Login</button>
          <div className="error">{error}</div>
        </form>
      </div>
    </>
  );
}



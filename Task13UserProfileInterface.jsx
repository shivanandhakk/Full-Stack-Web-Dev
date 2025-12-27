// App.js
import React, { useState } from "react";

export default function Task13UserProfileInterface() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("9876543210");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      newErrors.email = "Enter a valid email.";
    }

    if (!phone.trim() || phone.length !== 10 || isNaN(phone)) {
      newErrors.phone = "Enter a 10-digit number.";
    }

    if (bio.length > 100) {
      newErrors.bio = "Bio must be under 100 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // no errors? [web:144][web:171]
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    window.alert(
      "Profile updated successfully!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone
    );
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6ff;
        }
        .container {
          max-width: 500px;
          margin: 50px auto;
          background: #ffffff;
          padding: 24px 28px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          color: #ef2020ff;
          margin-bottom: 18px;
        }
        .form-group {
          margin-bottom: 12px;
        }
        label {
          display: block;
          margin-bottom: 4px;
          font-size: 16px;
          color: #e90b0bff;
        }
        input {
          width: 100%;
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
        }
        .error {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 3px;
          min-height: 14px;
        }
        button {
          width: 100%;
          background-color: #ef2020ff;
          color: #ffffff;
          border: none;
          padding: 10px 0;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #db2c49ff;
        }
      `}</style>

      <div className="container">
        <h2>Edit User Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="error">{errors.name}</div>
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{errors.email}</div>
          </div>

          <div className="form-group">
            <label>Phone (10 digits):</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="error">{errors.phone}</div>
          </div>

          <div className="form-group">
            <label>Short Bio:</label>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <div className="error">{errors.bio}</div>
          </div>

          <button type="submit">Save Profile</button>
        </form>
      </div>
    </>
  );
}



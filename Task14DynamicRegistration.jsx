// App.js
import React, { useState } from "react";

export default function Task14DynamicRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [level, setLevel] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !email.includes("@") || !email.includes("."))
      newErrors.email = "Enter a valid email.";
    if (!workshop) newErrors.workshop = "Select a workshop.";
    if (!level) newErrors.level = "Select your level.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // [web:144][web:177]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    window.alert(
      "Registration submitted!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Workshop: " + workshop + "\n" +
        "Level: " + level
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
        .page {
          max-width: 960px;
          margin: 40px auto;
          padding: 0 16px;
        }
        h2 {
          color: #283593;
          margin-bottom: 16px;
          text-align: center;
        }
        .layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .card {
          background: #ffffff;
          padding: 20px 22px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        .form-group {
          margin-bottom: 12px;
        }
        label {
          display: block;
          margin-bottom: 4px;
          font-size: 16px;
          color: #0d155cff;
        }
        input, select, textarea {
          width: 100%;
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
        }
        textarea {
          resize: vertical;
          min-height: 60px;
        }
        .error {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 3px;
          min-height: 14px;
        }
        button {
          width: 100%;
          background-color: #132598ff;
          color: #ffffff;
          border: none;
          padding: 10px 0;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #52559eff;
        }
        .preview-title {
          font-weight: bold;
          margin-bottom: 8px;
          color: #293ccaff;
        }
        .preview-row {
          margin-bottom: 6px;
          font-size: 14px;
        }
        .preview-label {
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page">
        <h2>Online Workshop Registration</h2>

        <div className="layout">
          {/* Left: Dynamic form */}
          <div className="card">
            <h3 style={{color: "black"}}>Registration Form</h3>
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
                <label>Select Workshop:</label>
                <select
                  value={workshop}
                  onChange={(e) => setWorkshop(e.target.value)}
                >
                  <option value="">-- Choose --</option>
                  <option value="React Basics">React Basics</option>
                  <option value="Full Stack with JS">Full Stack with JS</option>
                  <option value="Data Visualization">Data Visualization</option>
                </select>
                <div className="error">{errors.workshop}</div>
              </div>

              <div className="form-group">
                <label>Experience Level:</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="">-- Choose --</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <div className="error">{errors.level}</div>
              </div>

              <div className="form-group">
                <label>Notes (optional):</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Right: Live preview */}
          <div className="card">
            <div className="preview-title">Live Preview</div>
            <div className="preview-row">
              <span className="preview-label">Name: </span>
              <span>{name || "(not entered yet)"}</span>
            </div>
            <div className="preview-row">
              <span className="preview-label">Email: </span>
              <span>{email || "(not entered yet)"}</span>
            </div>
            <div className="preview-row">
              <span className="preview-label">Workshop: </span>
              <span>{workshop || "(not selected yet)"}</span>
            </div>
            <div className="preview-row">
              <span className="preview-label">Level: </span>
              <span>{level || "(not selected yet)"}</span>
            </div>
            <div className="preview-row">
              <span className="preview-label">Notes: </span>
              <span>{notes || "(no notes)"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



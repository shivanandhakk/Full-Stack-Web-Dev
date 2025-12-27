// App.js
import React, { useState } from "react";

export default function Task12EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");
  const [seats, setSeats] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      "Please confirm your registration:\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Event: " + eventName + "\n" +
      "Seats: " + seats + "\n\n" +
      "Click OK to confirm or Cancel to edit.";

    const isConfirmed = window.confirm(message); // [web:147][web:91]

    if (isConfirmed) {
      window.alert(
        "Thank you, " +
          name +
          "! Your registration is confirmed for \"" +
          eventName +
          "\" with " +
          seats +
          " seat(s)."
      );
      setName("");
      setEmail("");
      setEventName("");
      setSeats(1);
    } else {
      window.alert("You can edit your details and submit again.");
    }
  };

  return (
    <>
      {/* inline CSS for single page */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6ff;
        }
        .container {
          max-width: 480px;
          margin: 50px auto;
          background: #ffffff;
          padding: 24px 28px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          color: #ce47a3ff;
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
          background-color: #dc4f9dff;
          color: #ffffff;
          border: none;
          padding: 10px 0;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #cc4277ff;
        }
      `}</style>

      <div className="container">
        <h2>Tech Conference Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Select Event:</label>
            <select
              required
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            >
              <option value="">-- Choose --</option>
              <option value="Web Development Workshop">
                Web Development Workshop
              </option>
              <option value="AI & ML Seminar">AI & ML Seminar</option>
              <option value="Cloud Computing Summit">
                Cloud Computing Summit
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Seats:</label>
            <input
              type="number"
              min="1"
              required
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}



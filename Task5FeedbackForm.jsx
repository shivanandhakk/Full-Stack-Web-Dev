import React, { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(name + " says: " + feedback);
    setName("");
    setFeedback("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#4bbdb9f0",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ textAlign: "center" }}> Online Tech<br></br>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "94%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          style={{
            width: "94%",
            padding: "10px",
            height: "80px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#5f45abd3",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      {data && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "5px"
          }}
        >
          <strong>Submitted Feedback:</strong>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
}

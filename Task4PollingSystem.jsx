import React, { useState } from "react";

export default function Task4PollingSystem() {
  const [excellent, setExcellent] = useState(0);
  const [good, setGood] = useState(0);
  const [average, setAverage] = useState(0);

  const handleVote = (choice) => {
    if (choice === "excellent") setExcellent(excellent + 1);
    if (choice === "good") setGood(good + 1);
    if (choice === "average") setAverage(average + 1);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f4ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "25px",
          backgroundColor: "#e0e727eb",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#e92f2fff" }}>📊 Live Classroom Poll</h2>

        <p style={{ fontSize: "18px" }}>
          How was today’s class?
        </p>

        <button
          onClick={() => handleVote("excellent")}
          style={buttonStyle}
        >
          Excellent ⭐
        </button>

        <button
          onClick={() => handleVote("good")}
          style={buttonStyle}
        >
          Good 👍
        </button>

        <button
          onClick={() => handleVote("average")}
          style={buttonStyle}
        >
          Average 😐
        </button>

        <hr />

        <h3>📈 Live Results</h3>

        <p style={{ color: "#d80f6aff" }}>Excellent: {excellent}</p>
        <p style={{color:"green"}}>Good: {good}</p>
        <p style={{color:"blue"}}>Average: {average}</p>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

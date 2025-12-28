// App.js
import React, { useState } from "react";

export default function Task17StudentFeedbackSystem() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!rating) newErrors.rating = "Please choose a rating.";
    if (comments.trim().length < 5)
      newErrors.comments = "Comments must be at least 5 characters.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return; // [web:144][web:177]

    window.alert(
      "Feedback submitted!\n\n" +
        "Name: " + name + "\n" +
        "Subject: " + subject + "\n" +
        "Rating: " + rating + "/5"
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
          width: 400px;
          margin: 40px auto;
          padding: 0 16px;
        
          left: -4%;
        }
        .card {
          background: #ffffff;
          padding: 20px 22px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        h2 {
          text-align: center;
          color: #28933fff;
          margin-bottom: 16px;
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
        input, textarea {
          width: 100%;
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
        }
        textarea {
          resize: vertical;
          min-height: 70px;
        }
        .rating-row {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }
        .rating-row label {
          font-size: 13px;
        }
        .rating-row input {
          width: auto;
          margin-right: 3px;
        }
        .error {
          color: #ec1515ff;
          font-size: 12px;
          margin-top: 3px;
          min-height: 14px;
        }
        button {
          width: 100%;
          background-color: #28933fff;
          color: #ffffff;
          border: none;
          padding: 10px 0;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #13803bff;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>Student Feedback</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Student Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="error">{errors.name}</div>
            </div>

            <div className="form-group">
              <label>Subject / Course:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <div className="error">{errors.subject}</div>
            </div>

            <div className="form-group">
              <label>Rating (1 to 5):</label>
              <div className="rating-row">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num}>
                    <input
                      type="radio"
                      name="rating"
                      value={num}
                      checked={rating === String(num)}
                      onChange={(e) => setRating(e.target.value)}
                    />
                    {num}
                  </label>
                ))}
              </div>
              <div className="error">{errors.rating}</div>
            </div>

            <div className="form-group">
              <label>Comments:</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
              <div className="error">{errors.comments}</div>
            </div>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
}



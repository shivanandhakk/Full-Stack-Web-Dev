// App.js
import React, { useState } from "react";

function App() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    "The tips in this post are helpful.",
    "I like this clean blog layout.",
  ]);

  const handleAddComment = (e) => {
    e.preventDefault();
    const text = commentText.trim();
    if (!text) {
      window.alert("Type a comment first.");
      return;
    }
    setComments([text, ...comments]); // real-time update
    setCommentText("");
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
          max-width: 900px;
          margin: 30px auto;
          padding: 0 16px;
        }
        .main-heading {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: #283593;
          margin-bottom: 6px;
        }
        .main-sub {
          text-align: center;
          font-size: 13px;
          color: #777777;
          margin-bottom: 16px;
        }
        .layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 16px;
        }
        .card {
          background: #ffffff;
          padding: 16px 18px;
          border-radius: 10px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
        }
        .card-heading {
          font-size: 16px;
          font-weight: bold;
          color: #283593;
          margin-bottom: 6px;
        }
        .card-sub {
          font-size: 12px;
          color: #777777;
          margin-bottom: 10px;
        }
        .blog-text {
          font-size: 14px;
          color: #444444;
          line-height: 1.5;
        }
        .comment-title {
          font-weight: bold;
          margin-bottom: 8px;
          color: #283593;
        }
        textarea {
          width: 100%;
          padding: 8px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
          resize: vertical;
          min-height: 60px;
          margin-bottom: 8px;
        }
        button {
          background-color: #3949ab;
          color: #ffffff;
          border: none;
          padding: 6px 14px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background-color: #283593;
        }
        .comment-item {
          background: #f1f2ff;
          border-radius: 6px;
          padding: 5px 7px;
          margin-top: 5px;
          font-size: 13px;
        }
        @media (max-width: 768px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page">
        <div className="main-heading">My Blog</div>
        <div className="main-sub">
          Read the post on the left and see live comments updating on the right.
        </div>

        <div className="layout">
          {/* Blog content */}
          <div className="card">
            <div className="card-heading">Blog Post</div>
            <div className="card-sub">
Live collaborative coding and notes board            </div>
            <p className="blog-text">
              Teammates use the comment box to share their solutions, compare logic, and help each other fix errors in real time while they are all working on the same set of questions.            </p>
            <p className="blog-text">
              This feed tracks live updates from a collaborative online notes app, where students write and edit class summaries together and every change appears immediately on the screen.
            </p>
          </div>

          {/* Comments */}
          <div className="card">
            <div className="card-heading">Comments</div>
            <div className="card-sub">
              Add your feedback. 
            </div>

            <div className="comment-title">
              Total Comments: {comments.length}
            </div>

            <form onSubmit={handleAddComment}>
              <textarea
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button type="submit" style={{marginBottom: "8px"}}>Post</button>
            </form>

            {comments.map((c, i) => (
              <div key={i} className="comment-item">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// App.js
import React, { useState } from "react";

export default function Task18NotificationSystem() {
  const [showList, setShowList] = useState(false);

  const notifications = [
    "3 new students enrolled in your course.",
    "System update scheduled today at 8:00 PM.",
    "Your profile was viewed 5 times today.",
    "Reminder: Submit monthly report by Friday."
  ];

  const toggleNotifications = () => {
    setShowList(!showList);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6ff;
        }
        .dashboard {
          max-width: 900px;
          margin: 30px auto;
          padding: 0 16px;
        }
        .topbar {
          background: #283593;
          color: #ffffff;
          padding: 12px 18px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .title {
          font-size: 18px;
          font-weight: bold;
        }
        .notify-btn {
          background: #ffb300;
          color: #263238;
          border: none;
          padding: 8px 16px;
          font-size: 14px;
          border-radius: 20px;
          cursor: pointer;
        }
        .notify-btn:hover {
          background: #ffa000;
        }
        .content-card {
          margin-top: 18px;
          background: #ffffff;
          padding: 18px 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        h3 {
          margin-top: 0;
          color: #283593;
        }
        p {
          font-size: 14px;
          color: #555555;
        }
        .notifications-panel {
          margin-top: 12px;
          background: #e8eaf6;
          border-radius: 8px;
          padding: 10px 12px;
        }
        .notif-title {
          font-weight: bold;
          margin-bottom: 6px;
          color: #283593;
        }
        .notif-item {
          background: #ffffff;
          border-radius: 6px;
          padding: 6px 8px;
          margin-bottom: 6px;
          font-size: 13px;
        }
        .empty {
          font-size: 13px;
          color: #666666;
        }
      `}</style>

      <div className="dashboard">
        <div className="topbar">
          <div className="title">Admin Dashboard</div>
          <button className="notify-btn" onClick={toggleNotifications}>
            {showList ? "Hide Notifications" : "View Notifications"}
          </button>
        </div>

        <div className="content-card">
          <h3>Today’s Overview</h3>
          <p>Keep track of important updates and alerts related to your account.</p>

          {showList && (
            <div className="notifications-panel">
              <div className="notif-title">
                Notifications ({notifications.length})
              </div>
              {notifications.length > 0 ? (
                notifications.map((item, index) => (
                  <div key={index} className="notif-item">
                    {item}
                  </div>
                ))
              ) : (
                <div className="empty">You are all caught up. No new notifications.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}



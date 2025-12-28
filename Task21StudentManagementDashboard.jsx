// App.js
import React, { useState } from "react";

export default function Task21StudentManagementDashboard() {
  const [page, setPage] = useState("dashboard");

  const students = [
    { id: 1, name: "Aarav Nair", className: "CSE A", status: "Present" },
    { id: 2, name: "Diya Menon", className: "CSE B", status: "Absent" },
    { id: 3, name: "Rahul Kumar", className: "ECE A", status: "Present" },
    { id: 4, name: "Ananya R", className: "IT A", status: "Present" },
  ];

  const total = students.length;
  const present = students.filter((s) => s.status === "Present").length;

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #eef1ff;
        }
        .app {
          display: flex;
          min-height: 100vh;
        }
        .side {
          width: 200px;
          background: #283593;
          color: #fff;
          padding: 20px 14px;
        }
        .side-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .side-link {
          padding: 10px 10px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 6px;
        }
        .side-link.active {
          background: #3949ab;
        }
        .main {
          flex: 1;
          padding: 20px 22px;
        }
        .top-title {
          font-size: 20px;
          font-weight: bold;
          color: #283593;
        }
        .top-sub {
          font-size: 13px;
          color: #666;
          margin-bottom: 18px;
        }
        .cards {
          display: flex;
          gap: 18px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          padding: 20px 22px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
          min-width: 210px;
        }
        .card-label {
          font-size: 13px;
          color: #666;
          margin-bottom: 6px;
        }
        .card-value {
          font-size: 22px;
          font-weight: bold;
          color: #283593;
        }
        .box {
          background: #fff;
          border-radius: 12px;
          padding: 20px 22px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
          font-size: 14px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        th, td {
          padding: 10px 12px;
          border-bottom: 1px solid #e4e4e4;
          text-align: left;
        }
        th {
          background: #eef1ff;
        }
        .present {
          color: #1b5e20;
          font-weight: bold;
        }
        .absent {
          color: #c62828;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .app {
            flex-direction: column;
          }
          .side {
            width: 100%;
            display: flex;
            gap: 8px;
          }
        }
      `}</style>

      <div className="app">
        {/* Sidebar */}
        <div className="side">
          <div className="side-title">Student Desk</div>
          <div
            className={
              "side-link " + (page === "dashboard" ? "active" : "")
            }
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </div>
          <div
            className={"side-link " + (page === "students" ? "active" : "")}
            onClick={() => setPage("students")}
          >
            Students
          </div>
          <div
            className={
              "side-link " + (page === "attendance" ? "active" : "")
            }
            onClick={() => setPage("attendance")}
          >
            Attendance
          </div>
        </div>

        {/* Main area */}
        <div className="main">
          <div className="top-title">Student Management Dashboard</div>
          <div className="top-sub">
            Simple view of students and today&apos;s attendance.
          </div>

          {/* Big summary cards */}
          <div className="cards">
            <div className="card">
              <div className="card-label">Total students</div>
              <div className="card-value">{total}</div>
            </div>
            <div className="card">
              <div className="card-label">Present today</div>
              <div className="card-value">{present}</div>
            </div>
          </div>

          {/* Page content */}
          {page === "dashboard" && (
            <div className="box">
              <div className="card-label">Today&apos;s note</div>
              <p>
                Use the menu on the left to check the full student list or a
                quick attendance summary.
              </p>
            </div>
          )}

          {page === "students" && (
            <div className="box">
              <div className="card-label" style={{ marginBottom: "10px" }}>
                Student list
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student name</th>
                    <th>Class</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td>{s.className}</td>
                      <td className={s.status === "Present" ? "present" : "absent"}>
                        {s.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {page === "attendance" && (
            <div className="box">
              <div className="card-label">Attendance summary</div>
              <p>
                {present} out of {total} students are present for today&apos;s
                session.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}



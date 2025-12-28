// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const students = [
  { id: 1, name: "Aarav Nair", className: "CSE A" },
  { id: 2, name: "Diya Menon", className: "CSE B" },
  { id: 3, name: "Rahul Kumar", className: "ECE A" },
  { id: 4, name: "Ananya R", className: "IT A" },
  { id: 5, name: "Vikram S", className: "CSE A" },
  { id: 6, name: "Megha P", className: "ECE B" },
];

function DashboardPage() {
  return (
    <div className="box">
      <h2>Dashboard</h2>
      <p>
        Welcome to the student dashboard. Total students: {students.length}
      </p>
    </div>
  );
}

function StudentsPage() {
  return (
    <div className="box">
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student name</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AttendancePage() {
  const presentToday = 4; // simple fixed demo number
  return (
    <div className="box">
      <h2>Attendance</h2>
      <p>
        Present today: {presentToday} / {students.length}
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #eef1ff;
        }
        .wrapper {
          max-width: 1000px;      /* bigger */
          margin: 40px auto;      /* bigger */
          padding: 0 20px;        /* bigger */
        }
        .nav {
          background: #283593;
          padding: 12px 16px;     /* bigger */
          border-radius: 12px;    /* bigger */
          display: flex;
          gap: 16px;
          margin-bottom: 18px;
        }
        .nav a {
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;        /* bigger */
          padding: 8px 12px;      /* bigger */
          border-radius: 8px;
        }
        .nav a:hover {
          background: #3949ab;
        }
        .box {
          background: #ffffff;
          padding: 22px 22px;     /* bigger */
          border-radius: 12px;    /* bigger */
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
        }
        h2 {
          margin-top: 0;
          font-size: 20px;        /* bigger */
          color: #283593;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;        /* bigger */
        }
        th, td {
          padding: 10px 12px;     /* bigger */
          border-bottom: 1px solid #e0e0e0;
          text-align: left;
        }
        th {
          background: #f3f4ff;
        }
      `}</style>

      <BrowserRouter>
        <div className="wrapper">
          {/* Navigation bar */}
          <nav className="nav">
            <Link to="/">Dashboard</Link>
            <Link to="/students">Students</Link>
            <Link to="/attendance">Attendance</Link>
          </nav>

          {/* Page content */}
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

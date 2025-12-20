import React, { useState } from "react";

export default function Task7AttendanceTracker() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (studentName && course) {
      setEnrolledCourses([
        ...enrolledCourses,
        studentName + " enrolled in " + course
      ]);
      setStudentName("");
      setCourse("");
    }
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#eca9a9ff",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ textAlign: "center", color: "black" }}>Course Enrollment</h2>

      <form onSubmit={handleEnroll}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
          style={{ 
            width: "93%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <option value="">Select Course</option>
          <option>B.Sc. Computer Science</option>
          <option>B.Sc. IT</option>
          <option>B.Sc. AI</option>
          <option>BCA</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#6d6aafff",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Enroll
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{color:"black"}}>Enrolled List</h3>
        <ul>
          {enrolledCourses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from 'react';

export default function SampleForm() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted!");
  }

  return (
    <>
      <div>
        {/* Internal CSS */}
        <style>{`
          .form-container {
            width: 370px;
            padding: 28px;
            border: 1px solid #4CAF50;
            border-radius: 8px;
            background-color: rgba(217, 253, 190, 1);
            font-family: Arial;
            margin-left: 150px;
            margin-top: 1px;
          }

          .form-container h2 {
            text-align: center;
            margin-bottom: 15px;
          }

          .form-container input {
            width: 95%;
            padding: 8px;
            margin-top: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
          }

          .btn-submit {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background-color: #f4667bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
        `}</style>

        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Student Registration</h2>

          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <input type="text" name="dept" placeholder="Department" required />

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </>
  );
}

 import React, { useState } from "react";
export default function Task2LoginFormValidation() {
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // 1. Required Name Validation
    if (!name) {
      formErrors.name = "Name is required";
    }

    // 2. Email Format Validation
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    // 3. Phone Number Validation (10 digits)
    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    // 4. Age Validation (Voting Eligibility)
   if (!age) {
    formErrors.age = "Age is required";
   } else if (age < 18) {
    formErrors.age = "Not eligible to vote (Age must be 18+)";
   }

    // 5. Password Length Validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // 6. Confirm Password Match Validation
    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log({ name, email, phone, age, password });
    }
  };

 return (
  <>
    <style>
      {`
      .box {
        width: 350px;
        padding: 30px;
        background-color: #a0e6d7ff;
        border-radius: 10px;
        margin-left: 700px;
      }

      input {
        width: 90%;
        padding: 9px;
        margin-top: 10px;
      }

      button {
        width: 100%;
        padding: 10px;
        background-color: #e3618eff;
        color: white;
        border: none;
        margin-top: 15px;
      }
      `}
    </style>

    <div className="box">
      <h2 style={{ textAlign: "center", color: "black", fontSize: "40px", marginBottom: "10px" }}>Login Form</h2>
      <p style={{ textAlign: "center", color: "green"}}>Voting Validation</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" 
        onChange={(e) => setName(e.target.value)} />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input type="text" placeholder="Enter Email" 
        onChange={(e) => setEmail(e.target.value)} />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input type="text" placeholder="Enter Phone (10 digits)" 
        onChange={(e) => setPhone(e.target.value)} />
        <p style={{ color: "red" }}>{errors.phone}</p>

        <input type="number" placeholder="Enter Age" 
        onChange={(e) => setAge(e.target.value)} />
        <p style={{ color: "red" }}>{errors.age}</p>

        <input type="password" placeholder="Enter Password" 
        onChange={(e) => setPassword(e.target.value)} />
        <p style={{ color: "red" }}>{errors.password}</p>

        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} />
        <p style={{ color: "red" }}>{errors.confirmPass}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  </>
);
}